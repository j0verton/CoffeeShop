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
            return `<option class="dropdown-item" type="button" id="VarietySelectOption--${vObj.id}" value="${vObj.id}">${vObj.name}</option>`;
        }
    )}
    </div>
    </div>
    `
}

export const VarietySelectOrig = (varietiesArray, obj) => {
    return `
        <select class="dropdown" id="varietySelectorig">
            <option value="${obj ? obj.beanVarietyId : 0}">Please select a Bean Variety</option>
            ${varietiesArray.map(
        vObj => {
            return `<option value="${vObj.id}">${vObj.name}</option>`;
        }
    )}
        </select>
    `
}

