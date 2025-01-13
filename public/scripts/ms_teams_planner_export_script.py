# -------------------------------------------------------
#@title MS Graph API replacement!
# -------------------------------------------------------

# Much smaller than the actual Python API and has no dependencies.
# Should be extendable to support anything offered by the HTTP API as needed.

import json
import os
import re
import base64
import urllib.parse
import urllib.request
import urllib.error
import time

# Useful abstractions over the MS Graph API
def make_api_request(url, headers, method="GET", data=None):
    encoded_data = urllib.parse.urlencode(data).encode("utf-8") if data else None
    request = urllib.request.Request(url, headers=headers, data=encoded_data, method=method)
    try:
        with urllib.request.urlopen(request) as response:
            return json.loads(response.read())
    except urllib.error.HTTPError as e:
        error =f"API Request failed: {e.reason}"

        try:
            error_data = json.loads(e.read())
            error = error_data.get('error')
        except:
            pass

        raise Exception(error) from e

def make_paginated_api_request(url, headers, callback):
    while url:
        response_data = make_api_request(url, headers)
        callback(response_data.get("value", []))
        url = response_data.get("@odata.nextLink")
        if url:
            print("Fetching more...")

def get_access_token(CLIENT_ID, TENANT_ID, scopes):
    device_code_url = f"https://login.microsoftonline.com/{TENANT_ID}/oauth2/v2.0/devicecode"
    device_code_data = {
        'client_id': CLIENT_ID,
        'scope': ' '.join([f'https://graph.microsoft.com/{scope}' for scope in scopes])
    }

    device_code_response = make_api_request(device_code_url, headers={}, method="POST", data=device_code_data)

    print(f"Please go to {device_code_response['verification_uri']} and enter this code: {device_code_response['user_code']}")

    retry_interval = device_code_response.get('interval', 5)  # Default to 5 seconds if not provided

    token_url = f"https://login.microsoftonline.com/{TENANT_ID}/oauth2/v2.0/token"
    token_data = {
        "grant_type": "urn:ietf:params:oauth:grant-type:device_code",
        "client_id": CLIENT_ID,
        "device_code": device_code_response["device_code"],
    }

    # Poll until access token is ready
    while True:
        try:
            token_response = make_api_request(token_url, headers={}, method="POST", data=token_data)
            return token_response.get("access_token")
        except Exception as e:
            if "authorization_pending" in str(e):
                print("Waiting for user authorization... (Will check again in 5 seconds)")
                time.sleep(retry_interval)  # Avoid throttling...
            else:
                raise

# Util class - allows access of dictionary keys as class members
class AttrDict(dict):
    def __init__(self, *args, **kwargs):
        super(AttrDict, self).__init__(*args, **kwargs)
        self.__dict__ = self

# Class for fetching tasks/users etc with a valid access token
class AuthorizedClient():
    def __init__(self, access_token):
        self.access_token = access_token

    def fetch_all(self, url):
        headers = {"Authorization": f"Bearer {self.access_token}"}
        url = "https://graph.microsoft.com/v1.0"+url
        result = []

        def append(values):
            result.extend([AttrDict(**x) for x in values])

        make_paginated_api_request(url, headers, append)
        return result

    def fetch_one(self, url):
        headers = {"Authorization": f"Bearer {self.access_token}"}
        url = "https://graph.microsoft.com/v1.0"+url

        return AttrDict(**make_api_request(url, headers))

    def fetch_plans(self):
        return self.fetch_all("/me/planner/plans")

    def fetch_plan_tasks(self, plan_id):
        return self.fetch_all(f"/planner/plans/{plan_id}/tasks")

    def fetch_plan_buckets(self, plan_id):
        return self.fetch_all(f"/planner/plans/{plan_id}/buckets")

    def fetch_plan(self, plan_id):
        return self.fetch_one(f"/planner/plans/{plan_id}")

    def fetch_bucket(self, bucket_id):
        return self.fetch_one(f"/planner/buckets/{bucket_id}")

    def fetch_task(self, task_id):
        return self.fetch_one(f"/planner/tasks/{task_id}")

    def fetch_task_details(self, task_id):
        return self.fetch_one(f"/planner/tasks/{task_id}/details")

    def fetch_user(self, user_id):
        return self.fetch_one(f"/users/{user_id}")

