export const addAVarietyForm = (beanObj) => {
    if (beanObj) {
        return `
        <form id="addAVariety-form">
        <input type="hidden" name="id" id="variety-id" value="${beanObj.id}">
        <input type="text" id="variety-name" placeholder="New Variety Name">${beanObj.name}</input>
        <input type="text" id=variety-region placeholder="New Variety Region">${beanObj.region}</input>
        <input type="text" id="variety-notes" placeholder="New Variety Notes">${beanObj.notes}</input>
        <button id="submitVariety">Edit This Variety</button>
        </form>`
    } else {
        return `
        <form id="addAVariety-form">
        <input type="hidden" name="id" id="id">
        <input type="text" id="variety-name" placeholder="New Variety Name"></input>
        <input type="text" id=variety-region placeholder="New Variety Region"></input>
        <input type="text" id="variety-notes" placeholder="New Variety Notes"></input>
        <button id="submitVariety">Add This Variety</button>
        </form>`

    }
}