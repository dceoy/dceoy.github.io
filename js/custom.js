//  Flat Surface Shader [FSS]
var container = document.getElementById('container');
var renderer = new FSS.SVGRenderer();
var scene = new FSS.Scene();
var light = new FSS.Light('#040832', '#bb55ff');
var geometry = new FSS.Plane(3000, 2000, 15, 10);
var material = new FSS.Material('#ffffff', '#ffffff');
var mesh = new FSS.Mesh(geometry, material);
var now, start = Date.now();

function initialise() {
  scene.add(mesh);
  scene.add(light);
  container.appendChild(renderer.element);
  window.addEventListener('resize', resize);
}

function resize() {
  renderer.setSize(container.offsetWidth, container.scrollHeight);
}

function animate() {
  now = Date.now() - start;
  light.setPosition(300*Math.sin(now*0.0002), 200*Math.cos(now*0.0001), 60);
  renderer.render(scene);
  requestAnimationFrame(animate);
}

initialise();
resize();
animate();

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-27914660-1']);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
