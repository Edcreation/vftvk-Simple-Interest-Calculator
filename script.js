function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    

    if(p<1 || p=="")
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    }
    else{
    dt = new Date().getFullYear();
    res = document.getElementById("result");
    res = p*(r/100)*y;
    const cyear= dt + parseInt(y);
    var result = document.getElementById("result");
    result.innerHTML = "If you deposit " + "<span class='color'>" + p + "</span>,"  + "<br> at an interest rate of "+ "<span class='color'>" + r + "%.</span>" + "<br> You will receive an amount of " + "<span class='color'>" + res + "</span>" + ", <br> in the year " + "<span class='color'>" + cyear + "</span>";
}
}
function myFunction(selector)
{
   var optionList=""
    var i;
    for (i=1;i<=100;i++){
      selector.options[i-1] = new Option(optionList+i);
    }
}
myFunction(document.getElementById("years"));

function range()
{
    var slider= document.getElementById("rate");
    var output= document.getElementById("output");

    output.innerHTML = slider.value;

    slider.oninput = function(){
        output.innerHTML = this.value;
    }
}
