let number = 0;

document.getElementById("increase").onclick = function () {
    number++;
    document.getElementById("o").textContent = number;
}
document.getElementById("decrease").onclick=function()
{
    number--;
    document.getElementById("o").textContent=number;
}
document.getElementById("reset").onclick=function()
{
    number=0;
    document.getElementById("o").textContent=number;
}