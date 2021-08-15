










function calculate (value) {

   
    // die höhe des rechnungs betrages
    // wieviele personen wird der tip betrag geteilt?
    let inputPerson = document.querySelector('.input__people > input[type=text]').value;
    let inputBill = document.querySelector('.input__bill > input[type=text]').value;

    
    inputPerson =parseInt(inputPerson);
    inputBill = parseInt(inputBill);



    //überprüfen ob im feld inputBill und im feld inputPerson ein wert ist. (if statement)
            // wenn nicht error function ausführen die eine warnmeldung im inputfelt anzeigt
            // is dürfen keine 0 im personen feld eingetragen werden.

        // ansonsten calculation ausführen.

    // inputwerte in integer umwandeln


    // tipAmount = (inputBill * prozentWert(button) / 100 ) / inputPerson

        let tipAmount = ((inputBill * value) / 100) / inputPerson;
        showTipAmount(Math.floor(tipAmount));
        

    // tipAmount im bereich Tip Amount / person anzeigen





    // total = (tipAmount + inputBill) / inputPerson


        let total = (tipAmount + inputBill) / inputPerson;
        showTotal(Math.floor(total));

       

    // total im breich Total / person anzeigen


}

function showTipAmount(tip) {
    const outputTip = document.querySelector('#output_tip');

   
    return outputTip.textContent = "$" + tip.toFixed(2);

    
}

function showTotal(total) {

    const outputTotal = document.querySelector('#output_total');

    return outputTotal.textContent = "$" + total.toFixed(2);
    
}





function reset() {
    
    const outputTip = document.querySelector('#output_tip');
    const outputTotal = document.querySelector('#output_total');
    
    outputTip.textContent = "$0.00";
    outputTotal.textContent = "$0.00";
    return

}


