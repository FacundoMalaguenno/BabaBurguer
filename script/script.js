//funcion para enviar mensaje a whatsapp
 document.getElementById('pedido').addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const pedido = document.getElementById('pedidoB').value;
    const direccion = document.getElementById('direccion').value;
    const metodoPago = document.getElementById('metodoPago').value;

    const mensaje = `Hola, soy ${nombre}. Quiero ${pedido}.
direccion: ${direccion}.
Pago en ${metodoPago}.
Gracias!`;
    const numero = "+5492262318085";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  });