function clear_session()
{
    sessionStorage.setItem("children_ticket_price", 0) ;
    sessionStorage.setItem("adult_ticket_price", 0) ;
    sessionStorage.setItem("senior_ticket_price", 0) ;
}

function validate()
{
    const c_amm = sessionStorage.getItem("children_ticket_price");
    const s_amm = sessionStorage.getItem("senior_ticket_price");
    const a_amm = sessionStorage.getItem("adult_ticket_price");

    if (!c_amm && !a_amm && !s_amm)
    {
        alert("Tem de selecionar pelo menos um bilhete.")
        return false;

    }

    const c_int = c_amm ? parseInt(c_amm) : 0;
    const a_int = a_amm ? parseInt(a_amm) : 0;
    const s_int = s_amm ? parseInt(s_amm) : 0;

    if(c_int === 0 && a_int === 0 && s_int === 0)
    {
        alert("Tem de selecionar pelo menos um bilhete.")
        return false;
    }

    window.location.href = "./pagamento.html"
    return true;
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

    sessionStorage.setItem(ageClass + "_ticket_price", ticket_price.toFixed(2));
}
