// Una funziona per capire se la parola è palindroma
var parola = 'asso';
  console.log(parola);
  console.log(parola.charAt(0));
  console.log(parola.charAt(1));
  console.log(parola.charAt(2));
  console.log(parola.charAt(3));

var parola1 = parola.charAt(0) + parola.charAt(1) + parola.charAt(2) + parola.charAt(3);
  console.log(parola1);
var parola2 = parola.charAt(3) + parola.charAt(2) + parola.charAt(1) + parola.charAt(0);
  console.log(parola2);

if (parola1 == parola2) {
  document.writeln('è un palindromo')
}
else {
  document.writeln('non è un palindromo')
}
