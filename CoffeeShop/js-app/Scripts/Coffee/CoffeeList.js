import { CoffeeHTML } from "./Coffee.js"
import { CoffeeForm } from "./CoffeeForm.js"
import { OrderSelect } from "./CoffeeSelect.js"
import { getOrder, getOrderHistory, useOrderHistory } from "./CoffeProvider.js"

const eventHub = document.querySelector("body")

const target = document.querySelector("#coffee-section")

export async function CoffeeList() {
    target.innerHTML = await render()
}

const render = () => {
    return getOrderHistory().then(() => {
        let HTML = `<div id="coffee-buttonContainer"  class="d-flex flex-row justify-content-around">
        <button id="allCoffee-button" class="show btn btn-secondary">View Your Order History</button>
        ${OrderSelect(useOrderHistory())}
        <button id="addCoffee-button" class="btn btn-secondary">Order a Coffee</button>
    </div>
    <div id=coffeeContainer></div>`
        return HTML
    })
}

const renderForm = (coffeeObj) => {
    const ctarget = document.querySelector("#coffeeContainer");
    ctarget.innerHTML = CoffeeForm(coffeeObj);
}

//toggles the view all coffees view and button
eventHub.addEventListener("click", e => {
    const coffeeTarget = document.getElementById("coffeeContainer")
    const coffeeButton = document.querySelector("#allCoffee-button")

    if (e.target === document.querySelector("#allCoffee-button") && coffeeButton.classList.contains("show")) {

        getOrderHistory()
            .then(() => useOrderHistory())
            .then(coffees => {
                coffeeTarget.innerHTML = coffees.map(coffee => CoffeeHTML(coffee)).join("");
            })

        coffeeButton.textContent = "Hide List"
        coffeeButton.classList.remove("show")

    } else if (e.target === document.querySelector("#allCoffee-button") && !coffeeButton.classList.contains("show")) {
        coffeeTarget.innerHTML = "";
        coffeeButton.textContent = "View Your Order History";
        coffeeButton.classList.add("show");

    }

})

// select
eventHub.addEventListener("click", e => {
    const cTarget = document.querySelector("#coffeeContainer");
    if (e.target.id.startsWith("OrderSelectOption")) {
        const selected = e.target.value
        console.log(selected)
        getOrder(selected).then(order => {
            cTarget.innerHTML = CoffeeHTML(order)
        })
    }
})

//ADD Order
eventHub.addEventListener("click", e => {
    const coffeeTarget = document.getElementById("coffeeContainer")
    const coffee = document.querySelector("#allCoffee-button")
    if (e.target === document.querySelector("#addCoffee-button")) {
        console.log("add click")
        renderForm()
    }
})
//EDIT variety 
eventHub.addEventListener("click", e => {
    const coffeeTarget = document.getElementById("coffeeContainer")
    if (e.target.id.startsWith('editCoffee')) {
        const [prefix, id] = e.target.id.split("--")
        getOrder(id).then(coffee =>
            renderForm(coffee)
        )
        console.log("edit click")
    }
})

//DELETE
eventHub.addEventListener("click", e => {
    const coffeeTarget = document.getElementById("coffeeContainer")
    if (e.target.id.startsWith('deleteCoffee')) {
        const [prefix, id] = e.target.id.split("--")
        deleteOrder(id)
    }
})