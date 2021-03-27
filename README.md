# Math Environment

Compile math with: (file extension: .mth)
```sh
$ npx ts-node index.ts run <path-to-mth>
```

for example:
(math.mth):
```mth
2(2 + 2) # not sensetive... you can also do: 2*(2+2)
```

compile it:
```sh
$ npx ts-node index.ts run math.mth
```

output:
```
8
```