# -------------------------------------------------------
#@title Initialize Global Caches
# -------------------------------------------------------

user_name_map = {}
bucket_name_map = {}
task_map = {}

def brief_pause():
    time.sleep(1.0)

def print_separator():
    print("-"*20)

def print_title(title):
    print()
    print_separator()
    print(title)
    print_separator()
    print()
    brief_pause()

# -------------------------------------------------------
#@title Get MS Graph API Access Token!
# -------------------------------------------------------

print_title("Welcome to the MS Teams Planner Export Script!")

CLIENT_ID = '2f7a887d-6fb2-45f8-b2bb-a42aea55e27d'
TENANT_ID = 'common'  # Use 'common' for multi-tenant apps
access_token = get_access_token(CLIENT_ID, TENANT_ID, ['user.read', 'tasks.read', 'user.readbasic.all'])
print("Authorized!")

# -------------------------------------------------------
#@title Create Client Object
# -------------------------------------------------------

client = AuthorizedClient(access_token)

# -------------------------------------------------------
#@title Fetch the tasks!
# -------------------------------------------------------

while True:
    print_title("Fetching accessible plans/boards")
    plans = client.fetch_plans()

    print("Here are the list of plans you can choose from:")

    planIDs = []
    print("0) Reload options")
    for i, plan in enumerate(plans):
        print(str(i + 1)+")", plan.title)
        planIDs.append(plan)

    print("")

    print("If you don't see the one you are expecting, make sure you have opened that plan at least once in Teams - then choose option 0 to reload.")
    print("Please select a plan to fetch data from, by the number beside it.")
    planIndex = input("> ")
    while not planIndex.isdigit() or int(planIndex) < 0 or int(planIndex) > len(planIDs):
        print("Invalid value")
        planIndex = input("> ")
    planIndex = int(planIndex)

    if planIndex != 0:
        break

planIndex -= 1
print("You have selected '"+planIDs[planIndex].title+"', which has the ID "+planIDs[planIndex].id)
brief_pause()

planID = planIDs[planIndex].id

# Fetch the list of tasks
print_title("Fetching tasks...")

tasks = client.fetch_plan_tasks(planID)

print(str(len(tasks)) + " tasks fetched!")

# -------------------------------------------------------
#@title Chose what to export (which buckets/backlogs, and format)
# -------------------------------------------------------

print_title("Format Selection")

while True:
    print("Are we exporting the raw data, or the data needed for company documents/handovers? (raw, document)")
    full_data_export = input("> ").strip().lower()

    if full_data_export != 'raw' and full_data_export != 'document':
        print("Please enter 'raw', or 'document'")
        continue

    full_data_export = full_data_export == 'raw'
    break

if full_data_export:
    print("Full data export - all buckets will be exported.")
    backlogs_of_interest_names = None
else:
    buckets = client.fetch_plan_buckets(planID)

print_title("Bucket Selection")

while not full_data_export:
    print("Please enter a comma delimited set of numbers for which buckets you would like to export data from (e.g 1,4,5).")
    print("You may also use @ and then a word to select all buckets with that word (e.g 1,7,@Complete)")
    print("Enter ALL to export all of them.")

    print_separator()
    for i, bucket in enumerate(buckets):
        print(str(i + 1)+")", bucket.name)
    print_separator()

    while True:
        chosen_buckets = input("> ")
        if chosen_buckets.strip().lower() == "all":
            backlogs_of_interest_names = None
            break

        indexes = [x.strip() for x in chosen_buckets.split(",")]
        if not all([x.isdigit() or (len(x)>0 and x[0]=='@') for x in indexes]):
            print("Invalid input")
            continue

        backlogs_of_interest_names = []
        for x in indexes:
            if x[0] != '@':
                index = int(x) - 1
                if index < 0 or index >= len(buckets):
                    print("Invalid index")
                    continue

                backlogs_of_interest_names.append(buckets[index].name)
            else:
                filter = x[1:].lower()
                backlogs_of_interest_names += [x.name for x in buckets if filter in x.name.lower()]
        break

    # remove any duplicates
    if backlogs_of_interest_names != None:
        backlogs_of_interest_names = list(dict.fromkeys(backlogs_of_interest_names))

    print("You have selected the following buckets:")
    print("")
    print_separator()
    if backlogs_of_interest_names == None:
        print("All")
    else:
        print('\n'.join(backlogs_of_interest_names))
    print_separator()
    print("Is this correct? (y/n)")

    all_good = input("> ").lower()
    while all_good != 'n' and all_good != 'y':
        print("Please enter y or n")
    if all_good == 'y':
        break
    else:
        print("Let's try again then!")

