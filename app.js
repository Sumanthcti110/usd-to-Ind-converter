// currency converter
// JS VARIABLES, JS FUNCTIONS, DOM(DOCUMENT OBJECT MODEL)
// console.log('app.js is connected!')
// variables => (var), let and const 



function usdToInr(){
    
    let usd = document.getElementById('usd').value;
    let inr = (usd * 81.70).toFixed(2);
    let result = "Rs "+ inr;
    document.getElementById('inr').innerText = result;
    console.log(usd * 81.70)
}
