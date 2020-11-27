let form = document.querySelector("form");

console.log(form);
form.addEventListener("submit",
   function (e) {
e.preventDefault()
let weight = parseInt(document.querySelector("#weight").value);
console.log(weight);
let height = parseInt(document.querySelector("#height").value);
console.log(height);
;
let result = document.querySelector(".result");


if (height === ""|| height < 0  || isNaN(height)) {
    result.textContent = "See result here";
} else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.textContent = "See result here";
} else { 
    let Result = ((height / (weight * weight)).toFixed(2));
    result.innerHTML = `<span>${Result} BMI</span>`;
}
})

