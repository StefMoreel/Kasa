export function getData(){
    return fetch("${import.meta.env.BASE_URL}logements-kasa.json", {
        headers : {
            'Content-Type' : 'application/json',
            'Accept' : 'application/json'
        }
    })
    .then(response => response.json());
}
