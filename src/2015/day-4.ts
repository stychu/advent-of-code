// https://adventofcode.com/2015/day/4#part1
import { createHash } from "crypto";

import * as _ from "@mobily/ts-belt";

const findHash = (secret: string) => {
  let hash = "";
  let number = 0;

  while (!hash.startsWith("000000")) {
    number++
    hash = createHash("md5")
      .update(secret)
      .update(number.toString())
      .digest("hex");

  }


  return [number, `${secret}${number}`, hash];
};

console.log(findHash("ckczppom"));
