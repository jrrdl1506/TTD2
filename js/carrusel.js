
datosJson ={
    img:[
        "./content/finance4/img/senho.webp",
        "./content/finance4/img/adOppo.png",
        "./content/finance4/img/oppo1.png"

        

    ],
    titulo1:[
        "Controla tu negocio <br> con AT&T <br> Ármalo negocios",
        "Lleva tu flota al éxito<br> AT&T Control Flotilla",
        "Combo OPPO en <br> AT&T  Ármalo Negocios"

    ],
   
    info:[
       "El unico plan empresarial en donde podrás elegir las aplicaciones ideales para el dia de forma ilimitada",
       "Permite administrar tus flotillas de manera remota. Mantiene informadas en tiempo real a tus áreas de mantenimiento, seguridad, operación y logística para la toma de decisiones." ,
        "Ofrece a tu cliente combo con equipos con descuento + Descuento Renta Mensual + 1GB Adicional!"
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


    switch(opc){
        case '1':{
           
            $("#img_slide").attr("src",datosJson.img[0]);
            $("#slider-1-slide-1-layer-4").text("");
            $("#slider-1-slide-1-layer-4").append(datosJson.titulo1[0]);
            $("#slider-1-slide-1-layer-6").text(datosJson.info[0]);
            break;
        }
        case '2':{
            $("#img_slide").attr("src",datosJson.img[1]);
            $("#slider-1-slide-1-layer-4").text("");
            $("#slider-1-slide-1-layer-4").append(datosJson.titulo1[1]);
            $("#slider-1-slide-1-layer-6").text(datosJson.info[1]);
           
            break;
        }
        case '3':{
            $("#img_slide").attr("src",datosJson.img[2]);
            $("#slider-1-slide-1-layer-4").text("");
            $("#slider-1-slide-1-layer-4").append(datosJson.titulo1[2]);
            $("#slider-1-slide-1-layer-6").text(datosJson.info[2]);
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