---
Title: Documentation Backlog - Rails Backend
---

# Doubtfire API

## User Authentication and Management (Devise)

### Sign In
- **Request Method**: GET
- **URL**: `/users/sign_in`
- **Parameters**: None
- **Response Format**: HTML
- **Example**:
  ```html
  <form action="/users/sign_in" method="post">
    <!-- form fields -->
  </form>
  ```

- **Request Method**: POST
- **URL**: `/users/sign_in`
- **Parameters**:
  ```json
  {
    "user": {
      "email": "user@example.com",
      "password": "password"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Signed in successfully."
  }
  ```

- **Request Method**: DELETE
- **URL**: `/users/sign_out`
- **Parameters**: None
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Signed out successfully."
  }
  ```

### Password Management
- **Request Method**: GET
- **URL**: `/users/password/new`
- **Parameters**: None
- **Response Format**: HTML
- **Example**:
  ```html
  <form action="/users/password" method="post">
    <!-- form fields -->
  </form>
  ```

- **Request Method**: GET
- **URL**: `/users/password/edit`
- **Parameters**: None
- **Response Format**: HTML
- **Example**:
  ```html
  <form action="/users/password" method="post">
    <!-- form fields -->
  </form>
  ```

- **Request Method**: PATCH/PUT/POST
- **URL**: `/users/password`
- **Parameters**:
  ```json
  {
    "user": {
      "email": "user@example.com",
      "password": "new_password",
      "password_confirmation": "new_password"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Password updated successfully."
  }
  ```

### User Registration
- **Request Method**: GET
- **URL**: `/users/sign_up`
- **Parameters**: None
- **Response Format**: HTML
- **Example**:
  ```html
  <form action="/users" method="post">
    <!-- form fields -->
  </form>
  ```

- **Request Method**: GET
- **URL**: `/users/edit`
- **Parameters**: None
- **Response Format**: HTML
- **Example**:
  ```html
  <form action="/users" method="post">
    <!-- form fields -->
  </form>
  ```

- **Request Method**: PATCH/PUT/DELETE/POST
- **URL**: `/users`
- **Parameters**:
  ```json
  {
    "user": {
      "email": "user@example.com",
      "password": "password",
      "password_confirmation": "password"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "User registered/updated successfully."
  }
  ```

## File Downloads

### Download Course Resources
- **Request Method**: GET
- **URL**: `/api/submission/unit/:id/portfolio`
- **Parameters**:
  ```json
  {
    "id": "unit_id"
  }
  ```
- **Response Format**: File
- **Example**:
  ```json
  {
    "file": "portfolio.pdf"
  }
  ```

- **Request Method**: GET
- **URL**: `/api/submission/unit/:id/task_definitions/:task_def_id/download_submissions`
- **Parameters**:
  ```json
  {
    "id": "unit_id",
    "task_def_id": "task_definition_id"
  }
  ```
- **Response Format**: File
- **Example**:
  ```json
  {
    "file": "submissions.zip"
  }
  ```

- **Request Method**: GET
- **URL**: `/api/submission/unit/:id/task_definitions/:task_def_id/student_pdfs`
- **Parameters**:
  ```json
  {
    "id": "unit_id",
    "task_def_id": "task_definition_id"
  }
  ```
- **Response Format**: File
- **Example**:
  ```json
  {
    "file": "student_pdfs.zip"
  }
  ```

- **Request Method**: GET
- **URL**: `/api/units/:id/all_resources`
- **Parameters**:
  ```json
  {
    "id": "unit_id"
  }
  ```
- **Response Format**: File
- **Example**:
  ```json
  {
    "file": "resources.zip"
  }
  ```

## API Root and Documentation

### API Root
- **URL**: `/`
- **Parameters**: None
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "API Root"
  }
  ```

### Swagger API Documentation
- **URL**: `/api/docs`
- **Parameters**: None
- **Response Format**: HTML
- **Example**:
  ```html
  <html>
    <body>
      <h1>Swagger API Documentation</h1>
    </body>
  </html>
  ```

## Sidekiq

### Sidekiq Management Interface
- **URL**: `/sidekiq`
- **Parameters**: None
- **Response Format**: HTML
- **Example**:
  ```html
  <html>
    <body>
      <h1>Sidekiq Management</h1>
    </body>
  </html>
  ```

## Action Mailbox

### Email Handling
- **Request Method**: POST
- **URL**: `/rails/action_mailbox/postmark/inbound_emails`
- **Parameters**:
  ```json
  {
    "email": {
      "to": "example@domain.com",
      "from": "sender@domain.com",
      "subject": "Hello",
      "body": "Email body"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Email received via Postmark"
  }
  ```

- **Request Method**: POST
- **URL**: `/rails/action_mailbox/relay/inbound_emails`
- **Parameters**:
  ```json
  {
    "email": {
      "to": "example@domain.com",
      "from": "sender@domain.com",
      "subject": "Hello",
      "body": "Email body"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Email received via Relay"
  }
  ```

- **Request Method**: POST
- **URL**: `/rails/action_mailbox/sendgrid/inbound_emails`
- **Parameters**:
  ```json
  {
    "email": {
      "to": "example@domain.com",
      "from": "sender@domain.com",
      "subject": "Hello",
      "body": "Email body"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Email received via Sendgrid"
  }
  ```

- **Request Method**: GET
- **URL**: `/rails/action_mailbox/mandrill/inbound_emails`
- **Parameters**: None
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Mandrill health check passed"
  }
  ```

- **Request Method**: POST
- **URL**: `/rails/action_mailbox/mandrill/inbound_emails`
- **Parameters**:
  ```json
  {
    "email": {
      "to": "example@domain.com",
      "from": "sender@domain.com",
      "subject": "Hello",
      "body": "Email body"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Email received via Mandrill"
  }
  ```

- **Request Method**: POST
- **URL**: `/rails/action_mailbox/mailgun/inbound_emails/mime`
- **Parameters**:
  ```json
  {
    "email": {
      "to": "example@domain.com",
      "from": "sender@domain.com",
      "subject": "Hello",
      "body": "Email body"
    }
  }
  ```
- **Response Format**: JSON
- **Example**:
  ```json
  {
    "message": "Email received via Mailgun"
  }
  ```

## Action Mailbox Conductor

### Conductor Management Interface
- **Request Method**: GET
- **URL**: `/rails/conductor/action_mailbox/inbound_emails`
- **Parameters**: None
- **Response Format**: JSON
- **Example**:
  ```json
  {
  "inbound_emails": [
    {
      "id": "1",
      "to": "example@domain.com",
      "from": "sender@domain.com",
      "subject": "Hello",
      "body": "Email body"
    }
   ]
  }
  ```

# Environment Configurations

This section documents the configurations found in the `config/environments` directory of the Rails backend for Ontrack. Each file configures the application behavior for different environments such as development, production, staging, and testing.

## 1. Development Environment (`development.rb`)

### Purpose
The `development.rb` file contains settings specific to the development environment. It prioritizes ease of development and debugging.

### Key Configurations
- **Code Reloading:**
  - `config.cache_classes = false`: Disables class caching, allowing code changes to be reflected without restarting the server.
- **Eager Loading:**
  - `config.eager_load = false`: Disables eager loading of code on boot.
- **Error Reporting:**
  - `config.consider_all_requests_local = true`: Shows full error reports.
- **Caching:**
  - Conditional caching based on environment variables or presence of a file.
  - `config.action_controller.perform_caching = true/false`: Enables or disables caching.
  - `config.cache_store = :memory_store / :redis_cache_store / :null_store`: Configures the cache store based on environment variables.
- **File Storage:**
  - `config.active_storage.service = :local`: Stores uploaded files on the local file system.
- **Action Mailer:**
  - `config.action_mailer.raise_delivery_errors = false`: Ignores delivery errors.
  - `config.action_mailer.perform_caching = false`: Disables mailer caching.
  - `config.action_mailer.delivery_method = :file`: Writes emails to file instead of sending them.
- **Deprecation Notices:**
  - `config.active_support.deprecation = :log`: Logs deprecation warnings.
  - `config.active_support.disallowed_deprecation = :raise`: Raises exceptions for disallowed deprecations.
  - `config.active_support.disallowed_deprecation_warnings = []`: Specifies which deprecation warnings are disallowed.
- **Database:**
  - `config.active_record.migration_error = :page_load`: Raises an error on page load if there are pending migrations.
  - `config.active_record.verbose_query_logs = true`: Highlights code that triggered database queries in logs.
- **File Watcher:**
  - `config.file_watcher = ActiveSupport::EventedFileUpdateChecker`: Uses an evented file watcher to asynchronously detect changes.
- **Logging:**
  - `config.log_level = :debug`: Sets the logging level to debug.
- **Miscellaneous:**
  - `config.action_dispatch.best_standards_support = :builtin`: Uses best-standards-support built into browsers.
  - `Faker::Config.random = Random.new(77)`: Sets deterministic randomness for Faker.
  - `config.pdfgen_quiet = false`: Sets the verbosity of pdfgen logs.
  - `config.active_record.encryption.key_derivation_salt = ENV['DF_ENCRYPTION_KEY_DERIVATION_SALT'] || 'default_salt'`: Configures ActiveRecord encryption keys.

## 2. Production Environment (`production.rb`)

### Purpose
The `production.rb` file contains settings specific to the production environment, optimized for performance and security.

### Key Configurations
- **Code Caching:**
  - `config.cache_classes = true`: Enables class caching for better performance.
- **Caching:**
  - `config.cache_store = :redis_cache_store`: Uses Redis for caching.
  - Configures Redis connection and error handling.
- **Error Reporting:**
  - `config.consider_all_requests_local = false`: Disables full error reports.
- **Static Files:**
  - `config.serve_static_files = true`: Enables serving of static files.
- **Eager Loading:**
  - `config.eager_load = true`: Enables eager loading of code on boot.
- **I18n:**
  - `config.i18n.fallbacks = true`: Enables locale fallbacks for I18n.
- **Deprecation Notices:**
  - `config.active_support.deprecation = :notify`: Sends deprecation notices to registered listeners.
- **Middleware:**
  - `config.middleware.delete Rack::Runtime`: Removes runtime middleware to harden against timing attacks.
- **Logging:**
  - `config.log_level = :info`: Sets the logging level to info.
- **Action Mailer:**
  - `config.action_mailer.perform_deliveries = (ENV['DF_MAIL_PERFORM_DELIVERIES'] || 'yes') == 'yes'`: Configures whether to perform email deliveries.
  - `config.action_mailer.delivery_method = :smtp`: Uses SMTP for email delivery.
  - Configures SMTP settings based on environment variables.
- **ActiveRecord Encryption:**
  - Configures ActiveRecord encryption keys using environment variables.

## 3. Staging Environment (`staging.rb`)

### Purpose
The `staging.rb` file configures settings for the staging environment, which mirrors the production environment with minor changes.

### Key Configurations
- **SSL:**
  - `config.force_ssl = false`: Disables forcing SSL.
- **Logging:**
  - `config.log_level = :info`: Sets the logging level to info.
- **Deterministic Randomness:**
  - `Faker::Config.random = Random.new(77)`: Sets deterministic randomness for Faker.

## 4. Test Environment (`test.rb`)

### Purpose
The `test.rb` file contains settings specific to the test environment, optimized for running the application's test suite.

### Key Configurations
- **Code Caching:**
  - `config.cache_classes = true`: Enables class caching for tests.
- **Static Files:**
  - `config.serve_static_files = true`: Configures static asset server for tests.
  - `config.static_cache_control = 'public, max-age=3600'`: Sets Cache-Control headers.
- **Eager Loading:**
  - `config.eager_load = false`: Disables eager loading.
- **Error Reporting:**
  - `config.consider_all_requests_local = true`: Shows full error reports.
- **Caching:**
  - `config.action_controller.perform_caching = false`: Disables caching.
- **Exception Handling:**
  - `config.action_dispatch.show_exceptions = false`: Raises exceptions instead of rendering templates.
- **Request Forgery Protection:**
  - `config.action_controller.allow_forgery_protection = false`: Disables request forgery protection.
- **Action Mailer:**
  - `config.action_mailer.delivery_method = :test`: Uses the test delivery method for emails.
- **Deprecation Notices:**
  - `config.active_support.deprecation = :stderr`: Prints deprecation notices to stderr.
- **Logging:**
  - `config.log_level = :warn`: Sets the logging level to warn.
- **ActiveRecord Encryption:**
  - Configures ActiveRecord encryption keys.
- **Environment Variables:**
  - Sets specific environment variables for the test environment.

# Initializer Configurations

This section documents the configurations found in the `config/initializers` directory of the Rails backend for Ontrack. Each file configures the application behavior during the initialization phase.

## 1. Backtrace Silencer (`backtrace_silencers.rb`)

### Purpose
This file allows you to add or remove backtrace silencers for libraries you don't wish to see in your backtraces.

### Key Configurations
- **Add Silencer**:
  ```ruby
  # Rails.backtrace_cleaner.add_silencer { |line| line =~ /my_noisy_library/ }
  ```
- **Remove All Silencers**:
  ```ruby
  # Rails.backtrace_cleaner.remove_silencers!
  ```

## 2. Devise Configuration (`devise.rb`)

### Purpose
This file is used to configure Devise, a flexible authentication solution for Rails.

### Key Configurations
- **Mailer Configuration**:
  ```ruby
  config.mailer_sender = 'please-change-me-at-config-initializers-devise@example.com'
  ```

- **ORM Configuration**:
  ```ruby
  require 'devise/orm/active_record'
  ```

- **Authentication Keys**:
  ```ruby
  config.authentication_keys = [:username]
  ```

- **Case-Insensitive Keys**:
  ```ruby
  config.case_insensitive_keys = [:email, :username]
  ```

- **Whitespace Stripped Keys**:
  ```ruby
  config.strip_whitespace_keys = [:email, :username]
  ```

- **Session Storage**:
  ```ruby
  config.skip_session_storage = [:http_auth]
  ```

- **Password Length**:
  ```ruby
  config.password_length = 8..128
  ```

- **Token Expiry**:
  ```ruby
  config.reset_password_within = 6.hours
  ```

- **Sign Out Method**:
  ```ruby
  config.sign_out_via = :delete
  ```

- **Navigational Formats**:
  ```ruby
  config.navigational_formats = ['*/*', :json]
  ```

- **Secret Key**:
  ```ruby
  config.secret_key = Doubtfire::Application.secrets.secret_key_devise if Rails.env.production?
  ```

- **LDAP Configuration**:
  ```ruby
  config.ldap_use_admin_to_bind = ENV.fetch('DF_LDAP_USE_ADMIN_TO_BIND', 'false').to_s.downcase != 'false'
  ```

- **Responder Configuration**:
  ```ruby
  config.responder.error_status = :unprocessable_entity
  config.responder.redirect_status = :see_other
  ```

## 3. Inflections (`inflections.rb`)

### Purpose
This file is used to add new inflection rules for pluralization and singularization of words.

### Key Configurations
- **Irregular Inflections**:
  ```ruby
  ActiveSupport::Inflector.inflections do |inflect|
    inflect.irregular 'campus', 'campuses'
  end
  ```

## 4. Log Initializer (`log_initializer.rb`)

### Purpose
This file configures the logging output and format.

### Key Configurations
- **Log Output to STDOUT**:
  ```ruby
  unless Rails.env.test?
    Rails.logger.broadcast_to(ActiveSupport::Logger.new($stdout))
  end
  ```

- **Custom Log Formatter**:
  ```ruby
  class FormatifFormatter < Logger::Formatter
    include ActiveSupport::TaggedLogging::Formatter

    def call(severity, timestamp, _progname, msg)
      remote_ip = Thread.current.thread_variable_get(:ip) || 'unknown'
      "#{timestamp},#{remote_ip},#{severity}: #{msg.to_s.gsub(/\n/, '\n')}\n"
    end
  end

  Rails.logger.formatter = FormatifFormatter.new
  ```

## 5. MIME Types (`mime_types.rb`)

### Purpose
This file allows you to add new MIME types for use in respond_to blocks.

### Key Configurations
- **Add New MIME Types**:
  ```ruby
  # Mime::Type.register "text/richtext", :rtf
  # Mime::Type.register_alias "text/html", :iphone
  ```

## 6. Session Store (`session_store.rb`)

### Purpose
This file configures how session data is stored.

### Key Configurations
- **Cookie Store**:
  ```ruby
  Doubtfire::Application.config.session_store :cookie_store, key: '_doubtfire_session'
  ```

- **ActiveRecord Store**:
  ```ruby
  # Doubtfire::Application.config.session_store :active_record_store
  ```

## 7. Sidekiq Configuration (`sidekiq.rb`)

### Purpose
This file configures Sidekiq, a background job processing library.

### Key Configurations
- **Server Configuration**:
  ```ruby
  Sidekiq.configure_server do |config|
    config.redis = { url: ENV.fetch('DF_REDIS_SIDEKIQ_URL', 'redis://localhost:6379/1') }
    config.logger = Rails.logger
  end
  ```

- **Client Configuration**:
  ```ruby
  Sidekiq.configure_client do |config|
    config.redis = { url: ENV.fetch('DF_REDIS_SIDEKIQ_URL', 'redis://localhost:6379/1') }
    config.logger = Rails.logger
  end
  ```

## 8. Swagger Configuration (`swagger.rb`)

### Purpose
This file configures Swagger, a tool for documenting APIs.

### Key Configurations
- **Swagger URL and App URL**:
  ```ruby
  GrapeSwaggerRails.options.url = '/api/swagger_doc'
  GrapeSwaggerRails.options.before_action do
    GrapeSwaggerRails.options.app_url = request.protocol + request.host_with_port
  end

  GrapeSwaggerRails.options.before_filter_proc = proc {
    GrapeSwaggerRails.options.app_url = request.protocol + request.host_with_port
  }
  ```

## 9. TurnItIn Initializer (`turn_it_in_initializer.rb`)

### Purpose
This file initializes the TurnItIn API configuration.

### Key Configurations
- **Load Configuration**:
  ```ruby
  require_relative '../../app/helpers/turn_it_in'
  config = Doubtfire::Application.config

  TurnItIn.load_config(config)
  ```

- **Background Jobs**:
  ```ruby
  if config.tii_enabled
    require 'tca_client'
    config.logger = Rails.logger

    unless Rails.env.test?
      config.after_initialize do
        TurnItIn.launch_tii(with_webhooks: Rails.env.production?)
      end
    end

    if Rails.env.development?
      TCAClient.configure do |tii_config|
        tii_config.debugging = true
      end
    end
  end
  ```

## 10. Wrap Parameters (`wrap_parameters.rb`)

### Purpose
This file configures parameter wrapping for JSON requests.

### Key Configurations
- **Enable Parameter Wrapping for JSON**:
  ```ruby
  ActiveSupport.on_load(:action_controller) do
    wrap_parameters format: [:json]
  end
  ```

- **Disable Root Element in JSON**:
  ```ruby
  ActiveSupport.on_load(:active_record) do
    self.include_root_in_json = false
  end
  ```

# Locale Configurations

This section documents the configurations found in the `config/locales` directory of the Rails backend for Ontrack. Each file contains translations and localization settings for the application.

## 1. Devise Locale (`devise.en.yml`)

### Purpose
This file contains the English translations for error messages and notifications used by the Devise authentication library.

### Key Configurations

- **Error Messages**:
  ```yaml
  en:
    errors:
      messages:
        expired: "has expired, please request a new one"
        not_found: "not found"
        already_confirmed: "was already confirmed, please try signing in"
        not_locked: "was not locked"
        not_saved:
          one: "1 error prohibited this %{resource} from being saved:"
          other: "%{count} errors prohibited this %{resource} from being saved:"
  ```

- **Devise Notifications**:
  ```yaml
  en:
    devise:
      failure:
        already_authenticated: 'You are already signed in.'
        unauthenticated: 'You need to sign in before continuing.'
        unconfirmed: 'You have to confirm your account before continuing.'
        locked: 'Your account is locked.'
        invalid: 'Invalid username or password.'
        invalid_token: 'Invalid authentication token.'
        timeout: 'Your session expired, please sign in again to continue.'
        inactive: 'Your account was not activated yet.'
      sessions:
        signed_in: 'Signed in successfully.'
        signed_out: 'Signed out successfully.'
      passwords:
        send_instructions: 'You will receive an email with instructions about how to reset your password in a few minutes.'
        updated: 'Your password was changed successfully. You are now signed in.'
        updated_not_active: 'Your password was changed successfully.'
        send_paranoid_instructions: "If your e-mail exists on our database, you will receive a password recovery link on your e-mail"
      confirmations:
        send_instructions: 'You will receive an email with instructions about how to confirm your account in a few minutes.'
        send_paranoid_instructions: 'If your e-mail exists on our database, you will receive an email with instructions about how to confirm your account in a few minutes.'
        confirmed: 'Your account was successfully confirmed. You are now signed in.'
      registrations:
        signed_up: 'Welcome! You have signed up successfully.'
        inactive_signed_up: 'You have signed up successfully. However, we could not sign you in because your account is %{reason}.'
        updated: 'You updated your account successfully.'
        destroyed: 'Bye! Your account was successfully cancelled. We hope to see you again soon.'
        reasons:
          inactive: 'inactive'
          unconfirmed: 'unconfirmed'
          locked: 'locked'
      unlocks:
        send_instructions: 'You will receive an email with instructions about how to unlock your account in a few minutes.'
        unlocked: 'Your account was successfully unlocked. You are now signed in.'
        send_paranoid_instructions: 'If your account exists, you will receive an email with instructions about how to unlock it in a few minutes.'
      omniauth_callbacks:
        success: 'Successfully authorized from %{kind} account.'
        failure: 'Could not authorize you from %{kind} because "%{reason}".'
      mailer:
        confirmation_instructions:
          subject: 'Confirmation instructions'
        reset_password_instructions:
          subject: 'Reset password instructions'
        unlock_instructions:
          subject: 'Unlock Instructions'
  ```

## 2. Bootstrap Locale (`en.bootstrap.yml`)

### Purpose
This file contains English translations for common actions and labels used in the Bootstrap framework.

### Key Configurations

- **Helper Actions and Links**:
  ```yaml
  en:
    helpers:
      actions: "Actions"
      links:
        back: "Back"
        cancel: "Cancel"
        confirm: "Are you sure?"
        destroy: "Delete"
        new: "New"
        edit: "Edit"
      titles:
        edit: "Edit"
        save: "Save"
        new: "New"
        delete: "Delete"
  ```

## 3. General Locale (`en.yml`)

### Purpose
This file contains general English translations used in the application.

### Key Configurations

- **General Translations**:
  ```yaml
  en:
    hello: "Hello world"
  ```

## 4. Simple Form Locale (`simple_form.en.yml`)

### Purpose
This file contains English translations for the Simple Form gem, which is used to create forms in Rails applications.

### Key Configurations

- **Form Labels and Hints**:
  ```yaml
  en:
    simple_form:
      "yes": 'Yes'
      "no": 'No'
      required:
        text: 'required'
        mark: '*'
      error_notification:
        default_message: "Please review the problems below:"
      # Labels and hints examples
      # labels:
      #   defaults:
      #     password: 'Password'
      #   user:
      #     new:
      #       email: 'E-mail to sign in.'
      #     edit:
      #       email: 'E-mail.'
      # hints:
      #   defaults:
      #     username: 'User name to sign in.'
      #     password: 'No special characters, please.'
  ```

# Additional Configurations

This section documents various configuration files found in the `config` directory of the Rails backend for Ontrack. These files include core application settings, database configurations, institution-specific settings, and more.

## 1. Application Configuration (`application.rb`)

### Purpose
This file contains the core configuration settings for the Rails application.

### Key Configurations

- **Load Defaults**:
  ```ruby
  config.load_defaults 7.0
  ```

- **Environment Variables**:
  ```ruby
  Dotenv::Railtie.load
  ```

- **Authentication Method**:
  ```ruby
  config.auth_method = (ENV['DF_AUTH_METHOD'] || :database).to_sym
  ```

- **Student Work Directory**:
  ```ruby
  config.student_work_dir = ENV['DF_STUDENT_WORK_DIR'] || "#{Rails.root}/student_work"
  ```

- **Credentials**:
  ```ruby
  credentials.secret_key_base = ENV.fetch('DF_SECRET_KEY_BASE', Rails.env.production? ? nil : 'default_secret_key_base')
  credentials.secret_key_attr = ENV.fetch('DF_SECRET_KEY_ATTR', Rails.env.production? ? nil : 'default_secret_key_attr')
  credentials.secret_key_devise = ENV.fetch('DF_SECRET_KEY_DEVISE', Rails.env.production? ? nil : 'default_secret_key_devise')
  credentials.secret_key_aaf = ENV.fetch('DF_SECRET_KEY_AAF', Rails.env.production? ? nil : 'secret_key_aaf')
  credentials.secret_key_moss = ENV.fetch('DF_SECRET_KEY_MOSS', nil)
  ```

- **Institution Settings**:
  ```ruby
  config.institution = YAML.load_file("#{Rails.root}/config/institution.yml").with_indifferent_access
  ```

- **SAML Authentication**:
  ```ruby
  if config.auth_method == :saml
    config.saml = HashWithIndifferentAccess.new
    config.saml[:SAML_metadata_url] = ENV.fetch('DF_SAML_METADATA_URL', nil)
    config.saml[:assertion_consumer_service_url] = ENV.fetch('DF_SAML_CONSUMER_SERVICE_URL', nil)
    config.saml[:entity_id] = ENV.fetch('DF_SAML_SP_ENTITY_ID', nil)
    config.saml[:idp_sso_target_url] = ENV.fetch('DF_SAML_IDP_TARGET_URL', nil)
    config.saml[:idp_sso_signout_url] = ENV.fetch('DF_SAML_IDP_SIGNOUT_URL', nil)
    config.saml[:idp_sso_cert] = ENV.fetch('DF_SAML_IDP_CERT', nil) if config.saml[:SAML_metadata_url].nil?
    config.saml[:idp_name_identifier_format] = ENV['DF_SAML_IDP_SAML_NAME_IDENTIFIER_FORMAT'] || "urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress"
  end
  ```

- **AAF Authentication**:
  ```ruby
  if config.auth_method == :aaf
    config.aaf = HashWithIndifferentAccess.new
    config.aaf[:issuer_url] = ENV['DF_AAF_ISSUER_URL'] || 'https://rapid.test.aaf.edu.au'
    config.aaf[:audience_url] = ENV.fetch('DF_AAF_AUDIENCE_URL', nil)
    config.aaf[:callback_url] = ENV.fetch('DF_AAF_CALLBACK_URL', nil)
    config.aaf[:redirect_url] = ENV.fetch('DF_AAF_UNIQUE_URL', nil)
    config.aaf[:identity_provider_url] = ENV.fetch('DF_AAF_IDENTITY_PROVIDER_URL', nil)
    config.aaf[:auth_signout_url] = ENV.fetch('DF_AAF_AUTH_SIGNOUT_URL', nil)
  end
  ```

- **Localization**:
  ```ruby
  config.i18n.enforce_available_locales = true
  ```

- **Parameter Filtering**:
  ```ruby
  config.filter_parameters += %i(auth_token password password_confirmation)
  ```

- **Autoload Paths**:
  ```ruby
  config.autoload_paths += Dir[Rails.root.join('app')]
  config.eager_load_paths += Dir[Rails.root.join('app')]
  ```

- **CORS Configuration**:
  ```ruby
  config.middleware.insert_before Warden::Manager, Rack::Cors do
    allow do
      origins '*'
      resource '*', headers: :any, methods: %i(get post put delete options)
    end
  end
  ```

## 2. Boot Configuration (`boot.rb`)

### Purpose
This file sets up the gems listed in the Gemfile and speeds up boot time by caching expensive operations.

### Key Configurations

- **Bundler Setup**:
  ```ruby
  ENV['BUNDLE_GEMFILE'] ||= File.expand_path('../Gemfile', __dir__)
  require 'bundler/setup' if File.exist?(ENV['BUNDLE_GEMFILE'])
  ```

- **Bootsnap Setup**:
  ```ruby
  require 'bootsnap/setup'
  ```

## 3. Database Configuration (`database.yml`)

### Purpose
This file contains the database connection settings for different environments.

### Key Configurations

- **Development Environment**:
  ```yaml
  development:
    adapter:      <%= ENV['DF_DEV_DB_ADAPTER'] %>
    database:     <%= ENV['DF_DEV_DB_DATABASE'] %>
    username:     <%= ENV['DF_DEV_DB_USERNAME'] %>
    password:     <%= ENV['DF_DEV_DB_PASSWORD'] %>
    host:         <%= ENV['DF_DEV_DB_HOST'] %>
    min_messages: warning
  ```

- **Test Environment**:
  ```yaml
  test:
    adapter:      <%= ENV['DF_TEST_DB_ADAPTER'] %>
    database:     <%= ENV['DF_TEST_DB_DATABASE'] %>
    username:     <%= ENV['DF_TEST_DB_USERNAME'] %>
    password:     <%= ENV['DF_TEST_DB_PASSWORD'] %>
    host:         <%= ENV['DF_TEST_DB_HOST'] %>
    min_messages: warning
  ```

- **Staging Environment**:
  ```yaml
  staging:
    adapter:  <%= ENV['DF_STAGING_DB_ADAPTER']  %>
    host:     <%= ENV['DF_STAGING_DB_HOST']     %>
    database: <%= ENV['DF_STAGING_DB_DATABASE'] %>
    username: <%= ENV['DF_STAGING_DB_USERNAME'] %>
    password: <%= ENV['DF_STAGING_DB_PASSWORD'] %>
  ```

- **Production Environment**:
  ```yaml
  production:
    adapter:  <%= ENV['DF_PRODUCTION_DB_ADAPTER']  %>
    host:     <%= ENV['DF_PRODUCTION_DB_HOST']     %>
    database: <%= ENV['DF_PRODUCTION_DB_DATABASE'] %>
    username: <%= ENV['DF_PRODUCTION_DB_USERNAME'] %>
    password: <%= ENV['DF_PRODUCTION_DB_PASSWORD'] %>
  ```

## 4. Deakin Institution Settings (`deakin.rb`)

### Purpose
This file contains custom settings and methods for importing users into units for Deakin University.

### Key Configurations

- **Initialization**:
  ```ruby
  def initialize()
    @base_url = ENV.fetch('DF_INSTITUTION_SETTINGS_SYNC_BASE_URL', nil)
    @client_id = ENV.fetch('DF_INSTITUTION_SETTINGS_SYNC_CLIENT_ID', nil)
    @client_secret = ENV.fetch('DF_INSTITUTION_SETTINGS_SYNC_CLIENT_SECRET', nil)
    @star_url = ENV.fetch('DF_INSTITUTION_SETTINGS_SYNC_STAR_URL', nil)
    @star_user = ENV.fetch('DF_INSTITUTION_SETTINGS_SYNC_STAR_USER', nil)
    @star_secret = ENV.fetch('DF_INSTITUTION_SETTINGS_SYNC_STAR_SECRET', nil)
  end
  ```

- **Methods for User Import**:
  ```ruby
  def user_import_settings_for(headers)
    if are_callista_headers?(headers)
      {
        missing_headers_lambda: ->(row) { missing_headers(row, ["person id", "surname", "given names", "unit code", "student attempt status", "email", "preferred given name", "campus"]) },
        fetch_row_data_lambda: ->(row, unit) { fetch_callista_row(row, unit) },
        replace_existing_tutorial: false
      }
    else
      {
        missing_headers_lambda: ->(row) { missing_headers(row, ["student_code", "first_name", "last_name", "email_address", "preferred_name", "subject_code", "activity_code", "campus", "day_of_week", "start_time", "location", "campus"]) },
        fetch_row_data_lambda: ->(row, unit) { fetch_star_row(row, unit) },
        replace_existing_tutorial: true
      }
    end
  end
  ```

- **Synchronization Methods**:
  ```ruby
  def sync_enrolments(unit)
    # Implementation for synchronizing enrolments
  end

  def fetch_timetable_data(unit)
    # Implementation for fetching timetable data
  end
  ```

## 5. Environment Initialization (`environment.rb`)

### Purpose
This file loads and initializes the Rails application.

### Key Configurations

- **Application Initialization**:
  ```ruby
  require_relative "application"
  Doubtfire::Application.initialize!
  ```

## 6. Institution Configuration (`institution.yml`)

### Purpose
This file contains institution-specific settings and information.

### Key Configurations

- **

Institution Details**:
  ```yaml
  name:         Doubtfire University
  email_domain: doubtfire.com
  host:         localhost:3000
  product_name: Doubtfire
  settings:     no_institution_setting.rb
  privacy:      Privacy statement text...
  plagiarism:   Plagiarism policy text...
  ```

## 7. LDAP Configuration (`ldap.yml`)

### Purpose
This file contains LDAP server settings for different environments.

### Key Configurations

- **Development Environment**:
  ```yaml
  development:
    host: <%= ENV['DF_LDAP_HOST'] %>
    port: <%= ENV['DF_LDAP_PORT'] %>
    attribute: <%= ENV['DF_LDAP_ATTRIBUTE'] %>
    base: <%= ENV['DF_LDAP_BASE'] %>
    admin_user: <%= ENV['DF_LDAP_ADMIN_USER'] %>
    admin_password: <%= ENV['DF_LDAP_ADMIN_PWD'] %>
    ssl: <%= ENV['DF_LDAP_SSL'].to_s.downcase != "false" %>
  ```

- **Test Environment**:
  ```yaml
  test:
    host: <%= ENV['DF_LDAP_HOST'] %>
    port: <%= ENV['DF_LDAP_PORT'] %>
    attribute: <%= ENV['DF_LDAP_ATTRIBUTE'] %>
    base: <%= ENV['DF_LDAP_BASE'] %>
    admin_user: <%= ENV['DF_LDAP_ADMIN_USER'] %>
    admin_password: <%= ENV['DF_LDAP_ADMIN_PWD'] %>
    ssl: <%= ENV['DF_LDAP_SSL'].to_s.downcase != "false" %>
  ```

- **Production Environment**:
  ```yaml
  production:
    host: <%= ENV['DF_LDAP_HOST'] %>
    port: <%= ENV['DF_LDAP_PORT'] %>
    attribute: <%= ENV['DF_LDAP_ATTRIBUTE'] %>
    base: <%= ENV['DF_LDAP_BASE'] %>
    admin_user: <%= ENV['DF_LDAP_ADMIN_USER'] %>
    admin_password: <%= ENV['DF_LDAP_ADMIN_PWD'] %>
    ssl: <%= ENV['DF_LDAP_SSL'].to_s.downcase != "false" %>
  ```

## 8. No Institution Setting (`no_institution_setting.rb`)

### Purpose
This file contains default institution settings when no specific institution settings are provided.

### Key Configurations

- **Default Methods**:
  ```ruby
  def are_headers_institution_users?(headers)
    false
  end

  def extract_user_from_row(row)
    { unit_code: nil, username: nil, student_id: nil, first_name: nil, last_name: nil, email: nil, tutorials: nil }
  end

  def sync_enrolments(unit)
    puts 'Unit sync not enabled'
  end

  def details_for_next_tutorial_stream(unit, activity_type)
    counter = 1
    begin
      name = "#{activity_type.name} #{counter}"
      abbreviation = "#{activity_type.abbreviation} #{counter}"
      counter += 1
    end while unit.tutorial_streams.where("abbreviation = :abbr OR name = :name", abbr: abbreviation, name: name).present?
    [name, abbreviation]
  end
  ```

## 9. Puma Configuration (`puma.rb`)

### Purpose
This file contains configuration settings for the Puma web server.

### Key Configurations

- **Thread Configuration**:
  ```ruby
  max_threads_count = ENV.fetch("RAILS_MAX_THREADS") { 5 }
  min_threads_count = ENV.fetch("RAILS_MIN_THREADS") { max_threads_count }
  threads min_threads_count, max_threads_count
  ```

- **Port Configuration**:
  ```ruby
  port ENV.fetch("PORT") { 3000 }
  ```

- **Environment Configuration**:
  ```ruby
  environment ENV.fetch("RAILS_ENV") { "development" }
  ```

- **PID File**:
  ```ruby
  pidfile ENV.fetch("PIDFILE") { "tmp/pids/server.pid" }
  ```

- **Plugin**:
  ```ruby
  plugin :tmp_restart
  ```

## 10. Routes Configuration (`routes.rb`)

### Purpose
This file defines the routes for the Rails application.

### Key Configurations

- **Devise Routes**:
  ```ruby
  devise_for :users
  ```

- **API Routes**:
  ```ruby
  get 'api/submission/unit/:id/portfolio', to: 'portfolio_downloads#index'
  get 'api/submission/unit/:id/task_definitions/:task_def_id/download_submissions', to: 'task_downloads#index'
  get 'api/submission/unit/:id/task_definitions/:task_def_id/student_pdfs', to: 'task_submission_pdfs#index'
  get 'api/units/:id/all_resources', to: 'lecture_resource_downloads#index'
  ```

- **Mounting Engines**:
  ```ruby
  mount ApiRoot => '/'
  mount GrapeSwaggerRails::Engine => '/api/docs'
  mount Sidekiq::Web => "/sidekiq"
  ```

## 11. Schedule Configuration (`schedule.rb`)

### Purpose
This file contains cron job schedules for the application.

### Key Configurations

- **Daily Update Task**:
  ```ruby
  set :output, "#{path}/log/cron.log"
  every 1.day, at: '3:00 am' do
    rake 'db:update_temporal'
  end
  ```

## 12. Schedule Configuration (`schedule.yml`)

### Purpose
This file contains job schedules for background tasks.

### Key Configurations

- **Register Webhooks**:
  ```yaml
  register_webhooks:
    cron: "every day at 5"
    class: "TiiRegisterWebHookJob"
  ```

- **Progress TurnItIn Jobs**:
  ```yaml
  progress_turn_it_in_jobs:
    cron: "every 30 minutes"
    class: "TiiCheckProgressJob"
  ```

## 13. Storage Configuration (`storage.yml`)

### Purpose
This file contains configurations for storage services. Note that ActiveStorage is not used in this application.

### Key Configurations

- **Sample Storage Configuration**:
  ```yaml
  # local:
  #   service: Disk
  #   root: <%= Rails.root.join("storage") %>
  ```

- **Amazon S3 Configuration**:
  ```yaml
  # amazon:
  #   service: S3
  #   access_key_id: <%= Rails.application.credentials.dig(:aws, :access_key_id) %>
  #   secret_access_key: <%= Rails.application.credentials.dig(:aws, :secret_access_key) %>
  #   region: us-east-1
  #   bucket: your_own_bucket
  ```

- **Google Cloud Storage Configuration**:
  ```yaml
  # google:
  #   service: GCS
  #   project: your_project
  #   credentials: <%= Rails.root.join("path/to/gcs.keyfile") %>
  #   bucket: your_own_bucket
  ```

# Architecture Diagram of the Doubtfire API

The architecture diagram of the Doubtfire API illustrates the following components and their interactions:

## Components

1. **Client:**
   - Represents the user interface, typically a web browser or a mobile app.
   - Sends HTTP requests to the Web Server.

2. **Web Server:**
   - Handles incoming HTTP requests from the client.
   - Serves static content (HTML, CSS, JavaScript).
   - Forwards API requests to the Application Server via REST API.

3. **Application Server:**
   - Processes all business logic and data operations.
   - Contains all API endpoints such as user authentication, file downloads, and email handling.
   - Interacts with the Database using SQL.
   - Communicates with Third-party Services via API.

4. **Database:**
   - Stores application data, including user information, files, and emails.
   - The Application Server interacts with the Database through SQL queries.

5. **Third-party Services:**
   - Includes external services used by the application, such as payment gateways and email services (Postmark, SendGrid, Mandrill, Mailgun).
   - The Application Server communicates with these services through APIs.

![figure_1](/diagram.png)
