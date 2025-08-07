export function getData(){
    return fetch("http://localhost:5173/logements-kasa.json", {
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(response => response.json());
}
