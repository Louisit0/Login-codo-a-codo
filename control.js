document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert('No has escrito nada en el usuario');
      return;
    }
    if(usuario !== "@"){
        alert('Falta el @ en Usuario');
        return;
    }
    var clave = document.getElementById('clave').value;
    if(clave.length == 0){
        alert('No has escrito nada en clave');
        return;
    }
    if (clave.length < 6) {
      alert('La clave no es válida');
      return;
    }
    this.submit();
  }