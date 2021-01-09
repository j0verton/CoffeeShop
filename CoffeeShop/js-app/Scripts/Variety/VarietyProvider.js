const url = "https://localhost:5001/api/beanvariety/";


export function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}