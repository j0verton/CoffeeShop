const url = "https://localhost:5001/api/coffee/";
let orderHistory = []

const eventHub = document.querySelector("body")

const dispatchStateChangeEvent = (method, id) => {
    const coffeeStageChangedEvent = new CustomEvent('coffeeStateChanged', {
        detail: {
            id: id,
            method: method
        }
    })
    eventHub.dispatchEvent(coffeeStageChangedEvent)
}

export const getOrderHistory = () => {
    return fetch(url)
        .then(resp => resp.json())
        .then(coffeeOrders => {
            orderHistory = coffeeOrders
        });
}

export const getOrder = (id) => {
    return fetch(`${url}${id}`)
        .then(res => res.json())
}

export const order = coffeeObj => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(coffeeObj)
    })
}

export const deleteOrder = (id) => {
    return fetch(`${url}${id}`, {
        method: 'DELETE'
    })
        .then(getOrderHistory)
        .then(dispatchStateChangeEvent("delete"))
}

export const editOrder = (coffeeObj) => {
    return fetch(`${url}${coffeeObj.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(coffeeObj)
    })
        .then(getOrderHistory)
        .then(dispatchStateChangeEvent("edit", coffeeObj.id))
}

export const useOrderHistory = () => {
    return orderHistory.slice()
}
