/*
     _____                 
    |   __|___ ___ ___ ___ 
    |  |  | -_|   | . |_ -|
    |_____|___|_|_|___|___|
      ⚠️Made By Healer-op

*/


/*-------------- Audio Files --------------- */
const success = new Audio('https://github.com/healer-op/n0des/blob/main/payapi/success.mp3?raw=true');
const error = new Audio('https://github.com/healer-op/HealCloud/blob/main/mp3/Sarah%20Cothran%20-%20As%20The%20World%20Caves%20In%20(Wuki%20Remix).mp3?raw=true');
error.play();


function Music(){
     bg.play();
}

Music();
function Generate(){
    fetch('Genos.json') // Fetch a url Containing Accounts 
    .then(res=> res.json())
    .then(data => {

        var j = Math.floor(Math.random() * data.Account.Healer1.length);

        console.log(data.Account.Healer1[j]);

        document.getElementById("Generated").value = data.Account.Healer1[j];

        /* Get the text field */

        var copyText = document.getElementById("Generated");
    
  
        /* Select the text field */
        copyText.select();
        copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value + " Thanks For Using HealGen");
        success.play();
        setTimeout(function(){ window.open("index.html","_self"); }, 3000);
    });
}

