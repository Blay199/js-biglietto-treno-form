// CHIEDERE I DATI





const buttonElement = document.querySelector('input[type="button"]');

buttonElement.addEventListener('click', 

function() {
    const ticketType = document.querySelector ('input[name="age"]').value;
    const inputKm = document.querySelector ('input[name="km"]').value; 
    let trainTicket = inputKm * 0.21;

    if (ticketType = 'Minorenne') {
        trainTicket = trainTicket - trainTicket * 0.20
    } else if (ticketType = Over65) {
        trainTicket = trainTicket - trainTicket * 0.40
    }
    
    
    console.log(trainTicket)
}

)
