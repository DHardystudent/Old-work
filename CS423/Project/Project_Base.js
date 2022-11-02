function init() {
    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();
    
    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // create a render and set the size
    var webGLRenderer = new THREE.WebGLRenderer();
    webGLRenderer.setClearColor(new THREE.Color(0x2FDED9, 1.0));
    webGLRenderer.setSize(window.innerWidth, window.innerHeight);
    webGLRenderer.shadowMapEnabled = true;
    
    
    
    
    
    
    
   
    
    // Base plane Hopefully green
    var planeGeometry = new THREE.PlaneGeometry(100, 100, 1, 1);
    var planeMaterial = new THREE.MeshBasicMaterial({color:0x0e9e13});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    scene.add(plane);
    
    // Base cube
    var cubeGeometry = new THREE.BoxGeometry(15,15,15);
    var cubeMaterial = new THREE.MeshBasicMaterial({color: 0x6C6C6C});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;
    scene.add(cube);
    
    //Need to tell Three.js the point from where we're viewing the scene
    camera.position.x = 70;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
    
    
    document.getElementById("WebGL-output").appendChild(webGLRenderer.domElement);
    render();
    
    
    
    // Other Functions
    function render() {
            stats.update();

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            webGLRenderer.render(scene, camera);
        }
        
        function initStats() {

            var stats = new Stats();
            stats.setMode(0); // 0: fps, 1: ms

            // Align top-left
            stats.domElement.style.position = 'absolute';
            stats.domElement.style.left = '0px';
            stats.domElement.style.top = '0px';

            document.getElementById("Stats-output").appendChild(stats.domElement);

            return stats;
        }
   
}
window.onload = init;