export function getCategories(){
    return fetch('http://localhost:9090/categories')
    .then(response => response.json());
}