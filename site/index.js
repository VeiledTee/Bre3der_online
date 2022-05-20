import * as THREE from 'https://www.skypack.dev/three@0.130.0/build/three.module.js'


const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()

const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({
  color: 0x00ff00
})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// boilerplate
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 100)
camera.position.set(0, 1, 2)
scene.add(camera)

const rendereer =  new THREE.WebGL1Rendereer({
  canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
rednerer.shadowMap.enabled = true

function animate(){
 requestAnimationFrame(animate)
  renderer.render(scene, camera)
}


animate()
