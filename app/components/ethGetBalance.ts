export default function ethGetBalance(address:string){
    const url = process.env.ethrpc as string;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "eth_getBalance",
        params: [
            `${address}`,
            "latest"
        ]
    });

    fetch(url, {
        method: 'POST',
        headers: headers,
        body: body
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

}
