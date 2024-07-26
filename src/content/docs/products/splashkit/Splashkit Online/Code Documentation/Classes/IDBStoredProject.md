---
title: IDBStoredProject - Code Documentation
description: An explanation of what IDBStoredProject is, its methods, members, and events.
---

[_IDBStoredProject.js_](https://github.com/thoth-tech/SplashkitOnline/blob/main/Browser_IDE/IDBStoredProject.js)

IDBStoredProject is a class that handles saving/loading the user's project within the browser
itself. It uses
[IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API/Using_IndexedDB) storage,
which allows it to store large amounts of data in a simplified database structure.

It stores a single project inside a single database, creating a new one for each project. It has
functions to read and write files to a virtual filesystem saved inside the database (for storing
user code, and uploaded resources like sprites and sounds). It also has an area for config, and
keeps track of its lastWriteTime inside there.

## Database layout

There are two tables:

- `project` - contains information about the project, such as the last write time. Simple key-value,
  with the key's name being 'category'.
- `files` - stores all the user's files and directories. Each entry contains the following:
  - `nodeID` - a numerical identifier for the node (file/directory), automatically increments.
  - `name` - name of the file/directory
  - `type` - either `"FILE"` or `"DIR"` - file or directory
  - `data` - the file's contents - a binary blob of data. Or `null` if it's a directory.
  - `parent` - the `nodeID` of the parent of the file/directory (what directory is it inside). -1
    means it is inside the root directory.

## Members

- `initializer` - a function that can be called to initialize the database - performs the equivalent
  of `skm new`
- `projectName` - the name of the project (and therefore database) it is currently attached to.
  `null` if detached.
- `lastKnownWriteTime` - the last time the project was written to within this tab.

## Methods

- `constructor(initializer)` - takes an initializer function, used when initializing a project's
  database for the first time.
- `attachToProject(storeName)` - attaches it to a project with the name `storeName`. Initializes the
  database, and emits an `attached` event.
- `detachFromProject()` - detaches itself from the project, resets its internal state and emits a
  `detached` event.
- `deleteProject(storeName)` - deletes the project named `storeName`, and returns a promise which
  resolves once the database is truly deleted.
- `checkForWriteConflicts()` - checks the `lastKnownWriteTime` against the actual `lastWriteTime`
  inside the database - if they conflict in a way that suggests another tab has written to the
  database, throws a `timeConflict` event.
- `access(func)` - a bit of a special function. This function is the only entry point to
  reading/writing to the IDBStoredProject. It takes a function, which it will call, passing in a new
  object (internally a `__IDBStoredProjectRW`), which has many more methods for reading/writing.
  This is done, so that the opening/closing of the database can be wrapped around the user function,
  without them having to handle it manually (and potentially leave open connections causing issues
  later on). Here's an example of usage:

```javascript
let storedProject = new StoredProject(...)
...
// we get passed a new object, which we called "project", and can use it to get the lastWriteTime.
// this is all performed asynchronously, so we need to "await" it to get the result
let storedTime = await storedProject.access((project)=>project.getLastWriteTime());
// in non-lambda syntax
let storedTime = await storedProject.access(function(project){ return project.getLastWriteTime()});
```

**The following functions are ones accessible from inside the callback to `access` only**

- `getLastWriteTime()` - get the last write time.
- `updateLastWriteTime(time = null)` - set the last write time - defaults to the current time
  (stored in unix time)
- `mkdir(path)` - make a directory at path, does nothing if it already exists. Emits
  `onMakeDirectory` event.
- `writeFile(path, data)` - overwrites the data inside the file at `path` with `data` - creates the
  file if it doesn't exist. Emits `onOpenFile` event. Also emits `onWriteToFile` event.
- `rename(oldPath, newPath)` - moves a file/directory to a new path and/or name. Emits `onMovePath`
  event.
- `readFile(path)` - reads a file at `path` and returns the data inside. Returns `null` if the file
  doesn't exist.
- `getFileTree()` - returns a complete tree of the file system, in a structure digestible by the
  `TreeView`.

## Events

The events can be listened to by attaching with `addEventListener(event, callback)`

- `attached` - Is attached and can be used.
- `detached` - Has been detached.
- `onMovePath` - A file or directory has been moved. Members:
  - `oldPath` - the original path
  - `newPath` - the path it was moved to
- `onMakeDirectory` - A directory has been made. Members:
  - `path` - the path to the new directory
- `onDeletePath` - A file or directory has been deleted. Members:
  - `path` - the path to the file/directory
- `onOpenFile` - A file has been opened, possibly for reading or writing. Members:
  - `path` - the path to the file
