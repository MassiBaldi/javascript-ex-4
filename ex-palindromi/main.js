// Una funziona per capire se la parola è palindroma

var parola_utente = 'ossesso';
console.log(parola_utente)
document.writeln('Hai scelto questa parola: ' + parola_utente + '</br>')

function checkParola(parola_utente) {
  console.log(parola_utente.length)
  var parola_inversa = '';

  for (var i = parola_utente.length -1; i >= 0 ; i--) {
    console.log(parola_utente[i]);
    var parola_inversa = parola_inversa + parola_utente[i];
  }
  console.log(parola_inversa);

  if (parola_utente == parola_inversa) {
    document.writeln('La parola scelta è un palindromo');
  }
  else {
    document.writeln('La parola scelta non è un palindromo');
  }
  return parola_inversa
}

 var parola_inversa = checkParola(parola_utente);
 console.log(parola_inversa);
