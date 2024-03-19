//testing logic
let hello = "Hola JOSEPH just testing";

document.querySelector('h1').innerHTML = hello;


//---------------------------------------//

//1 OTP

let generatorOTP = () => {
    // Generate a random numeric OTP with exactly 6 digits
    const otpNew = Math.floor(100000 + Math.random() * 900000);
    // Display the generated OTP
    document.getElementById("input-init").innerText = `${otpNew}`;
};

document
    .getElementById("btn-init")
    .addEventListener("click", generatorOTP);
window.addEventListener("load", generatorOTP);


//2 OTP

const gererateBtn = document.querySelector("#btn-init2");

gererateBtn.addEventListener("click", () => {
    let digits = '0123456789';
    let otpH = '';

    for (let i = 0; i < 6; i++) {
        otpH += digits[Math.floor(Math.random() * 10)];
    }

    document.querySelector("#input-init2").innerHTML = otpH;

});




