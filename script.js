//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che:
 //per i multipli di 3 stampi “Fizz” al posto del numero
 //per i multipli di 5 stampi “Buzz” al posto del numero
 //per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero

//<div class="card">
//  <h2>12</h2>
//</div>
const wrapperElement = document.querySelector('div.wrapper');


 let print;

 for (let i = 1; i <= 100; i++){
    
    if (( i % 3 == 0 ) && ( i % 5 == 0 )) {
        print = "FizzBuzz";
        console.log(print);
    }
    else if ( i % 3 == 0 ) {
        print = "Fizz";
        console.log(print);
    }    
    else if ( i % 5 == 0 ) { 
        print = "Buzz";  
        console.log(print);
    }
    else {
        print = i;
        console.log(print)
    }
    
    const cardElement = document.createElement('div');
    cardElement.className = 'card';
    const printElement = document.createElement('h2');
    printElement.innerHTML = print;

    cardElement.appendChild(printElement);
    wrapperElement.appendChild(cardElement);
 }
//BONUS 1:
//Crea un container nel DOM , aggiungendo (attraverso la funzione appendChild())
//un elemento html con il numero o la stringa corretta da mostrare.