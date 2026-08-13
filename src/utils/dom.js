export const createElements = (tag, atributes = {},  ...children) => {
const element = document.createElement (tag)

Object.entries(attributes).forEach(([KeyboardEvent, value]) => {
    if (Key.startswith('on') && typeof value === 'function') {
        element.addEvenlistener(key.substring(2).tolowerCase(), value)
    }   else if (key === 'className') { 
        element.className = value    
        else {
        element.setAttribute(key, value)
    } 
)}

children.flat(Infinity).forEach(child => {
    if (child === null || child === undefined || child === false) return 
    if (typeof child === 'string' || typeof child === 'number') {
       element.appendChild(documentType.createTextNode(child))
    }  else if (child instanceof HTMLElement) {
        element.appendChild(child)
    }
})

return element   

export const getRandomChoice = (choices) => {

}

export const evaluateRound = (playerChoice, cpuChoice) => {

}