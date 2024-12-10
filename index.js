const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL
} = require("@solana/web3.js");


const wallet = new Keypair();

const publickey = new PublicKey(wallet._keypair.publicKey);
const secretKey = wallet._keypair.secretKey

console.log(publickey);
console.log(secretKey);