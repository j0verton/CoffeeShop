const eventHub = document.querySelector("body")

export const VarietySelect = varietiesArray => {
    return `
        <div class="dropdown" id="varietySelect">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Please select a Bean Variety
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            ${varietiesArray.map(
        vObj => {
            return `<button class="dropdown-item" type="button" value="${vObj.id}">${vObj.name}</button>`;
        }
    )}
    </div>
    </div>
    `
}

