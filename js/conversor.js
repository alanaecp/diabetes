document.getElementById('output').style.visibility = 'hidden';


document.getElementById('mmolxLInput').addEventListener('input', function(e){
  let mmol = e.target.value;
  mgdL =  mmol / 0.0555;
  document.getElementById('mgxdLInput').value = mgdL.toFixed(2);
  document.getElementById('mgxdLOutput').innerHTML = mgdL;
  document.getElementById('mmolxLOutput').innerHTML = mmol;
  document.getElementById('output').style.visibility = 'visible';

});


document.getElementById('mgxdLInput').addEventListener('input', function(e){
  let mgdL = e.target.value;
  mmol = mgdL * 0.0555;

  document.getElementById('mmolxLInput').value = mmol.toFixed(2);
  document.getElementById('mgxdLOutput').innerHTML = mgdL;
  document.getElementById('mmolxLOutput').innerHTML = mmol;
  document.getElementById('output').style.visibility = 'visible';

});
