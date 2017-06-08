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
		this.Star = function(arg){ // пушим новый объект для каждой звезды с генерац.индивид.параметров
				this.x = Math.floor(Math.random() * arg.width), // координаты
				this.y = Math.floor(Math.random() * arg.height),
				this.vx = ((0.5 - Math.random())/5).toFixed(2), //скорость (для ее уменьшения /5)
				this.vy = ((0.5 - Math.random())/5).toFixed(2),
				this.radius = +((Math.random() * arg.star.width).toFixed(1)),
				this.create = function(arg){
					// arg.context.clearRect(0, 0, arg.canvas.width, arg.canvas.height);
					arg.context.beginPath();
					arg.context.arc(this.x, this.y, this.radius, 2*Math.PI, false);
					arg.context.fill();
				}
			};
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
		// this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		for(let i = 0; i < this.length; i++){
			// console.log(this.length)
			// this.length
			this.stars.push(new this.Star(this.__this));
			this.stars[i].create(this); 
			let st = this.stars[i]
			this._animate(st)
		};
		// this._animate();
	};

	_animate(arg){
		// console.log(arg);
		let th = this
		let star = arg;
		let x = star.x;
		// console.log(this.canvas.width)
		let flag = true
		// this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
		setInterval(function(){
			// th.context.clearRect(star.x-star.radius, star.y-star.radius, star.x+star.radius, star.y+star.radius);
			// th.context.clearRect(0, 0, th.canvas.width, th.canvas.height);
			console.log(star)
			if(flag == true){
				++x;
			}
			star.x = x;
			star.create(th);
		}, 80)
	};


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



//http://domenart-blog.ru/kategorii/programmirovanie/javascript/322-animacziya-sozvezdie