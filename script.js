function verfiernom() {
    var name = document.f.nom.value;
    if (name.length < 5) {
      document.getElementById("t1").innerHTML = "nom invalide. Le nom doit etre compris entre 8 et 20 caracteres";
      document.getElementById("t1").style.color = "red";
    } else {
      document.getElementById("t1").innerHTML = "";
    }

    if (prenom.lenght < 5) {
        document.getElementById("t2").innerHTML = "nom invalide. Le nom doit etre compris entre 8 et 20 caracteres";
        document.getElementById("t2").style.color = "red";
    }
     else {
      document.getElementById("t2").innerHTML = "";
    }
}

function ajoutnewform() {
    const form = document.forms['f'];
    const newSection = document.querySelector('.part1').cloneNode(true);
    form.insertBefore(newSection, document.getElementById('addButton'));
}

function deleteform() {
    const removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.innerText = 'x';
    removeButton.onclick = function() {
        form.removeChild(newSection);
    };
    newSection.appendChild(removeButton);
    form.insertBefore(newSection, document.getElementById('addButton'));
}