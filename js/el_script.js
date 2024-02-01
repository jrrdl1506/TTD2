function check_values() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("name").value;
    var telefono = document.getElementById("email").value;
    var email = document.getElementById("subject").value;
    var docu = document.getElementById("msg").value;


    // Crear un objeto JSON con los valores
    var formData = {
        "Nombre": nombre,
        "Teléfono": telefono,
        "Email": email,
        "Msg": docu 
    
    };

    // Convertir el objeto JSON a una cadena para mostrarlo o enviarlo
    var formDataJSON = JSON.stringify(formData);

    // Mostrar la cadena JSON en la consola (puedes cambiar esto según tus necesidades)
    console.log(formDataJSON);
    Swal.fire({
        title: 'Mensaje enviado',
        text: 'Lo contactaremos lo antes posible.',
        icon: 'success',
        confirmButtonText: 'Ok'
    });

    // Puedes hacer más cosas aquí, como enviar el JSON a un servidor

    // Retorna false para evitar que el formulario se envíe realmente (puedes cambiar esto según tus necesidades)
    return false;
}



function check_values_index() {
    // Obtener valores de los inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var selectOption = document.querySelector('#contactform select').value;
    var message = document.querySelector('#contactform textarea').value;
    var privacyCheckbox = document.querySelectorAll('#contactform input[type="checkbox"]')[0].checked;
    var receiveInfoCheckbox = document.querySelectorAll('#contactform input[type="checkbox"]')[1].checked;

    if (name === "" || email === "" || subject === "" || selectOption === "" || message === "") {
        // alert("Por favor, complete todos los campos obligatorios.");
        document.getElementById('alerta').style.display = 'block';
        
        return false; // Detener el proceso si hay campos vacíos
    }
    // Crear objeto JSON con los valores
    var formData = {
        "name": name,
        "email": email,
        "subject": subject,
        "selectOption": selectOption,
        "message": message,
        "privacyCheckbox": privacyCheckbox,
        "receiveInfoCheckbox": receiveInfoCheckbox
    };
    Swal.fire({
        title: 'Mensaje enviado',
        text: 'Lo contactaremos lo antes posible.',
        icon: 'success',
        confirmButtonText: 'Ok'
    });

    // Convertir el objeto JSON a cadena
    var jsonData = JSON.stringify(formData);

    // Imprimir la cadena JSON
    console.log(jsonData);

    // Puedes guardar la cadena JSON en un archivo o hacer lo que necesites con ella
}