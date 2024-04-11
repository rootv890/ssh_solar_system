import * as THREE from 'three'

// Texture Loader
const textureLoader = new THREE.TextureLoader()

// adding textures
const moonTexture = textureLoader.load('/textures/2k_moon.jpg')
const mercuryTexture = textureLoader.load('/textures/2k_mercury.jpg')
const venusTexture = textureLoader.load('/textures/2k_venus_surface.jpg')
const earthTexture = textureLoader.load('/textures/2k_earth_daymap.jpg')
const marsTexture = textureLoader.load('/textures/2k_mars.jpg')
const jupiterTexture = textureLoader.load('/textures/2k_jupiter.jpg')

const saturnTexture = textureLoader.load('/textures/2k_uranus.jpg')
const uranusTexture = textureLoader.load('/textures/2k_saturn.jpg')
const neptuneTexture = textureLoader.load('/textures/2k_neptune.jpg')

const moonMaterial = new THREE.MeshStandardMaterial({
	map: moonTexture
})

const mercuryMaterial = new THREE.MeshStandardMaterial({
	map: mercuryTexture
})

const venusMaterial = new THREE.MeshStandardMaterial({
	map: venusTexture
})

const earthMaterial = new THREE.MeshStandardMaterial({
	map: earthTexture
})

const marsMaterial = new THREE.MeshStandardMaterial({
	map: marsTexture
})

const jupiterMaterial = new THREE.MeshStandardMaterial({
	map: jupiterTexture
})

const uranusMaterial = new THREE.MeshStandardMaterial({
	map: uranusTexture
})

const saturnMaterial = new THREE.MeshStandardMaterial({
	map: saturnTexture
})

const neptuneMaterial = new THREE.MeshStandardMaterial({
	map: neptuneTexture
})
const Planets = [
	{
		name: 'Mercury',
		radius: 0.5,
		distance: 10,
		speed: 0.01,
		material: mercuryMaterial,
		moons: []
	},
	{
		name: 'Venus',
		radius: 0.8,
		distance: 15,
		speed: 0.007,
		material: venusMaterial,
		moons: []
	},
	{
		name: 'Earth',
		radius: 1,
		distance: 20,
		speed: 0.005,
		material: earthMaterial,
		moons: [
			{
				name: 'Moon',
				radius: 0.3,
				distance: 3,
				speed: 0.015
			}
		]
	},
	{
		name: 'Mars',
		radius: 0.7,
		distance: 25,
		speed: 0.003,
		material: marsMaterial,
		moons: [
			{
				name: 'Phobos',
				radius: 0.1,
				distance: 2,
				speed: 0.02
			},
			{
				name: 'Deimos',
				radius: 0.2,
				distance: 3,
				speed: 0.015,
				color: 0xffffff
			}
		]
	},
	{
		name: 'Jupiter',
		radius: 2,
		distance: 30,
		speed: 0.001,
		material: jupiterMaterial,
		moons: [
			{
				name: 'Io',
				radius: 0.3,
				distance: 3,
				speed: 0.015
			},
			{
				name: 'Europa',
				radius: 0.2,
				distance: 4,
				speed: 0.012
			},
			{
				name: 'Ganymede',
				radius: 0.4,
				distance: 5,
				speed: 0.01
			},
			{
				name: 'Callisto',
				radius: 0.5,
				distance: 6,
				speed: 0.008
			}
		]
	},
	{
		name: 'Saturn',
		radius: 1.5,
		distance: 35,
		speed: 0.0005,
		material: saturnMaterial,
		moons: [
			{
				name: 'Titan',
				radius: 0.3,
				distance: 3,
				speed: 0.015
			},
			{
				name: 'Rhea',
				radius: 0.2,
				distance: 4,
				speed: 0.012
			},
			{
				name: 'Iapetus',
				radius: 0.4,
				distance: 5,
				speed: 0.01
			},
			{
				name: 'Dione',
				radius: 0.5,
				distance: 6,
				speed: 0.008
			}
		]
	},
	{
		name: 'Uranus',
		radius: 1.2,
		distance: 40,
		speed: 0.0003,
		material: uranusMaterial,
		moons: [
			{
				name: 'Miranda',
				radius: 0.3,
				distance: 3,
				speed: 0.015
			},
			{
				name: 'Ariel',
				radius: 0.2,
				distance: 4,
				speed: 0.012
			},
			{
				name: 'Umbriel',
				radius: 0.4,
				distance: 5,
				speed: 0.01
			},
			{
				name: 'Titania',
				radius: 0.5,
				distance: 6,
				speed: 0.008
			}
		]
	}
]

// export { planets };
export { Planets, moonMaterial }
