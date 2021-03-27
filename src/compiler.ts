import { resolve } from 'equation-resolver';
import { parse } from 'equation-parser';

export interface ResultNode {
  prob: string;
  res: number;
}

class Compiler {
  _r: number[];
  __r: number;

  constructor(_r: number[], __r: number) {
    this._r  = _r;
    this.__r = __r;
  }

  compile(data: string) {
    var prob_to_each: string[] = data.split("\n");
    var o: string[] = [];
    var on: ResultNode[] = [];
    var result: number = 0;
    
    for (let prob of prob_to_each) {
      if (prob.includes("\r")) {
        prob = prob.replace("\r", "")
        o.push(prob)
      } else {
        o.push(prob);
      }
    }

    for (let probl of o) {
      var r: any = resolve(parse(probl));
      var { value } = r;
      on.push({prob: probl, res: value})
    }

   for (let obj of on) {
     result += obj.res;
   }

   return result;
  }
}

export default Compiler;