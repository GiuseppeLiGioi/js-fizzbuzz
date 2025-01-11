/*Consegna:
Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
Prima di partire a scrivere codice poniamoci qualche domanda:
Come faccio a sapere se un numero è divisibile per?
Abbiamo visto qualcosa di particolare che possiamo usare?
Consigli del giorno:
1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
2. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Buon lavoro e buon divertimento!

TASK:

1.0 creare il ciclo for (let i = 0; i<=100; i++)
2.0 creare le condizioni annidate (if) con il modulo per verificare che i numeri siano divisibili per 3, per 5 o pewr entrambi.
  2.1 per ogni casistica visualizziamo l'output.
  */


  for (let i = 0; i<=100; i++){
    if(i % 3 == 0){
        console.log("Fizz")
    }
    else if (i % 5 == 0){
        console.log("Buzz")
    }
    else if (i % 3 == 0 && i % 5==0){
        console.log("FizzBuzz")
    }
    else{
        console.log(`${i}`)
    }
  }



