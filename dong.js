var tiempo = 60000;
var segundo = 4000;
var nivel = 1;
// cambios de  nivel
setInterval(function(){
  tiempo -= 1000;
  document.querySelector('#nivel').setAttribute('value', "Level "+nivel);
  document.querySelector('#time').setAttribute('value', tiempo/1000 + " secund");
  if(tiempo === 0){
    if(nivel === 3){
      location.href='gamehover.html';
    }
    nivel +=1;
    segundo -= 1000;
    tiempo = 60000;  
  }
  
  console.log("tiempo "+ tiempo);
  console.log("Mostrar "+ segundo); 

},1000);

AFRAME.registerComponent("generator", {
  init: function () {
    var sceneEl = this.el;

    setInterval(function () {
      var obj = document.createElement("a-entity");
      var xpos = entreNumber(-4, 4);
      //var dur = Math.floor(Math.random() * (10000 - 15000 + 1) + 10000);
      var scala = entreNumber(3, 7);
      obj.setAttribute("gltf-model", "#robot");
      obj.setAttribute("position", { x: xpos, y: 0.01, z: -10 });
      //obj.setAttribute('material', {color: 'blue'});
      obj.setAttribute("animation", {

        property: "position",
        to: { x: xpos, y: 0.001, z: 100 },
        dur: entreNumber(8000/nivel, 16000/nivel),
      });
      obj.setAttribute("scale", '0.'+ scala +' 0.'+ scala+' 0.'+scala);
      obj.setAttribute('shootable', '');
      obj.setAttribute('sound', 'src: #carga; volume:20; autoplay: true');
      
      obj.setAttribute('material', 'shader:phong; reflectivity: 0.9; shininess: 30;');
      obj.setAttribute("animation-mixer", "clip:RobotArmature|Robot_Running");
      obj.setAttribute("class", "collidable");

      obj.setAttribute("attack-button", "targetEntity: #robot");
      sceneEl.appendChild(obj);
    }, segundo);

    setInterval(function () {
      var obj2 = document.createElement("a-entity");
      var xpos = entreNumber(-20, 20);
      var scala = entreNumber(1, 9);

      obj2.setAttribute("gltf-model", "#fenix");
      obj2.setAttribute("position", { x:  xpos, y: entreNumber(10, 60), z: -100 });
      //obj.setAttribute('material', {color: 'blue'});
      obj2.setAttribute("scale", '0.00'+ scala +' 0.00'+ scala+' 0.00'+scala);
      obj2.setAttribute("rotation", entreNumber(-110, 110) + " 90 0");
      obj2.setAttribute("animation", {
        property: "position",
        to: { x: xpos, y: 3, z: 100 },
        dur: entreNumber(8000/nivel, 15000/nivel),
      });
      obj2.setAttribute('shootable_f', '');

      obj2.setAttribute("class", "collidable_f");
      obj2.setAttribute(
        "animation-mixer",
        "clip:Take 001; loop:true; timeScale: 1; crossFadeDuration: 1"
      );
      sceneEl.appendChild(obj2);

    }, segundo+entreNumber(100, 2000));
  },
});
// seleccion de números
function entreNumber(a,b){
  var posibilidades = b - a;
  var pos = Math.random() * posibilidades;
  pos = Math.floor(pos);
  return parseInt(a) + pos;
}


var score = 0;
AFRAME.registerComponent('shootable', {

    init: function () {
      var seleccionado = this.el;
      
        seleccionado.addEventListener('click', () => {
          //seleccionado.removeChild(this.el)
          //var seleccion = document.querySelector('a-text').value;
            seleccionado.setAttribute('sound', 'src: #roto; volume:30; autoplay: true');
            seleccionado.setAttribute("animation-mixer", "clip:RobotArmature|Robot_Death");

            seleccionado.removeAttribute('animation');
            eliminar(seleccionado);
            
            score += 1;
            document.querySelector('a-text').setAttribute('value', score)
        })
    }
});
AFRAME.registerComponent('shootable_f', {

    init: function () {
      var seleccionado = this.el;
      
        seleccionado.addEventListener('click', () => {
          //seleccionado.removeChild(this.el)
          //var seleccion = document.querySelector('a-text').value;
          seleccionado.setAttribute('sound', 'src: #sonidofenix; volume:30; autoplay: true');
            seleccionado.setAttribute("animation-mixer", "clip:RobotArmature|Robot_Death");

            seleccionado.removeAttribute('animation');
            eliminar(seleccionado);
            score += 2;
            document.querySelector('a-text').setAttribute('value', score)
        })
    }
});

// eliminar objeto
function eliminar(selecc){
  if(selecc == null){
    console.log("Nulo ")
  }else{
    console.log("remove "+ selecc.parentNode.this)

    setInterval(function () {
      selecc.parentNode.removeChild(selecc)
    }, 900);
  }
  
}
// AFRAME.registerComponent('thumbstick-logging', {
//   init: function () {
//     this.el.addEventListener('thumbstickmoved', this.logThumbstick);
//   },
//   logThumbstick: function (evt) {
//     // Aquí obtienes las entidades con la clase 'deletable'
//     var deletableEntities = document.querySelectorAll('.deletable');

//     // Puedes iterar sobre ellas y eliminar las que estén seleccionadas
//     deletableEntities.forEach(function (entity) {
//       // Supongamos que el evento thumbstickmoved tiene un atributo 'selected'
//       if (entity.getAttribute('selected')) {
//         entity.parentNode.removeChild(entity); // Eliminar la entidad
//       }
//     });
//   }
// });