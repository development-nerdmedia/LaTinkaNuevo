AOS.init();
// var estadoform = sessionStorage.getItem("estado");
// const URLactual = window.location;

// if (window.performance.navigation.type == 1){
//     sessionStorage.setItem('estado', `none`);
//     location.href = URLactual;
// }



// if (estadoform == "none") {
//     document.querySelector(".pagethanksDesaprobada").classList.remove('open');
//     document.querySelector(".pagethanksAprobada").classList.remove('open');
//     document.querySelector(".pagethanksPreguntas").classList.remove('open');
//     document.querySelector("body").classList.remove("scrollhidden")
// }
// if (estadoform == "aprobada") {
//     document.querySelector(".pagethanksAprobada").classList.add('open');
//     document.querySelector("body").classList.add("scrollhidden")
// }
// if (estadoform == "desaprobada") {
//     document.querySelector(".pagethanksDesaprobada").classList.add('open');
//     document.querySelector("body").classList.add("scrollhidden")
// }
// if (estadoform == "preguntarecibida") {
//     document.querySelector(".pagethanksPreguntas").classList.add('open');
//     document.querySelector("body").classList.add("scrollhidden")
// }

document.addEventListener("click", function (e) {
    // if (document.querySelector("#msm.mostrar")) {
    //     $("#home form .enviar input").css('pointer-events','none')
    // }
})

var confettiSettings = { target: 'my-canvas' };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();


/* efecto de desplazamiento de los botones de menú */

const menuItems = document.querySelectorAll(
    'a[href^="#"]'
);

function getScrollTopByHref(element) {
    const id = element.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
    smoothScrollTo(0, to);
}

function scrollToIdOnClick(event) {
    event.preventDefault();
    const to = getScrollTopByHref(event.currentTarget) - 80;
    scrollToPosition(to);
}

menuItems.forEach((item) => {
    item.addEventListener("click", scrollToIdOnClick);
});
function smoothScrollTo(endX, endY, duration) {
    const startX = window.scrollX || window.pageXOffset;
    const startY = window.scrollY || window.pageYOffset;
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const startTime = new Date().getTime();

    duration = typeof duration !== "undefined" ? duration : 600;

    const easeInOutQuart = (time, from, distance, duration) => {
        if ((time /= duration / 2) < 1)
            return (distance / 2) * time * time * time * time + from;
        return (
            (-distance / 2) * ((time -= 2) * time * time * time - 2) + from
        );
    };

    const timer = setInterval(() => {
        const time = new Date().getTime() - startTime;
        const newX = easeInOutQuart(time, startX, distanceX, duration);
        const newY = easeInOutQuart(time, startY, distanceY, duration);
        if (time >= duration) {
            clearInterval(timer);
        }
        window.scroll(newX, newY);
    }, 1000 / 60);
}

/* END efecto de desplazamiento de los botones de menú */

if ($('.home').length > 0) {
    $(".home .part1 .img").stick_in_parent({
        offset_top: 180
    });
}


