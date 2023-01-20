let VerifyGeneral = document.querySelector(".formcard")
let InputsVerify = document.querySelectorAll(".formcard input")

let PickName = document.querySelector("#namecard")
let PickNum = document.querySelector("#numcard")
let PickMonth = document.querySelector("#monthcard")
let PickYear = document.querySelector("#yearcard")
let PickCvc = document.querySelector("#cvccard")

let DisplayName = document.querySelector("#namedisplay")
let DisplayNum = document.querySelector("#numdisplay")
let DisplayDate = document.querySelector("#datedisplay")
let DisplayCvc = document.querySelector("#cvcdisplay")

DisplayName.value = PickName.value

var LoopDisplay = setInterval(() => {
    DisplayName.value = DisplayName.value.replace(/(^\d{4})(\d{4})(\d{4})(\d{4})/g, '$1 $2 $3 $4')
}, interval); 

function VerifyInputs(){
    let ok = 0
    for (let input in InputsVerify){
        if(InputsVerify[input].value.length == 0){
            ok--
        }
        if(ok == -InputsVerify.length){
            alert("AI TU NÃO ME AJUDA NÉ O FDP! ESCREVE PELO MENOS 1")
            return
        }
    }   
}