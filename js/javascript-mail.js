/* stard game */
var stard = prompt ("digita ok per iniziare a giocare")
console.log(stard)

/* numero utente */
if(stard == "ok"){
  var num_utente = Math.floor(Math.random() * 6) + 1;
}else{
  alert ("prova di nuovo")
}
console.log(num_utente)

/* numero computer */
var num_computer = Math.floor(Math.random() * 6) + 1;
console.log(num_computer)

/* stampa */
document.getElementById("utente").innerHTML="il tuo numero è " + num_utente;
document.getElementById("computer").innerHTML="il numero del computer è " + num_computer;

if(num_utente > num_computer){
  var resultado = "hai vinto" ;
}else if (num_utente == num_computer){
  var resultado = "pareggio";
}else{ 
  var resultado = "hai perso"
}

document.getElementById("vincitore").innerHTML  = resultado;