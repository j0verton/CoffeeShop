import { addVariety, getAllBeanVarieties, deleteVariety } from './VarietyProvider.js'
import { VarietyHTML } from './Variety.js'
import { addAVarietyForm } from './VarietyForm.js'
const eventHub = document.querySelector("body")

export const VarietyList = () => {
    render()


}

const render = () => {
    const target = document.querySelector("#variety-section")
    target.innerHTML = `
    <div id="variety-buttonContainer">
        <button id="allVariety-button" class="show">View Our Bean Varieties</button>
        <button id="addVariety-button" >Add A Bean Varieties</button>
    </div>
    <div id=varietyContainer></div>
    `
}


const renderForm = () => {
    const target = document.querySelector("#varietyContainer");
    target.innerHTML = addAVarietyForm();

}




eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    const varietyButton = document.querySelector("#allVariety-button")

    if (e.target === document.querySelector("#allVariety-button") && varietyButton.classList.contains("show")) {

        getAllBeanVarieties()
            .then(beanVarieties => {
                varietyTarget.innerHTML = beanVarieties.map(bean => VarietyHTML(bean)).join("");
            })

        varietyButton.textContent = "Hide List"
        varietyButton.classList.remove("show")

    } else if (e.target === document.querySelector("#allVariety-button") && !varietyButton.classList.contains("show")) {
        varietyTarget.innerHTML = "";
        varietyButton.textContent = "View Our Bean Varieties";
        varietyButton.classList.add("show");

    }

})

eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    const varietyButton = document.querySelector("#allVariety-button")

    if (e.target === document.querySelector("#addVariety-button")) {
        console.log("add click")
        renderForm()
    }
})

eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    if (e.target.id.startsWith('editVariety')) {

        console.log("edit click")

    }
})

//DELETE
eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    if (e.target.id.startsWith('deleteVariety')) {
        const [prefix, id] = e.target.id.split("--")
        deleteVariety(id)
        //.then(() => {
        //need to rerender list
        //})


    }
})


//SUMBIT
eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    if (e.target.id === 'submitVariety') {
        const name = document.getElementById('variety-name')
        const region = document.getElementById('variety-region')
        const notes = document.getElementById('variety-notes')

        //stubbed in for creating an edit later

        const id = ""
        if (id.value) { }

        const newVarietyObj = {
            name: name.value,
            region: region.value,
            notes: notes.value

        }
        addVariety(newVarietyObj);
    }
})


