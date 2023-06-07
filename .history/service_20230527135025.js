const celoKIT = require('@celo/contractkit');
const nodeURL = process.env.NODE_URL;
const kit = celoKIT.newKit(nodeURL);
console.log(kit);
