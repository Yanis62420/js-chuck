const btn = document.getElementById('btn');
const out= document.getElementById('output');
var quote = ["Quand Chuck Norris fait l'épreuve des araignées dans Fort Boyard, elles sortent elles-mêmes les petits papiers et lisent à voix haute."]
 quote [0] = ["Chuck Norris peut faire des ronds avec une equerre"]
 quote [1] = ["Chuck Norris peut écrire un traitement de texte avec la souris."]
 quote [2] = ["Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris"]
 quote [3] = ["Chuck norris se souvient très bien de son futur"]
 quote [4] = ["Chuck Norris a déjà compté jusqu'à l'infini. Deux fois."]
 quote [5] = ["Google, c'est le seul endroit où tu peux taper Chuck Norris..."]
 quote [6] = ["Certaines personnes portent un pyjama Superman. Superman porte un pyjama Chuck Norris."]
  btn.addEventListener('click',function(){
      let random = Math.floor(Math.random() * quote.length);
      console.log(random);
      document.querySelector('.quote').innerText= quote[random.quote]
  })
  
 out.addEventListener('click', function colorRandom(){   
    var color1=Math.floor(Math.random() * 255) + 1;
    var color2=Math.floor(Math.random() * 255) + 1;
    var color3=Math.floor(Math.random() * 255) + 1;
 })
