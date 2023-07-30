
let promise = fetch("https://goweather.herokuapp.com/weather/LDN");  
promise.then((value) => {


return value.json();

}).then((value) => {
console.log(value)
})
