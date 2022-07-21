// CHIEDERE I DATI





const buttonElement = document.querySelector('input[type="button"]');

buttonElement.addEventListener('click', 

function() {
    const inputName = document.querySelector ('input[name="name"]').value;
    const inputKm = document.querySelector ('input[name="km"]').value; 
    let trainTicket = inputKm * 0.21;

    
    
    
    console.log(trainTicket)
}

)
