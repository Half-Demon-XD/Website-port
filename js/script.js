console.log("JS Loaded");

document.addEventListener("DOMContentLoaded", function () {

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        // to check in console if the form is found
        console.log("Login form found"); 

        loginForm.addEventListener("submit", async function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const response = await fetch("https://u6vo5p5cx5ngbu4x7n7l3sfhne0ilsmf.lambda-url.us-east-1.on.aws/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })     
            });

            const data = await response.json();
            console.log("Server says", data);
            alert(data.message);

        });
    }
});




document.addEventListener("DOMContentLoaded", function () {
    // Toggle mobile menu
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active"); // show/hide menu
            menuToggle.classList.toggle("active"); // animate hamburger
        });
    }
});



// vibecoded , but with documentation. sphere animation using three.js. exanple from three.js gallery
document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("sphere-container");
    if (!container) return;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.z = 4;

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true 
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Wireframe Sphere
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    const material = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        wireframe: true,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Soft Glow Layer
    const glowGeometry = new THREE.SphereGeometry(1.6, 64, 64);
    const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x00f5ff,
        transparent: true,
        opacity: 0.08,
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Mouse interaction
    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (event) => {
        mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    });

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        sphere.rotation.y += 0.002;
        sphere.rotation.x += 0.001;

        sphere.position.x = mouseX * 0.3;
        sphere.position.y = -mouseY * 0.3;

        glow.position.copy(sphere.position);

        renderer.render(scene, camera);
    }

    animate();

    // Resize fix
    window.addEventListener("resize", () => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
    });

});