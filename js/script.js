/* =============================================
   RESERVA → WHATSAPP
   ============================================= */

   const formulario = document.querySelector("#contato form");

   formulario.addEventListener("submit", function (event) {
       event.preventDefault();
   
       const nome = document.querySelector("#nome").value;
       const data = document.querySelector("#data").value;
       const pessoas = document.querySelector("#pessoas").value;
   
       const numeroWhatsApp = "5598981337419";
   
       const mensagem = `Olá! Meu nome é ${nome}. Gostaria de fazer uma reserva para o dia ${data}, para ${pessoas} pessoa(s).`;
   
       const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
   
       window.open(url, "_blank");
   });
   
   
   /* =============================================
      GALERIA / CARROSSEL
      ============================================= */
   
   const galeria = document.querySelector(".galeria");
   const fotos = document.querySelectorAll(".galeria figure");
   
   const botaoAnterior = document.querySelector(".anterior");
   const botaoProxima = document.querySelector(".proxima");
   
   let indice = 0;
   
   
   /* Mostra a foto atual */
   
   function mostrarFoto() {
       galeria.style.transform = `translateX(-${indice * 100}%)`;
   }
   
   
   /* Próxima foto */
   
   botaoProxima.addEventListener("click", () => {
       indice++;
   
       if (indice >= fotos.length) {
           indice = 0;
       }
   
       mostrarFoto();
   });
   
   
   /* Foto anterior */
   
   botaoAnterior.addEventListener("click", () => {
       indice--;
   
       if (indice < 0) {
           indice = fotos.length - 1;
       }
   
       mostrarFoto();
   });
   
   
   /* Carrossel automático */
   
   setInterval(() => {
       indice++;
   
       if (indice >= fotos.length) {
           indice = 0;
       }
   
       mostrarFoto();
   }, 4000);
   
   
   /* =============================================
      MENU MOBILE
      ============================================= */
   
   const menuMobile = document.querySelector(".menu-mobile");
   const nav = document.querySelector("header nav");
   const linksMenu = document.querySelectorAll("header nav a");
   
   
   /* Abrir / fechar menu */
   
   menuMobile.addEventListener("click", () => {
       const menuAberto = nav.classList.toggle("menu-aberto");
   
       menuMobile.setAttribute("aria-expanded", menuAberto);
   
       if (menuAberto) {
           menuMobile.textContent = "✕";
           menuMobile.setAttribute("aria-label", "Fechar menu");
       } else {
           menuMobile.textContent = "☰";
           menuMobile.setAttribute("aria-label", "Abrir menu");
       }
   });
   
   
   /* Fechar menu ao clicar em um link */
   
   linksMenu.forEach((link) => {
       link.addEventListener("click", () => {
           nav.classList.remove("menu-aberto");
   
           menuMobile.textContent = "☰";
   
           menuMobile.setAttribute("aria-expanded", "false");
   
           menuMobile.setAttribute("aria-label", "Abrir menu");
       });
   });





