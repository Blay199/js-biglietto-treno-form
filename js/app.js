// CHIEDERE I DATI





const buttonElement = document.querySelector('input[type="button"]');

buttonElement.addEventListener('click', 

function() {
    const inputAge = document.querySelector ('input[name="age"]');
    const inputKm = document.querySelector ('input[name="km"]'); 
    let trainTicket = inputKm * 0.21;

    if (inputAge < 18)
    
    console.log(trainTicket)
}

)
