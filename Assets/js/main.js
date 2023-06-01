document.querySelector('.formulario form').addEventListener('submit', function(e){
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    alert('No momeno os avisos por email estão desativados! Entre na comunidade para receber os avisos!');
});