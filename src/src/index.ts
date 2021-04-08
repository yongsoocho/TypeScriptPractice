import * as CryptoJS from "crypto-js";

class Block {
	constructor(public index: number, 
				 public hash: string,
				 public previousHash: string,
				 public data: string,
				 public timestamp: number
				) {
		this.index = index;
		this.hash = hash;
		this.previousHash = previousHash;
		this.data = data;
		this.timestamp = timestamp;
	}
	
	static calculateBlockHash = (index: number, 
								 previousHash: string, 
								 timestamp: number, 
								 data: string): string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
}

const genesisBlock: Block = new Block(0, "0302", "", "HelloWorld", 20210408);

let blockchain: Block[] = [genesisBlock];

const getBlockChain = (): Block[] => blockchain;

const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

console.log(blockchain);