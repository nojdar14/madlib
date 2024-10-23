document.getElementById("ml").addEventListener("click", mlbtn);

function mlbtn() {
  let pn = document.getElementById("pn").value;
  let adj = document.getElementById("adj").value;
  let ptv = document.getElementById("ptv").value;
  let noun = document.getElementById("noun").value;

  let output = `"there are too many ${pn}  on this ${adj} airplane!". I screamed. "Somebody has
  to ${ptv} on the ${noun} to solve this problem!"`;

  document.getElementById("border").innerHTML = output;
}

document.getElementById("ml-2").addEventListener("click", mlbtn2);

function mlbtn2() {
  let pn = document.getElementById("pn").value;
  let adj = document.getElementById("adj").value;
  let ptv = document.getElementById("ptv").value;
  let noun = document.getElementById("noun").value;

  let output = `One day, the ${pn} felt very ${adj} and decided to ${ptv} to the ${noun}. On their way, they discovered amazing sights and had the adventure of a lifetime!`;

  document.getElementById("ml2").innerHTML = output;
}
