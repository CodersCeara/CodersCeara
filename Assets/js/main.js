document.querySelector('.formulario form').addEventListener('submit', function(e){
    e.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
    alert('No momento os avisos por email estão desativados! Entre na comunidade para receber os avisos!');
});