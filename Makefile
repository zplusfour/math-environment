r:
	npx ts-node index.ts run tests/problem.mth

bundle:
	npx tsc index.ts --outDir dist/

build:
	npx pkg dist/ --target linux --output bin/math.elf