export function minLengthValidation(inputData, minLength) {
    let { value } = inputData
    removeClassErrorSuccess(inputData)

    if (value.length >= minLength) {
        inputData.classList.add("success")
        return true
    } else {
        inputData.classList.add("error")
        return false
    }
}

export function emailValidation(inputData) {
    //eslint-disable-next-line no-useless-escape
    let emailValid = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    let { value } = inputData
    removeClassErrorSuccess(inputData)

    let resultValidation = emailValid.test(value)
    if (resultValidation) {
        inputData.classList.add("success")
        return true
    } else {
        inputData.classList.add('error')
        return false
    }
}

const removeClassErrorSuccess = (inputData) => {
    inputData.classList.remove("success")
    inputData.classList.remove("error")
}
