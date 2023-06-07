const celoKIT = require('@celo/contractkit');
const nodeURL = "https://celo-alfajores.infura.io/v3/bfa3523cc5184d9c82780df770d9e023";
const kit = celoKIT.newKit(nodeURL);
console.log(kit);
//create wallet generate
const generateWalletAdress = async () => {
    const account = await kit.web3.eth.accounts.create();
    console.log("account",account);
    return account;
}

const walletAddress = '0x3700075c2015D81C698111BCc2FF5B535Ee2a434'
//get balances for cUSD
const getBalance= async (address) => {
    const tokenWrapper = await kit.contracts.getGoldToken();
    const balance = await tokenWrapper.balanceOf(address);
    console.log("balance",balance);
    return balance;
}


getBalance(walletAddress);