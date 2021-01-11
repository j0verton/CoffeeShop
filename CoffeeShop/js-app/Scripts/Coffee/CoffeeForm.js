import { useVarieties } from "../Variety/VarietyProvider.js"
import { VarietySelectOrig } from "../Variety/VarietySelect.js"

export const CoffeeForm = (coffeeObj) => {
    const varieties = useVarieties()
    if (coffeeObj) {
        return `
        <div class="form-group">
            <form id="addACoffee-form">
                <input type="hidden" name="id" id="coffee-id" value="${coffeeObj.id}">
                <input type="text" id="coffee-title" value="${coffeeObj.title}">${coffeeObj.name}</input>
                ${VarietySelectOrig(varieties)}
                <button id="submitCoffee">Edit This Coffee</button>
            </form>
        </div>`
    } else {
        return `
        <div class="form-group>
            <form id="addACoffee-form">
                <input type="hidden" name="id" id="id">
                <input type="text" id="coffee-title" placeholder="Coffee Type"></input>
                ${VarietySelectOrig(varieties)}
                <button id="submitCoffee">Order This Coffee</button>
            </form>
        </div>`
    }
}
