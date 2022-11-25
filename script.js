// variáveis - variables
const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

form.onsubmit = event => {
    event.preventDefault()

    const weight = inputWeight.value
    const height = inputHeight.value

    const showAlert = notANumber(weight) || notANumber(height)

    if(showAlert){
        AlertError.open()
        return;
    }

    AlertError.close()

    const result = calculeteIMC(weight, height)
    displayResultMessage(result)
}

function displayResultMessage(result){
    const message = `Seu IMC é de ${result}`

    Modal.message.innerText = message
    Modal.open()
}

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
