function check_values() {
    // Obtener los valores de los campos
    var nombre = document.getElementById("name").value;
    var telefono = document.getElementById("email").value;
    var email = document.getElementById("subject").value;
    var opcion = document.querySelector("#contactform select").value;
    var asunto = document.getElementById("subject").value;

    // Crear un objeto JSON con los valores
    var formData = {
        "Nombre": nombre,
        "Teléfono": telefono,
        "Email": email,
        "Opción": opcion,
        "Asunto": asunto
    };

    // Convertir el objeto JSON a una cadena para mostrarlo o enviarlo
    var formDataJSON = JSON.stringify(formData);

    // Mostrar la cadena JSON en la consola (puedes cambiar esto según tus necesidades)
    console.log(formDataJSON);

    // Puedes hacer más cosas aquí, como enviar el JSON a un servidor

    // Retorna false para evitar que el formulario se envíe realmente (puedes cambiar esto según tus necesidades)
    return false;
}