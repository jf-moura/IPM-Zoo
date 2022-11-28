function submit_billing()
{
    const fname = document.getElementById('fname');
    const email = document.getElementById('email');

    const loc = document.getElementById('loc');
    const cntr = document.getElementById('country');


    sessionStorage.setItem("fname", fname.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("loc", loc.value);
    var e = document.getElementById("country");
    var value = e.value;
    var text = e.options[e.selectedIndex].text;

    sessionStorage.setItem("country", text);

    window.location.href = "./bilhetes.html";
}

function update_cart()
{
    children_amm = sessionStorage.getItem("children_ticket_price");
    adult_amm = sessionStorage.getItem("adult_ticket_price");
    senior_amm = sessionStorage.getItem("senior_ticket_price");

    cart = document.getElementById("ccart");

    i = 0
    total = 0

    if(children_amm != null && children_amm != 0)
    {
        num_children_tickets = parseFloat(children_amm) / 15.68 ;
        cart.innerHTML += "<p>Bilhetes Criança (" + num_children_tickets + ")<span class=\"price\">"+ children_amm+ " €</span></p>";

        i += num_children_tickets;
        total += parseFloat(children_amm);
        sessionStorage.setItem("child_amm", num_children_tickets);
    }

    if(adult_amm != null && adult_amm != 0)
    {
        num_adult_tickets = parseFloat(adult_amm) / 25.18;
        cart.innerHTML += "<p>Bilhetes Adulto (" + num_adult_tickets+")<span class=\"price\">"+ adult_amm+ " €</span></p>";
        i += num_adult_tickets;
        total += parseFloat(adult_amm);

        sessionStorage.setItem("adult_amm", num_adult_tickets);
    }



    if(senior_amm != null && senior_amm != 0)
    {
        num_senior_tickets = parseFloat(senior_amm) / 18.05;

        cart.innerHTML += "<p>Bilhetes Sénior ("+ num_senior_tickets+") <span class=\"price\">"+ senior_amm+ " €</span></p>";
        i += num_senior_tickets;
        total += parseFloat(senior_amm);

        sessionStorage.setItem("senior_amm", num_senior_tickets.toFixed());
    }

    sessionStorage.setItem("total", total.toFixed(2));

    num_items = document.getElementById("num_items");
    num_items.innerHTML += "<b>" + i + " items </b> <br> </br>"

    valor_total = document.getElementById("valor_total");
    valor_total.innerHTML = total.toFixed(2) + " €"

}
