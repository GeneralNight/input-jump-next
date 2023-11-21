window.addEventListener("load", (event) => {
    document.getElementById(`codeInput1`).focus()
    verifyCodeIsAvailableToSend()
});

const jumpToNext = (inputRef) => {
    if(inputRef<6) {
        document.getElementById(`codeInput${inputRef+1}`).focus()
        
    } else {
        document.getElementById(`codeInput${inputRef}`).blur()
    }

    verifyCodeIsAvailableToSend()


}

const sendCode = () => {
    const codeInputControls = document.getElementsByClassName(`codeInputControl`);

    const finalCode = Array.from(codeInputControls).map(inputControl => {
        return inputControl.value 
    }).join("")

    console.log(finalCode)    
}

const verifyCodeIsAvailableToSend = () => {
    const codeInputControls = document.getElementsByClassName(`codeInputControl`);

    const finalCode = Array.from(codeInputControls).map(inputControl => {
        return inputControl.value 
    }).filter(v=>v.length)

    if(finalCode.length<6) {
        document.getElementById(`btnSend`).classList.add('isDisabled')
        document.getElementById(`btnSend`).setAttribute('disabled', true)
        return
    }

    document.getElementById(`btnSend`).classList?.remove('isDisabled')
    document.getElementById(`btnSend`).removeAttribute('disabled', false)
}