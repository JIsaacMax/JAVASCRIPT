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


function UpdateName(){
    if(PickName.value.length == 0){
        DisplayName.innerText = 'NOME DO TITULAR'
    }else{
        DisplayName.innerHTML = PickName.value
        DisplayName.innerHTML = DisplayName.innerHTML.toUpperCase()
    }
} 

function UpdateNum(){
    if(PickNum.value.length == 0){
        DisplayNum.innerText = '0000 0000 0000 0000'
    }else{
        PickNum.value = PickNum.value.replace(/[^0-9.]/g, '').replace(/(\..*)/g, '').replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g, '$1 $2 $3 $4')
        DisplayNum.innerHTML = PickNum.value
    }
} 

function UpdateDate(){
    if(PickMonth.value.length == 0 && PickYear.value.length == 0){
        DisplayDate.innerText = 'MM/AA'
    }else{
        DisplayDate.innerHTML = (`${PickMonth.value}/${PickYear.value}`)
    }
}

function UpdateCvc(){
    if(PickCvc.value.length == 0){
        DisplayCvc.innerText = '000'
    }else{
        PickCvc.value.length = 3
        DisplayCvc.innerHTML = PickCvc.value
    }
}

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
    if(InputsVerify[0].value.length < 16){
        InputsVerify[0].appendChild
    }
}