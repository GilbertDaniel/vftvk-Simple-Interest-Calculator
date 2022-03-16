function compute()
{
    var principal = document.getElementById("principal").value;
    console.log({principal});
    if (principal === undefined || principal === null || principal === "" || Number.parseInt(principal) <= 0) { // Validation
        alert("Enter a positive number");
        document.getElementById("principal").value=""; // Reset the Value to Blank;
        document.getElementById("principal").focus(); // Focus on principal input
        return;
    }
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate /100.0;
    var year = new Date().getFullYear()+parseInt(years);
    //var amount = Number.parseInt(principal) + interest; // Total Amount = principal + interest
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\<\/mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\<\/mark\>\<br\>You will receive an amount of \<mark\>"+interest+"\<\/mark\>,\<br\>in the year \<mark\>"+year+"\<\/mark\>\<br\>"
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
