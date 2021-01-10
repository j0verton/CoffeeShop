const url = "https://localhost:5001/api/beanvariety/";

let varieties = []

const eventHub = document.querySelector("body")

const dispatchStateChangeEvent = () => {
    const varietyStageChangedEvent = new CustomEvent('varietyStateChanged')
    eventHub.dispatchEvent(varietyStageChangedEvent)
}
export function getAllBeanVarieties() {
    return fetch(url)
        .then(resp => resp.json())
        .then(beans => {
            varieties = beans
        });
}

export const getVariety = (id) => {
    return fetch(`${url}${id}`)
        .then(resp => resp.json())
}

export const addVariety = varietyObj => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(varietyObj)
    }).then(dispatchStateChangeEvent)
}

export const deleteVariety = (id) => {
    return fetch(`${url}${id}`, {
        method: 'DELETE'
    }).then(dispatchStateChangeEvent)
}

export const useVarieties = () => {
    return varieties.slice()
}

export const editVariety = (beanObj) => {
    return fetch(`${url}${}`)
        .then(dispatchStateChangeEvent)
}