MyApp = {
    testimonios: {
        init: function () {
            var mediaqueryList = window.matchMedia("(max-width: 1201px)");
            if (mediaqueryList.matches) {
                if ($(".img-tienda").length > 0) {
                    $(".img-tienda").stick_in_parent({
                        offset_top: 180,
                        offset_right: 52,
                    });
                }

                if ($('.person-testimonios .cards .card').length > 0) {
                    listaItem = document.querySelectorAll(".person-testimonios .cards .card");
                    for (let i = 0; i < listaItem.length; i++) {
                        listaItem[i].setAttribute("data-aos", "fade-right")
                        listaItem[i].setAttribute("data-aos-once", "true")
                        listaItem[i].setAttribute("data-aos-offset", "570")
                    }
                }
            } else {
                if ($(".img-tienda").length > 0) {
                    $(".img-tienda").stick_in_parent({
                        offset_top: 180,
                    });
                }
            }
        }
    },
    preguntas: {
        init: function () {
            let collapsible = document.querySelectorAll(".faq-container");
            collapsible.forEach((element) => {
                element.addEventListener("click", (element) => {
                    if (!element.target.classList.contains('open')) {
                        for (let i = 0; i < collapsible.length; i++) {
                            collapsible[i].classList.remove("open");
                        }
                        element.target.classList.add("open");
                    } else {
                        element.target.classList.remove("open");
                    }
                });
            });
        }
    },
    contacto: {
        init: function () {

                        
            var formespacioinput = document.querySelectorAll('.home #wpcf7-f8-o1 .form-input');
            var formespacioselect = document.querySelectorAll('.home #wpcf7-f8-o1 .formSelect');
            var formespacioradio = document.querySelectorAll(".home #wpcf7-f8-o1 input[type='radio']");
            var formespaciocheckbox = document.querySelectorAll(".home #wpcf7-f8-o1 input[type='checkbox']");
            const terminos = document.querySelector(".home #wpcf7-f8-o1 #terminos");


            for (let i = 0; i < formespacioinput.length; i++) {
                formespacioinput[i].setAttribute("validate", "0");                
            }

            for (let i = 0; i < formespacioselect.length; i++) {
                formespacioselect[i].setAttribute("validate", "0");                
            }

            for (let i = 0; i < formespacioradio.length; i++) {
                formespacioradio[i].setAttribute("validate", "0");                
            }

            // for (let i = 0; i < formespaciocheckbox.length; i++) {
            //     formespaciocheckbox[i].setAttribute("validate", "0");                
            // }
 

            // document.getElementById("provincia").options[0].value = "";
            document.getElementById("provincia").options[0].setAttribute("value", "");
            // document.getElementById("distrito").options[0].value = "";
            document.getElementById("distrito").options[0].setAttribute("value", "");

            var valorArea = document.querySelector('#area');
            const thanksAprobada = document.getElementById('pagethanksAprobada');
            const thanksDesaprobada = document.getElementById('pagethanksDesaprobada');
            var thanks = document.querySelectorAll('.thanks');

            $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });
            var mensaje = document.getElementById('msm');
            const form = document.getElementById('wpcf7-f8-o1');
            

            form.addEventListener('focusin', (event) => {
                if (event.target.type === "radio" & event.target.name === "ubicacion" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="ubicacion"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
                if (event.target.type === "radio" & event.target.name === "tipoArea" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="tipoArea"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
                if (event.target.type === "radio" & event.target.name === "zona" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="zona"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
            });

            form.addEventListener('focusout', (event) => {
                if (event.target.type === "radio" & event.target.name === "ubicacion" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="ubicacion"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
                if (event.target.type === "radio" & event.target.name === "tipoArea" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="tipoArea"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
                if (event.target.type === "radio" & event.target.name === "zona" & event.target.checked == true) {
                    var elemento = document.querySelectorAll('input[name="zona"]')
                    for (var i = 0; i < elemento.length; i++) {
                        elemento[i].setAttribute("validate", "1");
                    }
                }
            });


            document.addEventListener("click", function (e) {
                if (e.target.closest(".home #wpcf7-f8-o1 input[type='submit']")) {
                    validarDatos(form, e);
                }
            })

            function validarDatos(form, e) {
                var dato = 0;
                var info = document.querySelectorAll("#wpcf7-f8-o1 [validate]");
                Array.from(info).forEach(element => {
                    if (element.value == '' || (element.checked == false & element.value == "on" & element.type == "checkbox")) {
                        dato++
                        // console.log('Entra 1');
                    }
                    if (element.type === "radio" & element.name === "tipoArea" & element.checked == false & element.attributes.validate.value === "0") {
                        dato++
                        // console.log('Entra 2');
                    }
                    if (element.type === "radio" & element.name === "ubicacion" & element.checked == false & element.attributes.validate.value === "0") {
                        dato++
                        // console.log('Entra 3');
                    }
                    if (element.type === "radio" & element.name === "zona" & element.checked == false & element.attributes.validate.value === "0") {
                        dato++
                        // console.log('Entra 3');
                    }
                });
                if (dato == 0) {
                    // mensaje.classList.add('mostrar');
                    // e.preventDefault(e)
                        // console.log('Entra 4');
                        if ($('#terminos').is(':checked')) {
                            if (document.querySelector("#msm.mostrar")) {
                                $("#spinner").attr("style", "display:inline-block;");
                                correodataLayer = document.querySelector('.wpcf7-email').value;
                                console.log(correodataLayer);
        
                                window.dataLayer = window.dataLayer || [];
                                dataLayer.push({
                                    'event': 'send_form',                           
                                    'eventcategory': 'alquilo_tu_local',                           
                                    'mail': correodataLayer,
                                });
        
                                if (valorArea.value <= 70 & valorArea.value >= 35) {
                                    estado = "aprobada";
                                } else {
                                    estado = "desaprobada";
                                }
        
                            }else{
                                mensaje.classList.add('mostrar');
                                e.preventDefault(e);
                            }
                        }

                    
                } else {
                        // console.log('Entra 5');
                    e.preventDefault(e);
                    // console.log(dato + 'falta');
                    mensaje.classList.remove('mostrar');
                }
            }

            $("#distrito").removeAttr("validate");
            $("#distrito").css('opacity','0.5')
            $('#distrito').prop('disabled', false);
            $('#distrito').css('pointer-events', 'none');
            document.querySelector("#distrito").classList.remove("formSelect");
            document.querySelector("#distrito").classList.remove("wpcf7-validates-as-required");
            $("#provincia").change(function(){
                if ($("#provincia").val() !== 'Lima') {
                    $("#distrito").removeAttr("validate");
                    $("#distrito").css('opacity','0.5')
                    $('#distrito').prop('disabled', false);
                    $('#distrito').css('pointer-events', 'none');
                    document.querySelector("#distrito").classList.remove("formSelect");
                    document.getElementById("distrito").selectedIndex = 0;
                    document.querySelector("#distrito").classList.remove("wpcf7-validates-as-required");
                }else{                    
                    document.querySelector("#distrito").classList.add("wpcf7-validates-as-required");
                    $("#distrito").attr("validate","0");
                    $("#distrito").css('opacity','1');
                    $('#distrito').css('pointer-events', 'auto');
                    document.querySelector("#distrito").classList.add("formSelect");
                }
            });

            function validateInput(e) {
                for (let y = 0; y < formespacioinput.length; y++) {
                    if (!formespacioinput[y].value) {
                        formespacioinput[y].classList.add("error");
                        // e.preventDefault();
                    } else {
                        formespacioinput[y].classList.remove("error");
                    }
                }
            }

            $('#provincia').on('change', () => {

                document.querySelector("#provincia").setAttribute("validate2", "1");

            });

            $('#distrito').on('change', () => {

                document.querySelector("#distrito").setAttribute("validate2", "1");

            });

            function validateSelect(e) {              
                var info = document.querySelectorAll("form [validate2]");                  
                var formespacioselect = document.querySelectorAll('.home #wpcf7-f8-o1 select.formSelect');
                for (let y = 0; y < formespacioselect.length; y++) {
                    formespacioselect[y].classList.add("error");
                    if (formespacioselect[y].attributes.validate2) {
                        if (formespacioselect[y].attributes.validate2.value === "1") {
                            formespacioselect[y].classList.remove("error");
                        }
                    }       
                }
                // if (document.getElementById("provincia").value == "Provincia:") {
                //     e.preventDefault();
                // }
                // if (document.getElementById("distrito").value == "Provincia:") {
                //     e.preventDefault();
                // }
            }

            function validatecheckbox(e) {
                if (!document.querySelector('input[name="tipoArea"]:checked')) {
                    document.querySelector(".texto-check-area").classList.add("error");
                    // e.preventDefault();
                } else {
                    document.querySelector(".texto-check-area").classList.remove("error");
                }
                if (!document.querySelector('input[name="ubicacion"]:checked')) {
                    document.querySelector(".texto-check-ubi").classList.add("error");
                    // e.preventDefault();
                } else {
                    document.querySelector(".texto-check-ubi").classList.remove("error");
                }
                if (!document.querySelector('input[name="zona"]:checked')) {
                    document.querySelector(".texto-check-zona").classList.add("error");
                    // e.preventDefault();
                } else {
                    document.querySelector(".texto-check-zona").classList.remove("error");
                }
            }

            function validatePoliticas(e) {
                if ($('#terminos').is(':checked')) {
                    document.querySelector(".checkbox-box").classList.remove("error");
                    // document.querySelector("#terminos").setAttribute("validate", "1"); 
                } else {                    
                    console.log("esta desactivado");
                    e.preventDefault();
                    $('#home form .enviar input').removeAttr('disabled'); 
                    document.querySelector(".checkbox-box").classList.add("error");
                }
            }

            var estado = "neutro";
            var correodataLayer = "";


            document.addEventListener("click", function (e) {
                var formespacioselect = document.querySelectorAll('.home #wpcf7-f8-o1 select.formSelect');
                if (e.target.closest(".home #wpcf7-f8-o1 select")) {
                    formespacioselect.forEach(function (shinyItem2) {
                        shinyItem2.parentElement.classList.remove("active");
                    })
                    e.target.parentElement.classList.add("active");
                } else {
                    formespacioselect.forEach(function (shinyItem2) {
                        shinyItem2.parentElement.classList.remove("active");
                    });
                }
                if (e.target.closest(".thanks .btn")) {
                    for (let i = 0; i < thanks.length; i++) {
                        thanks[i].classList.remove("open");
                        document.querySelector("body").classList.remove("scrollhidden")
                        // sessionStorage.setItem('estado', `none`);    
                        mensaje.classList.remove('mostrar');                        
                    }
                    
                    // document.querySelector("section.home form").classList.remove("sent")
                    // document.querySelector("section.home form").classList.add("init")
                    // document.querySelector("section.home form").setAttribute("data-status", "init");
                    $("#spinner").attr("style", "display:none;");
                    $('#provincia').removeAttr('validate2');  
                    setTimeout(function() {
                        $('#home form .enviar input').removeAttr('disabled'); 
                        $("#home form .enviar input").css('pointer-events','auto')
                    }, 500);
                    document.querySelector("section.home form").reset();


                }
                if (e.target.closest(".home #wpcf7-f8-o1 input[type='submit']")) {
                    validateInput(e);
                    validateSelect(e);
                    validatecheckbox(e);
                    validatePoliticas(e);
                    // if (document.querySelector("#msm.mostrar")) {
                        // if (valorArea.value <= 70 & valorArea.value >= 30) {
                        //     console.log("Aprobada");
                        //     // sessionStorage.setItem('estado', `aprobada`);
                            // document.querySelector('.home #wpcf7-f8-o1').submit();

                        //     estado = "aprobada";
                        // } else {
                        //     console.log("Desaprobada");
                        //     // sessionStorage.setItem('estado', `desaprobada`);
                        //     // document.querySelector('.home form').submit();
                        //     estado = "desaprobada";
                        // }
                    // }
                }                

                document.addEventListener('wpcf7mailsent', function(event) {        
                    if ( event.detail.unitTag === "wpcf7-f8-o1") {
                        if (estado == "aprobada") {
                            thanksAprobada.classList.add("open")                    
                            document.querySelector("body").classList.add("scrollhidden")
                            mensaje.classList.remove('mostrar');
                        }
                        if (estado == "desaprobada") {
                            thanksDesaprobada.classList.add("open")                    
                            document.querySelector("body").classList.add("scrollhidden")
                            mensaje.classList.remove('mostrar');
                        }     
                    }
                }, false);
            })
        
        }
    },
    inputTarjeta: {
        init: function () {
            var formespacioinput2 = document.querySelectorAll(".tarjeta-preg #wpcf7-f23-o2 input[type='text']");
            const thanksPreguntas = document.getElementById('pagethanksPreguntas');

            function validateInput2(e) {
                for (let y = 0; y < formespacioinput2.length; y++) {
                    if (!formespacioinput2[y].value) {
                        formespacioinput2[y].classList.add("error");
                    } else {
                        formespacioinput2[y].classList.remove("error");
                    }
                }
            }

            document.addEventListener("click", function (e) {
                if (e.target.closest(".tarjeta-preg #wpcf7-f23-o2 input[type='submit']")) {
                    validateInput2(e)
                }
                if (e.target.closest(".pagethanksPreguntas .btn")) {
                    document.querySelector(".pagethanksPreguntas").classList.remove("open");
                    document.querySelector("body").classList.remove("scrollhidden")
                }
            })

            document.addEventListener('wpcf7mailsent', function(event) {  
                if ( event.detail.unitTag === "wpcf7-f23-o2") {
                    console.log("sale popup preguntas");
                    thanksPreguntas.classList.add("open")                    
                    document.querySelector("body").classList.add("scrollhidden")
                }
            }, false);
        }
    },
    menupage: {
        init: function () {
            var enlacesMenu = document.querySelectorAll('.menupage .content ul li a');

            window.onscroll = function () {
                var scroll = document.documentElement.scrollTop;
                if (scroll <= 0) {
                    enlacesMenu.forEach((enlace) => enlace.classList.remove('select'));
                }
            }

            enlacesMenu.forEach((elemento) => {
                elemento.addEventListener('click', (evento) => {
                    enlacesMenu.forEach((enlace) => enlace.classList.remove('select'));
                    evento.target.classList.add('select');
                })
            })

            document.addEventListener("click", function (e) {
                if (e.target.closest("header nav .navigation ul li.btmmenumovil")) {
                    document.querySelector(".menupage").classList.add("open")
                    document.querySelector("body").classList.add("scrollhidden")
                }
                if (e.target.closest(".menupage .top img") || e.target.closest(".menupage .content ul li a")) {
                    document.querySelector(".menupage").classList.remove("open")
                    document.querySelector("body").classList.remove("scrollhidden")
                }
            })

            if (scrollTop = 0) {
                enlacesMenu.forEach((enlace) => enlace.classList.remove('select'));
            }
        }
    }
}


if ($('.tarjeta-preg form').length > 0) {
    MyApp.inputTarjeta.init();
}

if ($('.testimonios').length > 0) {
    MyApp.testimonios.init();
}

if ($('.preguntas').length > 0) {
    MyApp.preguntas.init();
}

if ($('.home form').length > 0) {
    MyApp.contacto.init();
}

if ($('.menupage').length > 0) {
    MyApp.menupage.init();
}

