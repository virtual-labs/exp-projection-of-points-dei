// VARIABLES

// DROPMENUS, PENCILS, COMPASS AND INSTRUCTIONS
const assemblyBox = document.querySelector("#assembly");
const statementBox = document.querySelector("#exp1-statement");
const instruction1Step3 = document.querySelector("#instructions-step3");
const stepNumber = document.querySelector(".step-number");

const comp1Step3 = document.querySelector("#compass1-step3");
const comp2Step3 = document.querySelector("#compass2-step3");
const comp3Step3 = document.querySelector("#compass3-step3");

const pencil1Step3 = document.querySelector("#pencil1-step3");
const pencil2Step3 = document.querySelector("#pencil2-step3");
const pencil3Step3 = document.querySelector("#pencil3-step3");
const pencil4Step3 = document.querySelector("#pencil4-step3");
const pencil5Step3 = document.querySelector("#pencil5-step3");
const pencil6Step3 = document.querySelector("#pencil6-step3");
const pencil7Step3 = document.querySelector("#pencil7-step3");
const pencil8Step3 = document.querySelector("#pencil8-step3");
const pencil9Step3 = document.querySelector("#pencil9-step3");
const pencil10Step3 = document.querySelector("#pencil10-step3");
const pencil11Step3 = document.querySelector("#pencil11-step3");

const dropMenu1Step3 = document.querySelector("#dropMenu1-step3");
const dropMenu2Step3 = document.querySelector("#dropMenu2-step3");
const dropMenu3Step3 = document.querySelector("#dropMenu3-step3");
const dropMenu4Step3 = document.querySelector("#dropMenu4-step3");
const dropMenu5Step3 = document.querySelector("#dropMenu5-step3");
const dropMenu6Step3 = document.querySelector("#dropMenu6-step3");
const dropMenu7Step3 = document.querySelector("#dropMenu7-step3");
const dropMenu8Step3 = document.querySelector("#dropMenu8-step3");
const dropMenu9Step3 = document.querySelector("#dropMenu9-step3");
const dropMenu10Step3 = document.querySelector("#dropMenu10-step3");

// IMAGES
const png1Step3 = document.querySelector("#png1-step3");
const png2Step3 = document.querySelector("#png2-step3");
const png3Step3 = document.querySelector("#png3-step3");
const png4Step3 = document.querySelector("#png4-step3");
const png5Step3 = document.querySelector("#png5-step3");
const png6Step3 = document.querySelector("#png6-step3");
const png7Step3 = document.querySelector("#png7-step3");
const png8Step3 = document.querySelector("#png8-step3");
const png9Step3 = document.querySelector("#png9-step3");
const png10Step3 = document.querySelector("#png10-step3");
const png11Step3 = document.querySelector("#png11-step3");
const png12Step3 = document.querySelector("#png12-step3");
const png13Step3 = document.querySelector("#png13-step3");
const png14Step3 = document.querySelector("#png14-step3");
const png15Step3 = document.querySelector("#png15-step3");
const finalPng = document.querySelector("#finalPng-step3");

// GIFS
const gif1Step3 = document.querySelector("#gif1-step3");
const gif2Step3 = document.querySelector("#gif2-step3");
const gif3Step3 = document.querySelector("#gif3-step3");
const gif4Step3 = document.querySelector("#gif4-step3");
const gif5Step3 = document.querySelector("#gif5-step3");
const gif6Step3 = document.querySelector("#gif6-step3");
const gif7Step3 = document.querySelector("#gif7-step3");
const gif8Step3 = document.querySelector("#gif8-step3");
const gif9Step3 = document.querySelector("#gif9-step3");
const gif10Step3 = document.querySelector("#gif10-step3");
const gif11Step3 = document.querySelector("#gif11-step3");
const gif12Step3 = document.querySelector("#gif12-step3");
const gif13Step3 = document.querySelector("#gif13-step3");
const gif14Step3 = document.querySelector("#gif14-step3");

