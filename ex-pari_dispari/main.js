// L’utente sceglie pari o dispari e un numero da
// 1 a 5. Generiamo un numero random (sempre
// da 1 a 5) per il computer e dichiariamo chi ha
// vinto.
var giocatore_paridispari = prompt('scegli pari o dispari');
console.log(giocatore_paridispari);
document.writeln('Giocatore hai scelto: ' + giocatore_paridispari + '</br>');
var giocatore_numero = parseInt(prompt('scegli un numero da 1 a 5'));
console.log('giocatore hai tirato ' + giocatore_numero);
document.writeln('Giocatore hai tirato il N°: ' + giocatore_numero + '</br>')
var computer_numero = Math.floor(Math.random() * 5 +1);
console.log('computer hai fatto ' + computer_numero);
document.writeln('Computer ha tirato il N°: ' + computer_numero + '</br>');
function sommaNumeri(giocatore_numero, computer_numero) {
  var risultato = ''
  var risultato = giocatore_numero + computer_numero;

  if (risultato % 2 == 0 && giocatore_paridispari == 'pari') {
    console.log('Hai vinto!');
    document.writeln('Giocatore Hai VINTO!' + '</br>');
  }
  else if (risultato % 2 == 0 && giocatore_paridispari == 'dispari') {
    console.log('Hai perso!');
    document.writeln('Giocatore Hai PERSO! Ritenta' + '</br>');
  }
  else if (risultato % 2 != 0 && giocatore_paridispari == 'pari') {
    console.log('Hai perso!');
    document.writeln('Giocatore Hai PERSO! Ritenta' + '</br>');
  }
  else if (risultato % 2 != 0 && giocatore_paridispari == 'dispari') {
    console.log('Hai vinto!');
    document.writeln('Giocatore Hai VINTO!' + '</br>');
  }
  return risultato;
}
var risultato = sommaNumeri(giocatore_numero, computer_numero);
console.log(risultato);
document.writeln('La somma delle vostre giocate è: ' + risultato)
