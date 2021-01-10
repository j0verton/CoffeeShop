const url = "https://localhost:5001/api/beanvariety/";

let varieties = []

const eventHub = document.querySelector("body")

const dispatchStateChangeEvent = (method, id) => {
    console.log(method, id)
    const varietyStageChangedEvent = new CustomEvent('varietyStateChanged', {
        detail: {
            id: id,
            method: method
        }
    })
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


    // i was trying to get this to return the object so i can render it.  not sure why its not working
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(varietyObj)
    }).then(resp => resp.json())
        .then(res => {
            console.log(res)
            dispatchStateChangeEvent("add", res.id)
        })
}

export const deleteVariety = (id) => {
    return fetch(`${url}${id}`, {
        method: 'DELETE'
    })
        .then(getAllBeanVarieties)
        .then(dispatchStateChangeEvent("delete"))
}


export const editVariety = (beanObj) => {
    return fetch(`${url}${beanObj.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(beanObj)
    })
        .then(getAllBeanVarieties)
        .then(dispatchStateChangeEvent("edit", beanObj.id))
}


export const useVarieties = () => {
    return varieties.slice()
}