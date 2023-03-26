const {deterministicPartitionKey} = require("./dpk");
const old = require("./dpk_old");
const st = {partitionKey: "4"}
console.log(deterministicPartitionKey(st));
console.log(old.deterministicPartitionKey(st));