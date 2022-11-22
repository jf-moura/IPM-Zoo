function clear_session()
{
    sessionStorage.setItem("children_ticket_price", 0) ;
    sessionStorage.setItem("adult_ticket_price", 0) ;
    sessionStorage.setItem("senior_ticket_price", 0) ;
}
function set_price_by_age(price_inc, ageClass)
{
    const age_class_ammount = document.getElementById(ageClass + "_ammount");
    const ammount = parseInt(age_class_ammount.value);
    let total = ammount;
    if (price_inc == true)
    {
        total = ammount + 1;
    }
    else
    {
        if (ammount > 0)
        {
            total = ammount - 1;
        }
    }
    document.getElementById(ageClass + "_ammount").value = total;

    let ticket_price = 0;
    if(ageClass == "children")
    {
        ticket_price = total * 15.68;
    }
    else if(ageClass == "adult")
    {
        ticket_price = total * 25.18;
    }
    else
    {
        ticket_price = total * 18.05;
    }

    document.getElementById(ageClass + "_ammount").innerText = ticket_price;

    sessionStorage.setItem(ageClass + "_ticket_price", ticket_price);
}
