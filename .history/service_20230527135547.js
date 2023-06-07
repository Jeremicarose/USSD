const celoKIT = require('@celo/contractkit');
const nodeURL = "https://celo-alfajores.infura.io/v3/bfa3523cc5184d9c82780df770d9e023";
const kit = celoKIT.newKit(nodeURL);
console.log(kit);
