const eventHub = document.querySelector("body")

export const OrderSelect = orderArray => {
    return `
        <div class="dropdown" id="coffeeSelect">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Please Select a Previous Order
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            ${orderArray.map(
        cObj => {
            return `<option class="dropdown-item" type="button" id="OrderSelectOption--${cObj.id}" value="${cObj.id}">${cObj.title}</option>`;
        }
    )}
    </div>
    </div>
    `
}

