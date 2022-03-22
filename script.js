function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;

    res = document.getElementById("result");

    res = p*(r/100)*y;
    const cyear= 2022+y;
    
    var principal= "If you deposit "+ p +"."
    var interest =  "at an interest rate of "+ r +"%." 
    var ans = "You will receive an amount of " + res +","
    var time = " in the year " +(cyear) ;
    document.getElementById("principle").textContent = principal;
    document.getElementById("interest").textContent = interest;
    document.getElementById("ans").textContent = ans;
    document.getElementById("time").textContent = time;

    
}