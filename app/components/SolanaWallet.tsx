import { Keypair } from "@solana/web3.js";
import { mnemonicToSeed } from "bip39";
import { derivePath } from "ed25519-hd-key";
import { Key, useState } from "react";
import nacl from "tweetnacl";

export default function SolanaWallet({mnemonic}:{mnemonic:string}){

    const [currIndex, setCurrIndex] = useState(0);
    const [publicKeys, setPublicKeys] = useState<Keypair['publicKey'][]>([]);
    
    return <>
        <button onClick={async ()=>{
            const seed = await mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currIndex}'/0'`;
            const derivedSeed = derivePath(path, seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keyPair = Keypair.fromSecretKey(secret)
            setCurrIndex(inx=>inx+1);
            setPublicKeys([...publicKeys,keyPair.publicKey])
            console.log(keyPair.publicKey.toString())

        }}>Generate Solana Wallet</button>
        
        <h1>Sol Public Keys: </h1>
        {publicKeys.map((publicKey,index)=>{
            return <h3>{index}.{publicKey.toBase58()}</h3>
        })}
        
    </>
    

}