//
// File:
// Author:
// Purpose:
//
function init() {

    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();
	
    // create a camera, which defines where we're looking at.
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.x = 30;
    camera.position.y = 20;
    camera.position.z = 0;

    // create a render and set the size
    var renderer = new THREE.WebGLRenderer();

    renderer.setClearColor(new THREE.Color(0xEEEEEE, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(180, 180);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);


    // rotate and position the plane
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;

    // add the plane to the scene
    scene.add(plane);

    // Room 
    var cubeGeometry = new THREE.BoxGeometry(1,100,100);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x979A9A});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 50;
    cube.position.y = 25;
    cube.position.z = 0;
    scene.add(cube);
	
    var cubeGeometry = new THREE.BoxGeometry(100,100,1);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x979A9A});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 0;
    cube.position.y = 25;
    cube.position.z = 50;
    scene.add(cube);
	
    var cubeGeometry = new THREE.BoxGeometry(1,100,100);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x979A9A});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = -50;
    cube.position.y = 25;
    cube.position.z = 0;
    scene.add(cube);

    var cubeGeometry = new THREE.BoxGeometry(100,100,1);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0x979A9A});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 0;
    cube.position.y = 25;
    cube.position.z = -50;
    scene.add(cube);
	
	
	
	// Pedestal cube
    var cubeGeometry = new THREE.BoxGeometry(20,20,20);
	var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xF4F6F7});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 0;
    cube.position.y = 10;
    cube.position.z = 0;
    scene.add(cube);
	
	// Item Sphere
    var sphereGeometry = new THREE.SphereGeometry(5, 20, 20);
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 25;
    sphere.position.z = 0;
    scene.add(sphere);


    var directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(-20, 40, 60);
    scene.add(directionalLight);


    // add subtle ambient lighting
    var ambientLight = new THREE.AmbientLight(0x292929);
    scene.add(ambientLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // call the render function
    var step = 0;

    // Insert Lab03 code here.
	// New Controls
	var camSpot = 1;
	var controls = new function () {
		this.perspective = "Front";
		this.switchCamera = function () {
			if (camSpot == 0) {
				camSpot = 1;
				camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
				camera.position.x = 30;
				camera.position.y = 20;
				camera.position.z = 0;
				camera.lookAt(0, 25, 0);
				this.perspective = "Front";
			} else if (camSpot == 1) {
				camSpot = 2;
				camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
				camera.position.x = 0;
				camera.position.y = 20;
				camera.position.z = 30;
				camera.lookAt(0, 25, 0);
				this.perspective = "Left";
			} else if (camSpot == 2) {
				camSpot = 3;
				camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
				camera.position.x = -30;
				camera.position.y = 20;
				camera.position.z = 0;
				camera.lookAt(0, 25, 0);
				this.perspective = "Back";
			} else {
				camSpot = 0;
				camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
				camera.position.x = 0;
				camera.position.y = 20;
				camera.position.z = -30;
				camera.lookAt(0, 25, 0);
				this.perspective = "Right";
			}
			
			
			
			
			
			
		};
	};
	
	var gui = new dat.GUI();
	gui.add(controls, 'switchCamera');
	gui.add(controls, 'perspective').listen();
    
    // make sure that for the first time, the
    // camera is looking at the scene
    camera.lookAt(0, 25, 0);
    render();

    function render() {

        stats.update();
        // render using requestAnimationFrame
        requestAnimationFrame(render);
        renderer.render(scene, camera);
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

window.onload = init

