export const CoffeeHTML = () => {
    return `
        <div class="coffee-Container" id="coffee--${coffeeObj.id}">
            <h3>${coffeeObj.name}</h3>
                <h5>
                    ${coffeeObj.region}
                </h5>
                <p>${coffeeObj.notes}</p>
                <button id="editCoffee--${coffeeObj.id}">Edit Coffee</button>
                <button id="deleteCoffee--${coffeeObj.id}">Delete Coffee</button>
        </div>

`

}