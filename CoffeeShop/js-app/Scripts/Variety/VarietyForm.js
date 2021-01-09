export const addAVarietyForm = () => {
    return `
    <form id="addAVariety-form">
        <input type="text" id="variety-name" placeholder="New Variety Name"></input>
        <input type="text" id=variety-region placeholder="New Variety Region"></input>
        <input type="text" id="variety-notes" placeholder="New Variety Notes"></input>
        <button id="submitVariety">Add This Variety</button>
    </form>`
}