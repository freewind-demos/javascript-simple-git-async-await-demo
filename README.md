JavaScript "simple-git" Async/Await Demo
========================================

关键就是要使用`simple-git/promise`这个module，而不是`simple-git`

```
npm install
node run demo
```

输出：

```
cloned to: local-repo/demo-project
----------------- git log HEAD -------------
{
  "all": [
    {
      "hash": "e37400f8d7dde49977ff7e146a986cc961fc2f61",
      "date": "2018-07-31 14:10:27 +0800",
      "message": "demo (HEAD -> master, origin/master, origin/HEAD)",
      "author_name": "freewind",
      "author_email": "nowindlee@gmail.com"
    }
  ],
  "latest": {
    "hash": "e37400f8d7dde49977ff7e146a986cc961fc2f61",
    "date": "2018-07-31 14:10:27 +0800",
    "message": "demo (HEAD -> master, origin/master, origin/HEAD)",
    "author_name": "freewind",
    "author_email": "nowindlee@gmail.com"
  },
  "total": 1
}
```
