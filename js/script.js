/* 

STEP DA ESEGUIRE:
Chiedi all'utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine scrivi sulla pagina nomecognomecolorepreferito130

 */

// document.writeln('Hello Worldghghghghgh');
// // alert('Hello World');
// document.getElementById('mio_id').innerHTML = 'Ciaoooo';



// 1. chiedo il nome all'utente  FATTO
const nome = (prompt("Qual'è il tuo nome?" , "Michele"));
console.log('nome:', nome);

// 2.chiedo il cognnome all'utente  FATTO
const surname = (prompt("Qual'è il tuo cognome" , "Boannno"));
console.log("il cognome dell' utente è ", surname);

// 3. chiedo il colore preferito all'utente  FATTO
const colore = (prompt(" Qual'è il tuo colore preferito?","blu"));
console.log('colore preferito: ', colore );

// 4. scrivi sulla pagina nomecognomecolorepreferito130
const password =(nome + surname + colore + 130);

/* Modo 2: mettendo il risultato nell'HTML */
document.getElementById('name-text').innerHTML = " La tua password è " +  password ;







