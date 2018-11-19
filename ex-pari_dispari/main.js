var giocatore_paridispari = prompt('scegli pari o dispari');
console.log(giocatore_paridispari);
var giocatore_numero = parseInt(prompt('scegli un numero da 1 a 5'));
console.log('giocatore hai tirato ' + giocatore_numero);
var computer_numero = Math.floor(Math.random() * 5 +1);
console.log('computer hai fatto ' + computer_numero);

function sommaNumeri(giocatore_numero, computer_numero) {
  var risultato = ''
  var risultato = giocatore_numero + computer_numero;

  if (risultato % 2 == 0 && giocatore_paridispari == 'pari') {
    console.log('Hai vinto!');
  }
  else if (risultato % 2 == 0 && giocatore_paridispari == 'dispari') {
    console.log('Hai perso!');
  }
  else if (risultato % 2 != 0 && giocatore_paridispari == 'pari') {
    console.log('Hai perso!');
  }
  else if (risultato % 2 != 0 && giocatore_paridispari == 'dispari') {
    console.log('Hai vinto!');
  }
  return risultato;
}
var risultato = sommaNumeri(giocatore_numero, computer_numero);
console.log(risultato);
