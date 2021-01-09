const url = "https://localhost:5001/api/beanvariety/";


export function getAllBeanVarieties() {
    return fetch(url).then(resp => resp.json());
}

export const addVariety = varietyObj => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(varietyObj)
    })
}

export const deleteVariety = (id) => {
    return fetch(`${url}${id}`, {
        method: 'DELETE'
    })

}