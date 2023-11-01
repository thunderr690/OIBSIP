function print() {
    const inputForm = document.getElementById("inputForm").value
    const outputForm = document.getElementById("outputForm").value
    let input = Number(document.getElementById("input").value)

    if (inputForm == 'C') {
        if (outputForm == 'F') {
            input = input * 9 / 5 + 32
            let output = document.getElementById("output")
            output.value = input
        }
        else if (outputForm == 'K') {
            input = input + 273.15
            let output = document.getElementById("output")
            output.value = input
        }
        else if(outputForm =="C"){
            input=input
            let output = document.getElementById("output")
            output.value=input
        }
    }
    else if (inputForm == 'K') {
        if (outputForm == 'F') {
            input=(input-273.15)* 9/5 + 32
            let output = document.getElementById("output")
            output.value=input
        }
        else if (outputForm == 'K') {
            input=input
            let output = document.getElementById("output")
            output.value=input
        }
        else if(outputForm == 'C'){
            input=input - 273.15
            let output = document.getElementById("output")
            output.value=input
        }
    }
    else if (inputForm == 'F') {
        if (outputForm == 'F') {
            input=input
            let output = document.getElementById("output")
            output.value=input
        }
        else if (outputForm == 'K') {
            input=(input - 32) * 5 / 9 + 273.15
            let output = document.getElementById("output")
            output.value=input
        }
        else if(outputForm == 'C'){
            input=(input - 32) * 5/9
            let output = document.getElementById("output")
            output.value=input
        }
    }
}