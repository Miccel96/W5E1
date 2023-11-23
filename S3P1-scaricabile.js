/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, 
 ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let risultato = crazySum

function crazySum (x,y) {
    if (x != y) {
         
        let result = x + y
        console.log(result)
        
    } else {         
        let result = (x + y)*3
        console.log(result)
    }
}

crazySum(1,2)




/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary",
 che accetta un numero intero come parametro e ritorna 
 true se tale parametro è incluso tra 20 e 100 (incluso) o 
 se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function boundary (z) {
if (((z > 20) && (z<= 100)) || (z == 400)) {
    console.log(true)
    
} else {
    console.log(false)
}

}

boundary(100)



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", 
 che accetta una stringa come parametro
  e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let stringa = "epicode";

function reverseString (bo) {
console.log (stringa[6]+stringa[5]+stringa[4]+stringa[3]+stringa[2]+stringa[1]+stringa[0])

}

reverseString (stringa)

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", 
 che accetta una stringa come parametro e 
 la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/
 

/* SCRIVI QUI LA TUA RISPOSTA */


let myString = "mappamondomondo";

function upperFirst() {
let firstWord =myString[0].toUpperCase() +  myString.slice(1,5) ;

let secondWord =myString[5].toUpperCase()+  myString.slice(6,10);

let thirdWord =myString[10].toUpperCase() + myString.slice(11,15)

console.log (firstWord+secondWord+thirdWord)
}

upperFirst(myString)

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", 
 che accetta come parametro un 
 numero chiamato n e ritorna un array contenente n 
 numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro 
 e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let extra = "soqquadro" 

function cutString () {
 extra.slice.length-1
 console.log(extra)
}

cutString(extra)
