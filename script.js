let button = document.getElementById("button");
let code = document.getElementById("code");

button.addEventListener("click", function ()
{
    const ramdomNumber = Math.floor(Math.random() * 16777215);
    const ramdomCode = "#" + ramdomNumber.toString(16);
    document.body.style.backgroundColor = ramdomCode;
    code.innerText = ramdomCode;
});
