
  AFRAME.registerComponent('button-events-left', {
    init: function () {
      this.el.addEventListener('thumbstickmoved', this.onThumbstickMoved.bind(this));
      this.el.addEventListener('thumbstickdown', this.onThumbstickDown.bind(this));
      // Agrega más eventos según los botones que desees controlar
    },
    onThumbstickMoved: function (event) {
      // Lógica para manejar el movimiento del stick izquierdo
      // event.detail.x y event.detail.y te darán las coordenadas del movimiento
    },
    onThumbstickDown: function (event) {
      // Lógica para manejar el clic del stick izquierdo
    }
    // Agrega más funciones para otros botones si es necesario
  });

  AFRAME.registerComponent('button-events-right', {
    init: function () {
      this.el.addEventListener('thumbstickmoved', this.onThumbstickMoved.bind(this));
      this.el.addEventListener('thumbstickdown', this.onThumbstickDown.bind(this));
      // Agrega más eventos según los botones que desees controlar
    },
    onThumbstickMoved: function (event) {
      // Lógica para manejar el movimiento del stick derecho
      // event.detail.x y event.detail.y te darán las coordenadas del movimiento
    },
    onThumbstickDown: function (event) {
      // Lógica para manejar el clic del stick derecho
    }
    // Agrega más funciones para otros botones si es necesario
  });