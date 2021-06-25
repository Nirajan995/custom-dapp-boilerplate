const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "hybrid focus hold lion bonus flash gate elevator dinosaur tiny depend hill",
  "https://rinkeby.infura.io/v3/c8f88ef430cd4a7e966374c7646e3624"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await new web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: "0x" + bytecode, arguments: ["Hi there!"] }) // add 0x bytecode
    .send({ from: accounts[0] }); // remove 'gas'

  console.log("Contract deployed to", result.options.address);
};

deploy();
