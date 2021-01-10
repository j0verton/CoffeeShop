export const VarietyHTML = (varietyObj) => {
    return `
        <div class="beanVariety-Containercard" style="width: 18rem;" id="variety--${varietyObj.id}">
            <h3>${varietyObj.name}</h3>
                <h5>
                    ${varietyObj.region}
                </h5>
                <p>${varietyObj.notes}</p>
                
                <div class="row">

                <button id="editVariety--${varietyObj.id}">Edit Variety</button>
                <button id="deleteVariety--${varietyObj.id}">Delete Variety</button>
        </div>
                </div>

`

}