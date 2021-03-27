import Compiler from './src/compiler';
import fs from 'fs';

var compiler = new Compiler([], 0);
var argv = process.argv.slice(2);
var atob = (str: any) => {return Buffer.from(str).toString('binary')};

if (argv[0] === "run") {
  if (argv[1] === "-c") {
    console.log(compiler.compile(argv[2]));
  } else {
    var d = atob(fs.readFileSync(argv[1]));
    console.log(compiler.compile(d));
  }
} else {
  console.log("Command not found.");
}