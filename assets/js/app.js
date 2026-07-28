/*====================================================
=            LANDING CONVOCATORIA 2026
====================================================*/

document.addEventListener("DOMContentLoaded", () => {

    navbarScroll();

    smoothScroll();

    scrollTopButton();

    revealAnimations();

    activeMenu();

});

/*====================================================
=            NAVBAR SCROLL
====================================================*/

function navbarScroll(){

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll",()=>{

        if(window.scrollY>60){

            navbar.classList.add("scrolled");

        }else{

            navbar.classList.remove("scrolled");

        }

    });

}

/*====================================================
=            SCROLL SUAVE
====================================================*/

function smoothScroll(){

    document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

        anchor.addEventListener("click",function(e){

            e.preventDefault();

            const destino=document.querySelector(this.getAttribute("href"));

            if(destino){

                destino.scrollIntoView({

                    behavior:"smooth",

                    block:"start"

                });

            }

        });

    });

}

/*====================================================
=            BOTON VOLVER ARRIBA
====================================================*/

function scrollTopButton(){

    const boton=document.createElement("a");

    boton.href="#inicio";

    boton.className="scroll-top";

    boton.innerHTML='<i class="bi bi-arrow-up"></i>';

    document.body.appendChild(boton);

    window.addEventListener("scroll",()=>{

        if(window.scrollY>400){

            boton.classList.add("show");

        }else{

            boton.classList.remove("show");

        }

    });

}

/*====================================================
=            ANIMACIONES
====================================================*/

function revealAnimations(){

    const elementos=document.querySelectorAll(

        "section,.card,.evento,.hero h1,.hero p,.hero-buttons"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.15

    });

    elementos.forEach(el=>{

        el.classList.add("fade-up");

        observer.observe(el);

    });

}

/*====================================================
=            MENU ACTIVO
====================================================*/

function activeMenu(){

    const sections=document.querySelectorAll("section");

    const navLinks=document.querySelectorAll(".nav-link");

    window.addEventListener("scroll",()=>{

        let current="";

        sections.forEach(section=>{

            const top=section.offsetTop-120;

            const height=section.clientHeight;

            if(pageYOffset>=top){

                current=section.getAttribute("id");

            }

        });

        navLinks.forEach(link=>{

            link.classList.remove("active");

            if(link.getAttribute("href")=="#"+current){

                link.classList.add("active");

            }

        });

    });

}

/*====================================================
=            EFECTO HERO
====================================================*/

const hero=document.querySelector(".hero");

window.addEventListener("mousemove",(e)=>{

    if(!hero) return;

    let x=e.clientX/window.innerWidth;

    let y=e.clientY/window.innerHeight;

    hero.style.backgroundPosition=

        `${50+x*4}% ${50+y*4}%`;

});

/*====================================================
=            CONTADOR
====================================================*/

function iniciarContadores(){

    const counters=document.querySelectorAll("[data-counter]");

    counters.forEach(counter=>{

        const objetivo=+counter.dataset.counter;

        let numero=0;

        const incremento=objetivo/120;

        const actualizar=()=>{

            numero+=incremento;

            if(numero<objetivo){

                counter.innerText=Math.ceil(numero);

                requestAnimationFrame(actualizar);

            }else{

                counter.innerText=objetivo;

            }

        };

        actualizar();

    });

}

/*====================================================
=            OBSERVER CONTADORES
====================================================*/

const contadorSection=document.querySelector(".estadisticas");

if(contadorSection){

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

iniciarContadores();

observer.disconnect();

}

});

});

observer.observe(contadorSection);

}

/*====================================================
=            EFECTO BOTONES
====================================================*/

document.querySelectorAll(".btn").forEach(btn=>{

btn.addEventListener("mouseenter",()=>{

btn.style.transform="translateY(-5px)";

});

btn.addEventListener("mouseleave",()=>{

btn.style.transform="translateY(0px)";

});

});

/*====================================================
=            LOADER
====================================================*/

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

loader.classList.add("hide");

setTimeout(()=>{

loader.remove();

},600);

}

});

/*====================================================
=            PRELOAD IMAGEN HERO
====================================================*/

const img=new Image();

img.src="assets/img/fondo.webp";

/*====================================================
=            FIN
====================================================*/