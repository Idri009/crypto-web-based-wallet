import { generateMnemonic } from "bip39";

export default function Home() {


    async function x(){
          const mnemonic = await generateMnemonic()
        console.log(mnemonic)
    }
    x()

  return (
    <>
    </>
  );
}

