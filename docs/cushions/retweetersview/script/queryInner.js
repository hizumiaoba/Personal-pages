const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get('code');
let p = document.getElementById('p_suc');
p.innerText = myParam;