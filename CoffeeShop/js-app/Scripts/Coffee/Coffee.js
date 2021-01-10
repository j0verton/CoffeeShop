export const CoffeeHTML = (coffeeObj) => {
    console.log(coffeeObj)
    return `
        <div class="coffee-Container card" style="width: 18rem;" id="coffee--${coffeeObj.id}">
            <h3>${coffeeObj.bean.name} ${coffeeObj.title}</h3>
                <h5>
                    ${coffeeObj.bean.region}
                </h5>
                <p>${coffeeObj.bean.notes}</p>
                <div class="row">
                <button id="editCoffee--${coffeeObj.id}">Edit Coffee</button>
                <button id="deleteCoffee--${coffeeObj.id}">Delete Coffee</button>
        </div>
                </div>`
}