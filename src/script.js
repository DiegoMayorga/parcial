import './style.css'
import * as THREE from 'three'
import * as dat from 'dat.gui'

const gui = new dat.GUI()
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()

//Rectángulos

const geometry1 = new THREE.BoxGeometry(20, 1, 1)
const material1 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
material1.color = new THREE.Color(0x0000ff)
const cube1 = new THREE.Mesh(geometry1, material1)
cube1.position.set(0, 18, 0)
scene.add(cube1)

const geometry2 = new THREE.BoxGeometry(20, 1, 1)
const material2 = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
material2.color = new THREE.Color(0xffff00)
const cube2 = new THREE.Mesh(geometry2, material2)
cube2.position.set(0, -8, 0)
scene.add(cube2);

//Círculo

const geometry3 = new THREE.SphereGeometry(1.5, 32, 16);
const material3 = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const sphere = new THREE.Mesh(geometry3, material3);
sphere.position.set(0, 4, 0)
scene.add(sphere);

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

document.addEventListener('keydown', function (e) {
    if (e.key === "ArrowLeft") {
        cube2.position.x -= 1
    } if (e.key === "ArrowRight") {
        cube2.position.x += 1
    }
})

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 5
camera.position.z = 20
scene.add(camera)

// Controls
// const controls = new OrbitControls(camera, canvas)
// controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */

const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()