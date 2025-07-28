"use client"

import { generateMnemonic, mnemonicToSeedSync } from "bip39";
import { useState } from "react";
import SolanaWallet from "./components/SolanaWallet";
import EthereumWallet from "./components/EthereumWallet";
import ethGetBalance from "./components/ethGetBalance";
import solGetBalance from "./components/solGetBalance";

export default function Home() {

  const [mnemonic,setMnemonic] = useState("");
  ethGetBalance("0xE27c04fea097dc11A88531D5653A53671e929a97")
  solGetBalance("")
  return (
    <>
    <button onClick={()=>{
      setMnemonic( generateMnemonic())
    }}> generate Mnemonic</button>

    <div>
      {mnemonic}
      <SolanaWallet mnemonic={mnemonic}/>
      <EthereumWallet mnemonic={mnemonic}/>
    </div>
    </>
  );
}


