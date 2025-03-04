Info 0    [00:00:15.000] Provided types map file "/a/lib/typesMap.json" doesn't exist
Info 1    [00:00:16.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "open",
      "arguments": {
        "file": "/a/index.ts"
      }
    }
Before request
//// [/a/tsconfig.json]
{
    "compilerOptions": {
        "composite": true
    }
}

//// [/a/index.ts]
export const abcdef = 1;

//// [/b/tsconfig.json]
{
    "compilerOptions": {
        "composite": true
    },
    "references": [
        { "path": "../a" }
    ]
}

//// [/b/index.ts]
import a = require("../a");
export const ghijkl = a.abcdef;


PolledWatches::

FsWatches::

FsWatchesRecursive::

Info 2    [00:00:17.000] Search path: /a
Info 3    [00:00:18.000] For info: /a/index.ts :: Config file name: /a/tsconfig.json
Info 4    [00:00:19.000] Creating configuration project /a/tsconfig.json
Info 5    [00:00:20.000] FileWatcher:: Added:: WatchInfo: /a/tsconfig.json 2000 undefined Project: /a/tsconfig.json WatchType: Config file
Info 6    [00:00:21.000] Config: /a/tsconfig.json : {
 "rootNames": [
  "/a/index.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/a/tsconfig.json"
 }
}
Info 7    [00:00:22.000] DirectoryWatcher:: Added:: WatchInfo: /a 1 undefined Config: /a/tsconfig.json WatchType: Wild card directory
Info 8    [00:00:23.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a 1 undefined Config: /a/tsconfig.json WatchType: Wild card directory
Info 9    [00:00:24.000] Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Info 10   [00:00:25.000] Starting updateGraphWorker: Project: /a/tsconfig.json
Info 11   [00:00:26.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /a/tsconfig.json WatchType: Missing file
Info 12   [00:00:27.000] DirectoryWatcher:: Added:: WatchInfo: /a/node_modules/@types 1 undefined Project: /a/tsconfig.json WatchType: Type roots
Info 13   [00:00:28.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /a/node_modules/@types 1 undefined Project: /a/tsconfig.json WatchType: Type roots
Info 14   [00:00:29.000] Finishing updateGraphWorker: Project: /a/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 15   [00:00:30.000] Project '/a/tsconfig.json' (Configured)
Info 16   [00:00:31.000] 	Files (1)
	/a/index.ts


	index.ts
	  Matched by default include pattern '**/*'

Info 17   [00:00:32.000] -----------------------------------------------
Info 18   [00:00:33.000] Search path: /a
Info 19   [00:00:34.000] For info: /a/tsconfig.json :: No config files found.
Info 20   [00:00:35.000] Project '/a/tsconfig.json' (Configured)
Info 20   [00:00:36.000] 	Files (1)

Info 20   [00:00:37.000] -----------------------------------------------
Info 20   [00:00:38.000] Open files: 
Info 20   [00:00:39.000] 	FileName: /a/index.ts ProjectRootPath: undefined
Info 20   [00:00:40.000] 		Projects: /a/tsconfig.json
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/tsconfig.json:
  {}

FsWatchesRecursive::
/a:
  {}

Info 20   [00:00:41.000] response:
    {
      "responseRequired": false
    }
Info 21   [00:00:42.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "open",
      "arguments": {
        "file": "/b/index.ts"
      }
    }
Before request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/tsconfig.json:
  {}

FsWatchesRecursive::
/a:
  {}

Info 22   [00:00:43.000] Search path: /b
Info 23   [00:00:44.000] For info: /b/index.ts :: Config file name: /b/tsconfig.json
Info 24   [00:00:45.000] Creating configuration project /b/tsconfig.json
Info 25   [00:00:46.000] FileWatcher:: Added:: WatchInfo: /b/tsconfig.json 2000 undefined Project: /b/tsconfig.json WatchType: Config file
Info 26   [00:00:47.000] Config: /b/tsconfig.json : {
 "rootNames": [
  "/b/index.ts"
 ],
 "options": {
  "composite": true,
  "configFilePath": "/b/tsconfig.json"
 },
 "projectReferences": [
  {
   "path": "/a",
   "originalPath": "../a"
  }
 ]
}
Info 27   [00:00:48.000] DirectoryWatcher:: Added:: WatchInfo: /b 1 undefined Config: /b/tsconfig.json WatchType: Wild card directory
Info 28   [00:00:49.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /b 1 undefined Config: /b/tsconfig.json WatchType: Wild card directory
Info 29   [00:00:50.000] Plugins were requested but not running in environment that supports 'require'. Nothing will be loaded
Info 30   [00:00:51.000] Starting updateGraphWorker: Project: /b/tsconfig.json
Info 31   [00:00:52.000] FileWatcher:: Added:: WatchInfo: /a/lib/lib.d.ts 500 undefined Project: /b/tsconfig.json WatchType: Missing file
Info 32   [00:00:53.000] DirectoryWatcher:: Added:: WatchInfo: /b/node_modules/@types 1 undefined Project: /b/tsconfig.json WatchType: Type roots
Info 33   [00:00:54.000] Elapsed:: *ms DirectoryWatcher:: Added:: WatchInfo: /b/node_modules/@types 1 undefined Project: /b/tsconfig.json WatchType: Type roots
Info 34   [00:00:55.000] Finishing updateGraphWorker: Project: /b/tsconfig.json Version: 1 structureChanged: true structureIsReused:: Not Elapsed:: *ms
Info 35   [00:00:56.000] Project '/b/tsconfig.json' (Configured)
Info 36   [00:00:57.000] 	Files (2)
	/a/index.ts
	/b/index.ts


	../a/index.ts
	  Imported via "../a" from file 'index.ts'
	index.ts
	  Matched by default include pattern '**/*'

Info 37   [00:00:58.000] -----------------------------------------------
Info 38   [00:00:59.000] Search path: /b
Info 39   [00:01:00.000] For info: /b/tsconfig.json :: No config files found.
Info 40   [00:01:01.000] Project '/a/tsconfig.json' (Configured)
Info 40   [00:01:02.000] 	Files (1)

Info 40   [00:01:03.000] -----------------------------------------------
Info 40   [00:01:04.000] Project '/b/tsconfig.json' (Configured)
Info 40   [00:01:05.000] 	Files (2)

Info 40   [00:01:06.000] -----------------------------------------------
Info 40   [00:01:07.000] Open files: 
Info 40   [00:01:08.000] 	FileName: /a/index.ts ProjectRootPath: undefined
Info 40   [00:01:09.000] 		Projects: /a/tsconfig.json,/b/tsconfig.json
Info 40   [00:01:10.000] 	FileName: /b/index.ts ProjectRootPath: undefined
Info 40   [00:01:11.000] 		Projects: /b/tsconfig.json
After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/node_modules/@types:
  {"pollingInterval":500}
/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/tsconfig.json:
  {}
/b/tsconfig.json:
  {}

FsWatchesRecursive::
/a:
  {}
/b:
  {}

Info 40   [00:01:12.000] response:
    {
      "responseRequired": false
    }
Info 41   [00:01:13.000] request:
    {
      "seq": 0,
      "type": "request",
      "command": "navto",
      "arguments": {
        "searchValue": "abcdef",
        "file": "/a/index.ts"
      }
    }
Before request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/node_modules/@types:
  {"pollingInterval":500}
/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/tsconfig.json:
  {}
/b/tsconfig.json:
  {}

FsWatchesRecursive::
/a:
  {}
/b:
  {}

After request

PolledWatches::
/a/lib/lib.d.ts:
  {"pollingInterval":500}
/a/node_modules/@types:
  {"pollingInterval":500}
/b/node_modules/@types:
  {"pollingInterval":500}

FsWatches::
/a/tsconfig.json:
  {}
/b/tsconfig.json:
  {}

FsWatchesRecursive::
/a:
  {}
/b:
  {}

Info 42   [00:01:14.000] response:
    {
      "response": [
        {
          "name": "abcdef",
          "kind": "const",
          "kindModifiers": "export",
          "isCaseSensitive": true,
          "matchKind": "exact",
          "file": "/a/index.ts",
          "start": {
            "line": 1,
            "offset": 14
          },
          "end": {
            "line": 1,
            "offset": 24
          }
        }
      ],
      "responseRequired": true
    }