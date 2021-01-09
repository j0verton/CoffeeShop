import { getAllBeanVarieties } from './VarietyProvider.js'
import { VarietyHTML } from './Variety.js'
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
    if (e.target.id.startsWith('editVariety')) {

        console.log("edit click")

    }
})

eventHub.addEventListener("click", e => {
    const varietyTarget = document.getElementById("varietyContainer")
    if (e.target.id.startsWith('deleteVariety')) {
        console.log("delete click")

    }
})

