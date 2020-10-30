$(document).ready(function() {
    var randomNumberArray = [];
    var numberQuantity = 5;
    var waitingTime = 5000;
    while(randomNumberArray.length < numberQuantity) {
        var rndNumber = getRndNumber(1, 100);
        if (!randomNumberArray.includes(rndNumber)) {
            randomNumberArray.push(rndNumber);
            $('.number-container').append('<li>' + rndNumber + '</li>')
        }
    }

    var secondi = waitingTime / 1000;
    $('.countdown span').text(secondi);
    var countdown = setInterval(function() {
        $('.countdown span').text(--secondi);
    }, 1000)

    setTimeout(function() {
        $('.number-container').remove();

        setTimeout(function() {
            clearInterval(countdown);
            var rightNumbers = 0;
            var numeriInseriti = [];
            for(var i = 0; i < numberQuantity ; i++) {
                var numeroInserito = parseInt(prompt('Inserisci uno dei numeri che ricordi:'));
                if(randomNumberArray.includes(numeroInserito)) {
                    rightNumbers++;
                }
                numeriInseriti.push(numeroInserito);
            }

            alert('Hai indovinato ' + rightNumbers + ' numeri, complimenti!!');
        }, 10);
    }, waitingTime)

});

function getRndNumber(min, max) {
    return Math.floor(Math.random() * (max + 1 - min)) + min;
}
