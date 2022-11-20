function submit_billing(event)
{
    event.preventDefault();

    const fname = document.getElementById('fname');
    const email = document.getElementById('email');

    const loc = document.getElementById('loc');
    const cntr = document.getElementById('cntr');


    sessionStorage.setItem("fname", fname.value);
    sessionStorage.setItem("email", email.value);
    sessionStorage.setItem("loc", loc.value);
    sessionStorage.setItem("cntr", cntr.value);

}

const form = document.getElementById("billing_form");

form.addEventListener('submit', submit_billing);