print("Buckets selected - we can export the data now!")
brief_pause()

print_title("Exporting...")

# -------------------------------------------------------
#@title Export the data!
# -------------------------------------------------------

import csv
from urllib.parse import unquote
from datetime import datetime

tasks_list = []

# Loop through each task & contributor and append to tasks_list
for task in tasks:

    if task.bucketId not in bucket_name_map:
        if task.bucketId == None:
            bucket_name_map[task.bucketId] = "N/A (not on a list)"
        else:
            bucket_name_map[task.bucketId] = client.fetch_bucket(task.bucketId).name
    bucket_name = bucket_name_map[task.bucketId]

    if backlogs_of_interest_names != None and bucket_name not in backlogs_of_interest_names:
        continue

    # Fetch the task details
    if task.id not in task_map:
        task_map[task.id] = client.fetch_task_details(task.id)

    task_details = task_map[task.id]

    # Get the display name of the assigned user
    # If no assigned users, output with a single one (0NONE)
    users = task.assignments.keys()
    if len(users) == 0:
        users = ['0NONE']
    user_name_map['0NONE'] = '0NONE'

    for user_id in users:

        assigned_user_name = None
        if user_id in user_name_map:
            assigned_user_name = user_name_map[user_id]
        else:
            assigned_user = client.fetch_user(user_id)
            assigned_user_name = assigned_user.displayName
            user_name_map[user_id] = assigned_user_name

        # Get the links - filter to only github ones
        is_contributor = False
        links = []
        for url in task_details.references.keys():
            link = task_details.references[url]

            if 'alias' not in link:
                print("Possible error: No alias key", link)
                continue

            if 'github' not in url:
                continue

            links.append(unquote(url))

            if user_id == str(link['lastModifiedBy']['user']['id']):
                is_contributor = True

        contribution_type = "" # start with unknown
        if len(links) > 0: # if we have links, then anyone who added them is a "Main Contributor"
            contribution_type = "Main Contributor" if is_contributor else "Reviewer"
        elif len(users) == 1: # if we have no links, but only one assigned member, assume they are the "Main Contributor"
            contribution_type = "Main Contributor"

        tasks_list.append([bucket_name, assigned_user_name, task.title, contribution_type, sorted(links)])

# Choose a nice name
timestamp = datetime.now().isoformat(timespec='seconds')
safe_timestamp = timestamp.replace(':', '-')
output_filename = f'{planIDs[planIndex].title}_Tasks_{safe_timestamp}.csv'

# Open the CSV file and write out the results!
with open(output_filename, 'w', newline='') as csvfile:
    writer = csv.writer(csvfile)

    if full_data_export:
      sorted_tasks = sorted(tasks_list, key=lambda x: (x[0], x[2], x[3], x[1]))
      writer.writerow(['List', 'Name', 'Contribution Type', 'Task Name', 'Task Attachment'])
      for task in sorted_tasks:
        writer.writerow([task[0], task[1], task[3], task[2], '\n'.join(task[4])])
    else:
      sorted_tasks = sorted(tasks_list, key=lambda x: (x[1], x[3], x[0], x[2]))
      writer.writerow(['Name', 'Type', 'Task Name', 'Task Attachment'])
      for task in sorted_tasks:
        if task[1] == '0NONE':
            continue
        writer.writerow([task[1].title(), "-" if len(task[3]) == 0 else task[3], task[2], '\n'.join(task[4])])

print_title("Finished! You can find the output at " + output_filename)
