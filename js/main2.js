AOS.init();
var estadoform = sessionStorage.getItem("estado");
const URLactual = window.location;

if (window.performance.navigation.type == 1){
    sessionStorage.setItem('estado', `none`);
    location.href = URLactual;
}



if (estadoform == "none") {
    document.querySelector(".pagethanksDesaprobada").classList.remove('open');
    document.querySelector(".pagethanksAprobada").classList.remove('open');
    document.querySelector(".pagethanksPreguntas").classList.remove('open');
    document.querySelector("body").classList.remove("scrollhidden")
}
if (estadoform == "aprobada") {
    document.querySelector(".pagethanksAprobada").classList.add('open');
    document.querySelector("body").classList.add("scrollhidden")
}
if (estadoform == "desaprobada") {
    document.querySelector(".pagethanksDesaprobada").classList.add('open');
    document.querySelector("body").classList.add("scrollhidden")
}
if (estadoform == "preguntarecibida") {
    document.querySelector(".pagethanksPreguntas").classList.add('open');
    document.querySelector("body").classList.add("scrollhidden")
}



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
            var formespacioinput = document.querySelectorAll('.home .form-input');
            var valorArea = document.querySelector('#area');
            const inputUbicacion = document.getElementsByName('ubicacion');
            const thanksAprobada = document.getElementById('pagethanksAprobada');
            const thanksDesaprobada = document.getElementById('pagethanksDesaprobada');
            var thanks = document.querySelectorAll('.thanks');

            $(document).on("wheel", "input[type=number]", function (e) { $(this).blur(); });
            var mensaje = document.getElementById('msm');
            const form = document.getElementById('form');

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
                if (e.target.closest(".home form input[type='submit']")) {
                    validarDatos(form, e);
                }
            })
            
            function validarDatos(form, e) {
                var dato = 0;
                var info = document.querySelectorAll("#form [validate]");
                Array.from(info).forEach(element => {
                    if (element.value == '' || (element.checked == false & element.value == "on" & element.type == "checkbox")) {
                        dato++
                    }
                    if (element.type === "radio" & element.name === "tipoArea" & element.checked == false & element.attributes.validate.value === "0") {
                        dato++
                    }
                    if (element.type === "radio" & element.name === "ubicacion" & element.checked == false & element.attributes.validate.value === "0") {

                        dato++
                    }
                    if (element.type === "radio" & element.name === "zona" & element.checked == false & element.attributes.validate.value === "0") {
                        dato++
                    }
                });
                if (dato == 0) {
                    mensaje.classList.add('mostrar');
                    e.preventDefault(e)

                } else {
                    console.log(dato + 'falta');
                    mensaje.classList.remove('mostrar');
                }
            }

            $("#distrito").removeAttr("validate");
            $("#distrito").css('opacity','0.5')
            $('#distrito').prop('disabled', false);
            $('#distrito').css('pointer-events', 'none');
            document.querySelector("#distrito").classList.remove("formSelect");

            $("#provincia").change(function(){
                if ($("#provincia").val() !== 'Lima') {
                    $("#distrito").removeAttr("validate");
                    $("#distrito").css('opacity','0.5')
                    $('#distrito').prop('disabled', false);
                    $('#distrito').css('pointer-events', 'none');
                    document.querySelector("#distrito").classList.remove("formSelect");
                    document.getElementById("distrito").selectedIndex = 0;
                }else{
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
                        e.preventDefault();
                    } else {
                        formespacioinput[y].classList.remove("error");
                    }
                }
            }

            function validateSelect(e) {                
            var formespacioselect = document.querySelectorAll('.home form select.formSelect');
                for (let y = 0; y < formespacioselect.length; y++) {
                    if (formespacioselect[y].value == "") {
                        formespacioselect[y].classList.add("error");
                        e.preventDefault();
                    } else {
                        formespacioselect[y].classList.remove("error");
                    }
                }
            }

            function validatecheckbox(e) {
                if (!document.querySelector('input[name="tipoArea"]:checked')) {
                    document.querySelector(".texto-check-area").classList.add("error");
                    e.preventDefault();
                } else {
                    document.querySelector(".texto-check-area").classList.remove("error");
                }
                if (!document.querySelector('input[name="ubicacion"]:checked')) {
                    document.querySelector(".texto-check-ubi").classList.add("error");
                    e.preventDefault();
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
                } else {
                    document.querySelector(".checkbox-box").classList.add("error");
                }
            }

            document.addEventListener("click", function (e) {
                var formespacioselect = document.querySelectorAll('.home form select.formSelect');
                if (e.target.closest(".home form select")) {
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
                        sessionStorage.setItem('estado', `none`);
                    }
                }
                if (e.target.closest(".home form input[type='submit']")) {
                    validateInput(e);
                    validateSelect(e);
                    validatecheckbox(e);
                    validatePoliticas(e);
                    if (document.querySelector("#msm.mostrar")) {                        
                        var estadoUbicacion = '';
                        if (inputUbicacion[0].checked) {
                            estadoUbicacion = "si"
                        }else{
                            estadoUbicacion = "no"
                        }

                        if ((valorArea.value <= 100 & valorArea.value >= 30) && (estadoUbicacion == "si")) {
                            sessionStorage.setItem('estado', `aprobada`);
                            document.querySelector('.home form').submit();
                        } else {
                            sessionStorage.setItem('estado', `desaprobada`);
                            document.querySelector('.home form').submit();
                        }
                    }
                }
            })
        }
    },
    inputTarjeta: {
        init: function () {
            var formespacioinput2 = document.querySelectorAll(".tarjeta-preg input[type='text']");
            const thanksPreguntas = document.getElementById('pagethanksPreguntas');

            function validateInput2(e) {
                for (let y = 0; y < formespacioinput2.length; y++) {
                    if (!formespacioinput2[y].value) {
                        formespacioinput2[y].classList.add("error");
                        e.preventDefault();
                    } else {
                        sessionStorage.setItem('estado', `preguntarecibida`);
                        document.querySelector('.home form').submit();
                    }
                }
            }

            document.addEventListener("click", function (e) {
                if (e.target.closest(".tarjeta-preg form input[type='submit']")) {
                    validateInput2(e)
                }
				if (e.target.closest(".pagethanksPreguntas .btn")) {
                    document.querySelector(".pagethanksPreguntas").classList.remove("open");
                    sessionStorage.setItem('estado', `none`);
                    document.querySelector(".pagethanksPreguntas").classList.remove("scrollhidden")
                }
            })
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
    },

    /* nuevo */
    sliderTiendas : {
        init: function () {
            var cantDiapo = document.querySelectorAll(".swiper-slide.itemTienda");
            var totalDiapo = document.querySelector(".sliderTiendas .datos span.total");
            var hoverDiapo = document.querySelector(".sliderTiendas .datos span.hover");
            var popupTienda = document.querySelector("section.popSlider")
            var popupTiendaTitle = document.querySelector("section.popSlider .title h2")
            var popupTiendaIframe = document.querySelector("section.popSlider .video")

            totalDiapo.innerHTML = cantDiapo.length

            var swiper = new Swiper(".sliderTiendas", {
                slidesPerView: 2.5,
                spaceBetween: 60,
                centeredSlides: true,
                autoplay: {
                    delay: 5000,
                },
                loop: true,
                pagination: {
                  el: ".swiper-pagination",
                  type: "progressbar",
                }
            });

            var cantDiapo2 = document.querySelectorAll(".swiper-slide.itemTienda");

            for (let i = 0; i < cantDiapo2.length; i++) {
                cantDiapo2[i].addEventListener('mouseover', function() {
                    var valor = this.getAttribute("data-swiper-slide-index");
                    var valorInt = parseInt(valor);
                    hoverDiapo.innerHTML = valorInt + 1
                });
                cantDiapo2[i].addEventListener('mouseout', function() {
                    hoverDiapo.innerHTML = 0
                });
            }

            function mostratVideo(e) {
                var nameTitle = e.target.querySelector(".text p").textContent;
                var nameURL = e.target.querySelector(".url p").textContent;
                popupTiendaTitle.innerHTML = nameTitle
                popupTiendaIframe.innerHTML = `<iframe src="${nameURL}" title="YouTube video player" style="width:75%;height:33vw;" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen=""></iframe>`
                popupTienda.classList.add("open")
            }

            document.addEventListener("click", function (e) {
                if (e.target.closest("section.popSlider .title button")) {
                    popupTienda.classList.toggle("open")
                }
                if (e.target.closest(".swiper-slide.itemTienda")) {
                    mostratVideo(e)
                }
            })



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

/* nuevo */

if ($('.sectionSliderTiendas').length > 0) {
    MyApp.sliderTiendas.init();
}