// TRANSBOXES
const trans1Step3 = document.querySelector("#trans1-step3");
const trans2Step3 = document.querySelector("#trans2-step3");
const trans3Step3 = document.querySelector("#trans3-step3");
const trans4Step3 = document.querySelector("#trans4-step3");
const trans5Step3 = document.querySelector("#trans5-step3");
const trans6Step3 = document.querySelector("#trans6-step3");
const trans7Step3 = document.querySelector("#trans7-step3");
const trans8Step3 = document.querySelector("#trans8-step3");
const trans9Step3 = document.querySelector("#trans9-step3");
const trans10Step3 = document.querySelector("#trans10-step3");
const trans11Step3 = document.querySelector("#trans11-step3");
const trans12Step3 = document.querySelector("#trans12-step3");
const trans13Step3 = document.querySelector("#trans13-step3");

// ARROWS
const arr1Step3 = document.querySelector("#arr1-step3");
const arr2Step3 = document.querySelector("#arr2-step3");
const arr3Step3 = document.querySelector("#arr3-step3");
const arr4Step3 = document.querySelector("#arr4-step3");
const arr5Step3 = document.querySelector("#arr5-step3");
const arr6Step3 = document.querySelector("#arr6-step3");
const arr7Step3 = document.querySelector("#arr7-step3");
const arr8Step3 = document.querySelector("#arr8-step3");

// NEXT BUTTONS 
const arrNext = document.querySelector(".arr-next");
const nextToFinalPng = document.querySelector("#nextToFinalPng");
const nextBtnExp1 = document.querySelector("#nextToExpListFromExp1");


// once dom loaded then trans1Step3 will get activated.
addEventListener("DOMContentLoaded", () => {
    trans1Step3.style.visibility = "visible";
    arr1Step3.style.visibility = "visible";
    png1Step3.style.visibility = "visible";
});

trans1Step3.addEventListener("click", () => {
    trans1Step3.style.visibility = "hidden";
    arr1Step3.style.visibility = "hidden";
    dropMenu1Step3.style.visibility = "visible";
});


// dropmenu 1 changes

dropMenu1Step3.addEventListener("change", (evt) => {
    let selectedValue = dropMenu1Step3.value;
    if (selectedValue === "3hPencil") {
        dropMenu1Step3.style.visibility = "hidden";
        pencil1Step3.style.visibility = "visible";
        arr2Step3.style.visibility = "visible";
    } else {
        alert("Please select 3H Pencil");
    }
});

// when first H Pencil was clicked 

pencil1Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png1Step3.style.visibility = "hidden";
    arr2Step3.style.visibility = "hidden";

    gif1Step3.style.visibility = "visible";

    setTimeout((evt) => {
        gif1Step3.style.visibility = "hidden";
        png2Step3.style.visibility = "visible";

        instruction1Step3.innerText = "Now make points d' 40mm below XY line and d 35mm below XY line";
        stepNumber.innerText = "4";

        arr3Step3.style.visibility = "visible";
        pencil2Step3.style.visibility = "visible";
    }, 9700)
});


pencil2Step3.addEventListener("click", (evt) => {
    evt.target.style.visibility = "hidden";
    png2Step3.style.visibility = "hidden";
    arr3Step3.style.visibility = "hidden";

    gif2Step3.style.visibility = "visible";

    setTimeout(() => {
        gif2Step3.style.visibility = "hidden";
        png3Step3.style.visibility = "visible";
        }, 15000);

    setTimeout(() => {
        nextToFinalPng.style.visibility = "visible";
        arrNext.style.visibility = "visible";
        }, 16000)
});

nextToFinalPng.addEventListener("click", (evt) => {
    png3Step3.style.visibility = "hidden";
    evt.target.style.visibility = "hidden";
    arrNext.style.visibility = "hidden";
    assemblyBox.style.visibility = "hidden";
    statementBox.style.visibility = "hidden";

    finalPng.style.visibility = "visible";
    finalPng.style.top = "80px";

    setTimeout(()=> {
        nextBtnExp1.style.visibility = "visible";
        arrNext.style.visibility = "visible";
    }, 1500);
})

nextBtnExp1.addEventListener("click", () => {
    parent.location = `../exp-list.html`;   // both of these addresses will work.
})