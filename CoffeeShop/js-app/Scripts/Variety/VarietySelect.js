const eventHub = document.querySelector("body")

export const VarietySelect = varietiesArray => {
    return `
        <select class="dropdown" id="varietySelect">
            <option value="0">Please select a Bean Variety</option>
            ${varietiesArray.map(
        vObj => {
            return `<option value="${vObj.id}">${vObj.name}</option>`;
        }
    )}
        </select>
    `
}

