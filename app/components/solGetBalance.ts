export default function solGetBalance(address:string){
    const url = process.env.solrpc as string;
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };

    const body = JSON.stringify({
        id: 1,
        jsonrpc: "2.0",
        method: "getBalance",
        params: [`${address}`]
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