export const VarietyHTML = (varietyObj) => {
    return `
        <div class="beanVariety-Container" id="variety--${varietyObj.id}">
            <h3>${varietyObj.name}</h3>
                <h5>
                    ${varietyObj.region}
                </h5>
                <p>${varietyObj.notes}</p>
                <button id="editVariety--${varietyObj.id}">Edit Variety</button>
                <button id="deleteVariety--${varietyObj.id}">Delete Variety</button>
        </div>

`

}