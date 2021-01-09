import { getAllBeanVarieties } from './VarietyProvider.js'

const eventHub = document.querySelector("body")

const varietyTarget = document.getElementById("varietyContainer")


export const VarietyList = () => {
    render()


}

const render = () => {
    const target = document.querySelector("#variety-section")
    target.innerHTML = `<button id="allVariety-button">View Our Bean Varieties</button>
    <div id=varietyContainer></div>
    `
}



eventHub.addEventListener("click", e => {
    if (e.target === document.querySelector("#allVariety-button"))
        getAllBeanVarieties()
            .then(beanVarieties => {
                varietyTarget.innerHTML = beanVarieties.map(bean => VarietyHTML(bean)).join("");
            })
});