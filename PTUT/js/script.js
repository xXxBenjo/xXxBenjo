
//------------------CHANGMENT DE PAGE-------------------
function goPrésentation()
{
    document.location.href="Pr%C3%A9sentation.html";
}

function goAccueil()
{
    document.location.href="Accueil.html";
}

function goService()
{
    document.location.href="Services.html";
}

function goContact()
{
    document.location.href="Contact.html";
}

//------------------CONTACT------------------//

function Formulaire()
{
    var nom = document.getElementById('nom');
    var mail = document.getElementById('mail');
    var sujet = document.getElementById('sujet');
    var message = document.getElementById('mes');

    if ((nom.value =='')||(mail.value=='')||(sujet.value=='')||(message.value==''))
    {
        alert('Veuillez remplir la totalité des champs du formulaire');
    }
    else
    {
        var motif = /^(([^<>()[].,;:s@]+(.[^<>()[].,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/; 
        if (motif.test(mail.value))
        {
            alert('Merci, nous vous recontacterons bientôt !');
            nom.value = '';
            sujet.value = '';
            message.value = '';
            mail.value = '';
        } 
        else
        {
            alert('Veuillez entrer une adresse email correct');
        }
    }
}