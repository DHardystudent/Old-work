var  control;
function init() {

    var stats = initStats();

    // create a scene, that will hold all our elements such as objects, cameras and lights.
    var scene = new THREE.Scene();
	scene.background = new THREE.Color( 0xff0000 );

    // create a camera, which defines where we're looking at.
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
	
	camera.position.x = -25;
    camera.position.y = 30;
    camera.position.z = 25;
    camera.lookAt(new THREE.Vector3(0, 20, 0));
	
	



    // create a render and set the size
	
    var renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setClearColor(new THREE.Color(0xC81D1D, 1.0));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
	document.body.appendChild(renderer.domElement);
	
	//controls
	
	control = new THREE.OrbitControls(camera, renderer.domElement);

	// Take what is needed from here



    // create the ground plane (Grass Plain)	
    var plane = createMesh(new THREE.PlaneGeometry(200, 200, 1, 1), "grass.jpg");
	plane.rotation.x = -0.5 * Math.PI;
	plane.position.x = 0;
    plane.position.y = 0;
    plane.position.z = 0;
    plane.receiveShadow = true;

    // add the plane to the scene
    scene.add(plane);
	
	// Sky sphere
	var sky = createSky(new THREE.SphereGeometry(100, 50, 50), "sky.jpg");
	scene.add(sky);
	// Default position for sphere (testing water
	
	
	// Windmill parts
	
	//var polyhedron = createMesh(new THREE.IcosahedronGeometry(5, 0), "metal-rust.jpg");
	
	// top
	var millTop = createMesh(new THREE.SphereGeometry(5, 5, 10), "planks.jpg");

	millTop.rotation.y = 1.567;
	millTop.position.x = 0;
    millTop.position.y = 17;
    millTop.position.z = 0;
	scene.add(millTop);
	
	//Mid
	var millMid = createMesh(new THREE.CylinderGeometry(5, 10, 21, 5), "brick.jpg");
	millMid.position.x = 0;
    millMid.position.y = 7;
    millMid.position.z = 0;
	scene.add(millMid);
	
	//Base
	var base = createMesh(new THREE.BoxGeometry(20, 2, 20), "stone.jpg");
	base.position.x = 0;
    base.position.y = 1;
    base.position.z = 0;
	scene.add(base);
	
	// Placeholder blades
	var rotar = createMesh(new THREE.BoxGeometry(1, 1, 6), "planks.jpg");
	rotar.position.x = 0;
    rotar.position.y = 18;
    rotar.position.z = 6.5;
	scene.add(rotar);
	
	var blade1 = createBlade(new THREE.BoxGeometry(5, 10, 1), "Blade.png");

	blade1.position.x = 0;
	blade1.position.y = 12.5;
    blade1.position.z = 9;
	blade1.rotation.z = Math.PI;
	scene.add(blade1);
	
	var blade2 = createBlade(new THREE.BoxGeometry(5, 10, 1), "Blade.png");
	blade2.position.x = 0;
	blade2.position.y = 23.5;
    blade2.position.z = 9;
	scene.add(blade2);
	
    var blade3 = createBlade(new THREE.BoxGeometry(5, 10, 1), "Blade.png");
	blade3.position.x = 5.5;
	blade3.position.y = 18;
    blade3.position.z = 9;
	blade3.rotation.z = 3*Math.PI/2;
	scene.add(blade3);
	
	var blade4 = createBlade(new THREE.BoxGeometry(5, 10, 1), "Blade.png");
	blade4.position.x = -5.5;
	blade4.position.y = 18;
    blade4.position.z = 9;
	blade4.rotation.z = Math.PI/2;
	scene.add(blade4);
	
	var pivot = new THREE.Object3D();
	rotar.add(pivot);
	pivot.attach(blade1);
	pivot.attach(blade2);
	pivot.attach(blade3);
	pivot.attach(blade4);
	
	

    // add subtle ambient lighting
    var ambiColor = "#0c0c0c";
    var ambientLight = new THREE.AmbientLight(ambiColor);
    scene.add(ambientLight);

    // add the output of the renderer to the html element
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // call the render function
    var step = 0;

    var controls = new function () {
        this.rotationSpeed = 0.02;
		this.rotate = false;
    };
	
	
	var gui = new dat.GUI();
    gui.add(controls, 'rotationSpeed', 0.0001, 0.1);
	gui.add(controls, "rotate");


	animate();

	function createMesh(geom, imageFile) {
		var texLoader = new THREE.TextureLoader();
		var texture = texLoader.load("../assets/textures/Windmill/" + imageFile);
		var mat = new THREE.MeshBasicMaterial();
		mat.map = texture;
		
		var mesh = new THREE.Mesh(geom, mat);
		return mesh;
	}
	
	function createSky(geom, imageFile) {
		var texLoader = new THREE.TextureLoader();
		var texture = texLoader.load("../assets/textures/Windmill/" + imageFile);
		var mat = new THREE.MeshBasicMaterial({side: THREE.DoubleSide, transparent: true});
		mat.map = texture;
		
		var mesh = new THREE.Mesh(geom, mat);
		return mesh;
	}
		
	function createBlade(geom, imageFile) {
		var texLoader = new THREE.TextureLoader();
		var texture = texLoader.load("../assets/textures/Windmill/" + imageFile);
		var mat = new THREE.MeshBasicMaterial({transparent: true});
		mat.map = texture;
		
		var mesh = new THREE.Mesh(geom, mat);
		return mesh;
	}

	function  animate() {
		requestAnimationFrame(animate);
		control.update();
		render();
	}
	
    function render() {
        stats.update();
		if(controls.rotate) {
			rotar.rotation.z += controls.rotationSpeed;
		}
		

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