import { mnemonicToSeed } from "bip39"
import { Wallet } from "ethers";
import { HDNodeWallet } from "ethers";
import { useState } from "react"

export default function EthereumWallet({mnemonic}:{mnemonic:string}){
    
    const [currIndex,setCurrIndex] = useState(0);
    const [addresses, setAddressse] = useState<Wallet['address'][]>([]);

    return <>
        <button onClick={async()=>{
            const seed = await mnemonicToSeed(mnemonic);
            const derivationPath = `m/44'/60'/${currIndex}'/0'`
            const hdNode = HDNodeWallet.fromSeed(seed);
            const child = hdNode.derivePath(derivationPath);
            const wallet = new Wallet(child.privateKey);
            setAddressse([...addresses,wallet.address]);
            setCurrIndex(currIndex=>currIndex+1);

        }}>Add Ethereum Wallet</button>

        <h1>Eth Addresses: </h1>    
        {addresses.map((address,index)=>{
            return <h3>{index}.{address}  </h3>
            
        })}
    </>
}