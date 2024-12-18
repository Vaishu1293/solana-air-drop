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

const getWalletBalance = async() => {
    try{
        const connection = new Connection(clusterApiUrl('devnet'), 'confrimed');
        const walletbalance = await connection.getBalance(publickey)
        console.log(`Wallet balance is ${walletbalance}`);
    } catch(err){
        console.error(err);
    }
}

const airDropSol = async() => {
    try{
        const connection = new Connection(clusterApiUrl('devnet'), 'confrimed');
        const fromAirDropSignature = await connection.requestAirdrop(publickey, 2 * LAMPORTS_PER_SOL);
        await connection.confirmTransaction(fromAirDropSignature);
    } catch(err) {
        console.log(err)
    }
}

const main = async() => {
    await getWalletBalance()
    await airDropSol()
    await getWalletBalance()
}

main()