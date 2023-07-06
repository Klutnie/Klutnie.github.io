function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
var r = document.querySelector(':root');
let count = 1;
function zmiana_motywu(){
  
  let property = document.getElementById(Theme);
  if (count === 0) {
      count = 1;
      r.style.setProperty('--kolorstornki', 'rgba(0, 0, 0, 0.801)');
  }
  else {
      count = 0;
      // pobawic sie w drugi motyw
      r.style.setProperty('--kolorstornki', 'red');
  }
}