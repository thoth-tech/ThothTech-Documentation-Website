---
title: TreeView - Code Documentation
description: An explanation of what TreeView is, its methods, members, and events.
---

[_treeview.js_](https://github.com/thoth-tech/SplashkitOnline/blob/main/Browser_IDE/treeview.js)

TreeView is a class used for displaying and updating a tree view, designed specifically around
file/directory manipulation. It allows viewing multiple filesystems at once in an overlapping
fashion (important since we have the files in the user's project that will be saved/loaded, and also
the live files inside the ExecutionEnvironment, which may be different). It allows files/folders to
be dragged around and organized, and folders to have a button on the side for uploading new files.

The way it is intended to be used, is to make it listen to events from the target filesystems (such
as file moves/deletes), and update itself accordingly. When it is interacted with by the user, it
will emit its own events - these events should be listened to, and the target filesystem updated
accordingly. It should then look like this :

1. A file is created in the target filesystem and an event is emitted
2. The TreeView reacts to this event and creates a node in its tree with the same name.
3. The user now drags that node to inside another node (directory), and the TreeView emits an event.
   Note that it does _not_ change itself here. The node inside the tree has not actually moved yet.
4. A function is called back from this event, that then tells the target filesystem to move the
   file.
5. The target filesystem moves the file, and an event is emitted.
6. The TreeView reacts to this event, and moves the node to inside the directory.

See how the TreeView never updates itself - it relies on an event coming _back_ from the target
filesystem. This means that if the target filesystem fails to do the operation for whatever reason,
the TreeView also remains in the same state, meaning the two remain synchronized effectively.

See example usage of it inside `fileview.js`
([here](https://github.com/thoth-tech/SplashkitOnline/blob/main/Browser_IDE/fileview.js)), where it
is attached to both the `IDBStoredProject` filesystem, and also the filesystem inside the
`ExecutionEnvironment`.

### Limitations

Currently there is no way to delete files/folders, or rename files/folders in the interface itself.
This shouldn't be hard to add, however.

## Members

None publicly available.

## Methods

- `constructor(container, FSes)` - takes a container to place the TreeView's elements into, and a
  list of FSes, which are the filesystems it will support. An example list looks like this
  `{"persistent":"node-persistent", "transient":"node-transient"}`, key-value pairs where the key is
  the filesystems name, and the value is a css style to apply to nodes inside this filesystem.
- `moveNode(oldPath, newPath, index = -1, FS)` - moves a node to a new path and/or name. Allows one
  to set the index the node will appear at, and also which filesystem(s) (a list) the move occurred
  in.
- `deleteNode(path, FS)` - deletes a node from a set of filesystem(s) (a list)
- `addDirectory(path, FS)` - make a directory at path, does nothing if it already exists. Allows one
  to set which filesystem(s) (a list) the directory add occurred in.
- `addFile(path, data)` - make a file at path, does nothing if it already exists. Allows one to set
  which filesystem(s) (a list) the file was added in.
- `reset(path)` - Deletes all nodes.
- `populatefileView(files, FS)` - Populates the tree with a list of files in a particular structure
  (the same one `IDBStoredProject.getFileTree()` returns). Allows one to set which filesystem(s) (a
  list) the directory add occurred in.

## Events

The events can be listened to by attaching with `addEventListener(event, callback)`

- `nodeMoveRequest` - A file or directory has been moved. Members:
  - `treeView` - the TreeView object
  - `oldPath` - the original path
  - `newPath` - the path it was moved to
  - `FS` - the filesystem(s) the change occurred in.
  - `accept` - a function that can be called to announce that the change was successful -
    **currently unused**.
- `folderUploadRequest` - The 'add file' button was clicked on on a directory. Members:
  - `treeView` - the TreeView object
  - `path` - path to the directory
  - `FS` - the filesystem(s) the directory exists in.
- `nodeDoubleClick` - A file node has been double clicked. Members:
  - `treeView` - the TreeView object
  - `path` - path to the file
  - `FS` - the filesystem(s) the directory exists in.
