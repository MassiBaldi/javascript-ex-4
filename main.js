// Una funziona per capire se la parola è palindroma
var parola = 'asso';
//   console.log(parola);
//   console.log(parola.charAt(0));
//   console.log(parola.charAt(1));
//   console.log(parola.charAt(2));
//   console.log(parola.charAt(3));
//
// var parola1 = parola.charAt(0) + parola.charAt(1) + parola.charAt(2) + parola.charAt(3);
//   console.log(parola1);
// var parola2 = parola.charAt(3) + parola.charAt(2) + parola.charAt(1) + parola.charAt(0);
//   console.log(parola2);
//
// if (parola1 == parola2) {
//   document.writeln('è un palindromo')
// }
// else {
//   document.writeln('non è un palindromo')
// }
var parola_al_contrario = '';

for (var i = parola.length - 1; i >= 0; i--) {
  console.log(i);
  parola_al_contrario = parola_al_contrario + parola[i];

}
console.log(parola_al_contrario);

  function sommaParola(parola_al_contrario, parola[i]) {
    var parola_al_contrario = parola_al_contrario + parola[i];
    return risultato_parola_al_contrario;
  }
  var risultato = sommaParola();
  console.log(risultato);

  if (parola == parola_al_contrario) {
    document.writeln('La parola è un palindromo')
  }
  else {
    document.writeln('La parola non è un palindromo')
  }
