# Math Environment

Compile math with: (file extension: .mth)
```sh
$ npx ts-node index.ts run <path-to-mth>
```

for example:
(math.mth):
```mth
2(2 + 2) # not sensetive
```

compile it:
```sh
$ npx ts-node index.ts run math.mth
```

output:
```
8
```