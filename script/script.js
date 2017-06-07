class Constellation{
	constructor(config){
		this.__this = this;
		this.width = config.width;
		this.height = config.height;
		this.canvas = document.querySelector('#canvas')
		this.context = this.canvas.getContext('2d');
		this.star = config.star;
		this.length = config.length;
		this.stars = config.stars;
		// this.Star = {
			// th: this.__this,
			// x: Math.floor(Math.random() * this.width),
			// y: Math.floor(Math.random() * this.height),
			// radius: +((Math.random() * this.star.width).toFixed(1)),
			// create: function(arg){
			// 	arg.context.beginPath();
			// 	arg.context.arc(this.x, this.y, this.radius, 2*Math.PI, false);
			// 	arg.context.fill();
			// }
		// };
		this._setCanvas();
		this._setContext();
		this._createStars();
		// this._animate();
		// this._check();
	};

	_setCanvas(){
		this.canvas.width = this.width; // ширина холста
		this.canvas.height = this.height; // высота холста
	};

	_setContext(){
		this.context.fillStyle = this.star.color; // заливка фигур
	};

	_createStars(){
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for(let i = 0; i < this.length; i++){
			this.stars.push({ // пушим новый объект для каждой звезды с генерац.индивид.параметров
				x: Math.floor(Math.random() * this.width), // координаты
				y: Math.floor(Math.random() * this.height),
				vx: ((0.5 - Math.random())/5).toFixed(2), //скорость (для ее уменьшения /5)
				vy: ((0.5 - Math.random())/5).toFixed(2),
				radius: +((Math.random() * this.star.width).toFixed(1)),
				create: function(arg){
					// console.log(this)
					// arg.context.clearRect(0, 0, this.x-this.radius, this.y-this.radius);
					arg.context.beginPath();
					arg.context.arc(this.x, this.y, this.radius, 2*Math.PI, false);
					arg.context.fill();
				},
				animate: function(star, constel){
					// constel.context.clearRect(this.x-this.radius, this.y-this.radius*2, this.x+this.radius, this.y+this.radius);
					let x = star.x;
					let y = star.y;
					let vx = +star.vx;
					let vy = +star.vy;
					let radius = star.radius;
					let canvasW = constel.canvas.width;
					let canvasH = constel.canvas.height;
					let context = constel.context;
					let flagW = true;
					let flagH = true;
					if(flagW){
						++x
					}
					console.log(this.top)
					this.x = x;
					this.y = y;
					this.create(constel)
					// console.log(this)
					
				}
			});
			this.stars[i].create(this);
		};
		this._animate();
	};

	_animate(){
		let constel = this;
		let stars = this.stars
		let w = this.canvas.width;
		let h = this.canvas.height;

		console.log("anim");
		setInterval(function(){
			for(let i = 0; i<stars.length; i++){
				stars[i].animate(stars[i], constel);
			}
		}, 50)
	}


	_check(){
		console.log(this.width);
		console.log(this.height);
		console.log(this.canvas);
		console.log(this.context);
		console.log(this.star);
		console.log(this.length);
		console.log(this.stars);
		console.log(this.Star)
		// console.log();
	};
};

const config = {
	width: window.innerWidth,
	height: window.innerHeight,
	star: {
		color: 'rgba(255, 255, 255, .5)',
		width: 3
	},
	length: Math.floor(Math.sqrt(Math.pow(window.innerWidth, 2) + Math.pow(window.innerHeight, 2))/10),
	stars: []
};

document.addEventListener('DOMContentLoaded', ()=>{var c = new Constellation(config);});
// var s = new Star(config);