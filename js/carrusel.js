
datosJson ={
    img:[
        "./content/finance4/img/senho.webp",
        "./content/finance4/img/floti.png",
        "./content/finance4/img/attinfo.png"

        

    ],
    titulo1:[
        "Controla tu negocio <br> con AT&T <br> Ármalo negocios",
        "Lleva tu flota al éxito<br> AT&T Control Flotilla",
        "Combo OPPO en <br> AT&T  Ármalo Negocios"

    ],
   
    info:[
       "El unico plan empresarial en donde podrás elegir las aplicaciones ideales para el dia de forma ilimitada",
       "Permite administrar tus flotillas de manera remota. Mantiene informadas en tiempo real a tus áreas de mantenimiento, seguridad, operación y logística para la toma de decisiones." ,
        "Ofrece a tu cliente combo con equipos con descuento + Descuento Renta Mensual + 1GB Adicional! "
    ],
    links:[
        "content/finance4/control.html",
        "content/finance4/flotilla.html",
        "content/finance4/control.html"
    ]
}





var pag1 = document.getElementById("rev_slider_1_1");
var pag2 = document.getElementById("rev_slider_1");
var pag3 = document.getElementById("rev_slider_2");
var pag4 = document.getElementById("rev_slider_3");

var arrPag = [pag1,pag2,pag3,pag4];




function selectaSlider(img) {

    $("#rev_slider_1_1").fadeOut();
    cambiaTextos(img);
    
    
}


function cambiaTextos(opc){

    restableceSize();
    switch(opc){
        case '1':{
        //    $("slider-1-slide-1-layer-5").attr("href",datosJson.links[0])
            $("#img_slide").attr("src",datosJson.img[0]);
            $("#slider-1-slide-1-layer-4").text("");
            $("#slider-1-slide-1-layer-4").append(datosJson.titulo1[0]);
            $("#slider-1-slide-1-layer-6").text(datosJson.info[0]);
            $("#slider-1-slide-1-layer-5").on('click',sacarATT);

            break;
        }
        case '2':{
            // $("slider-1-slide-1-layer-5").attr("href",datosJson.links[1])
            $("#img_slide").attr("src",datosJson.img[1]);
            $("#slider-1-slide-1-layer-4").text("");
            $("#slider-1-slide-1-layer-4").append(datosJson.titulo1[1]);
            $("#slider-1-slide-1-layer-6").text(datosJson.info[1]);
            $("#slider-1-slide-1-layer-5").on('click',sacarGeo);

            break;
        }
        case '3':{
            // $("slider-1-slide-1-layer-5").attr("href",datosJson.links[2])
            $("#img_slide").attr("src",datosJson.img[2]);
            $("#img_slide").css({
                "width": "80%",
                "height": "80%"
              });
            $("#slider-1-slide-1-layer-4").text("");
            $("#slider-1-slide-1-layer-4").append(datosJson.titulo1[2]);
            $("#slider-1-slide-1-layer-6").text(datosJson.info[2]);
            $("#slider-1-slide-1-layer-5").on('click',sacarSwal);
            break;
        }
        case 4:{

            break;
        }
        default:{

        }      
    }
    
    $("#rev_slider_1_1").fadeIn();
   
}

function turnOffImg(){
    arrPag.forEach(pag =>{
        pag.classList.add("hidden");
    });
}


function sacarSwal(){
    const customDiv = document.createElement('div');
    customDiv.classList.add('custom-div');
    customDiv.innerHTML = `
      <img src='./content/finance4/img/imgs.png' style='width:280px'>
      <h4>4 Oppo A17 - 75% descuento</h4>
      <p>6GB Plan + 1GB sin costo</p>
      <p>+</p>
      <h4>1 Oppo A58 - 100% descuento</h4>
      <p>6GB Plab + 1GB sin costo</p>
      <h3>$1,699</h3>
    `;

    // Mostrar SweetAlert2 con el div personalizado
    Swal.fire({
      title: 'Combo Oppo | AT&T Ármalo negocios',
      html: customDiv,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px'
    });
}


function sacarGeo(){
    const customDiv = document.createElement('div');
    customDiv.classList.add('custom-div');
    customDiv.innerHTML = `
      <img src='./content/finance4/img/geotab.jpg' style='width:280px'>
     
      <p>Procesador de 32 bits <br> Memoria extendida de 64 Mb.<br> Utiliza redes LTE y 3G para una mayor cobertura <br> Cuenta con una función de notificación de accidentes.</p>
    
      <h4>Renta mensual</h4>
      <p>
      Plan Plus $340<br>
      Plan Pro Plus $380</p>

    `;

    // Mostrar SweetAlert2 con el div personalizado
    Swal.fire({
      title: 'Control Flotilla | AT&T Business',
      html: customDiv,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px'
    });
}







function sacarATT(){
    const customDiv = document.createElement('div');
    customDiv.classList.add('custom-div');
    customDiv.innerHTML = `
      <img src='./content/finance4/img/muj.png' style='width:280px'>
     
      <p>El único plan empresarial en donde podrás elegir las aplicaciones ideales para el día a día de forma ilimitada</p>
    
      <h4>Planes desde $230.00</h4>
      <p>
      
 

    `;

    // Mostrar SweetAlert2 con el div personalizado
    Swal.fire({
      title: 'Armalo negocios | AT&T Business',
      html: customDiv,
      showCloseButton: true,
      showConfirmButton: false,
      width: '600px'
    });
}

function restableceSize(){
    $("#img_slide").css({
        "width": "80%",
        "height": "80%"
      });
}