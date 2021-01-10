import { addVariety, getAllBeanVarieties, deleteVariety, useVarieties, getVariety, editVariety } from './VarietyProvider.js'
import { VarietyHTML } from './Variety.js'
import { VarietyForm } from './VarietyForm.js'
import { VarietySelect } from './VarietySelect.js'
const eventHub = document.querySelector("body")

export const VarietyList = () => {
    render()
}

const render = () => {
    getAllBeanVarieties().then(() => {
        const target = document.querySelector("#variety-section")
        target.innerHTML = `
    <div id="variety-buttonContainer">
        <button id="allVariety-button" class="show">View Our Bean Varieties</button>
        ${VarietySelect(useVarieties())}
        <button id="addVariety-button" >Add A Bean Varieties</button>
    </div>
    <div id=varietyContainer></div>
    `
    })
}

const renderForm = (beanObj) => {
    const target = document.querySelector("#varietyContainer");
    target.innerHTML = VarietyForm(beanObj);
}

eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    const varietyButton = document.querySelector("#allVariety-button")

    if (e.target === document.querySelector("#allVariety-button") && varietyButton.classList.contains("show")) {

        getAllBeanVarieties()
            .then(() => useVarieties())
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
//ADD Variety
eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    const varietyButton = document.querySelector("#allVariety-button")
    if (e.target === document.querySelector("#addVariety-button")) {
        console.log("add click")
        renderForm()
    }
})
//EDIT variety 
eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    if (e.target.id.startsWith('editVariety')) {
        const [prefix, id] = e.target.id.split("--")
        getVariety(id).then(bean =>
            renderForm(bean)
        )
        console.log("edit click")

    }
})
//

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
        const id = document.getElementById('variety-id')
        console.log(id)
        if (id) {
            const updateObj = {
                id: id.value,
                name: name.value,
                region: region.value,
                notes: notes.value
            }
            debugger
            editVariety(updateObj);
        } else {

            const newVarietyObj = {
                name: name.value,
                region: region.value,
                notes: notes.value
            }
            debugger

            addVariety(newVarietyObj);
        }
    }
})

eventHub.addEventListener("change", changeEvent => {
    const target = document.querySelector("#varietyContainer");
    if (changeEvent.target.id === "varietySelect") {
        const selectedVariety = changeEvent.target.value
        console.log(selectedVariety)
        getVariety(selectedVariety).then(bean => {
            console.log(bean, "bean")
            target.innerHTML = VarietyHTML(bean)
        })
    }
})


