class Canvas {
  static canvas = document.getElementById('canvas');
  static context = canvas.getContext('2d');
  static items = [];

  static init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.addItem(new Ball(this, 100, 100, 50, 50));
    this.addItem(new Ball(this, 200, 200, -50, -50));
    this.addItem(new Ball(this, 300, 300, 0, 50));
    this.addItem(new Ball(this, 400, 400, 50, 0));
    this.addItem(new Ball(this, 500, 500, 0, -50));
    this.addItem(new Ball(this, 600, 600, -50, 0));

    window.onmousedown = (e) => {
      this.addItem(new Ball(this, e.clientX, e.clientY, 50, 50));
      this.draw();
    };

    setInterval(() => {
      this.draw();
    },16);
  }

  static addItem(item) {
    this.items.push(item);
  }

  static draw() {
    this.items.forEach((item) => item.draw());
  }

  static update() {
    this.items.forEach((item) => item.update());
  }
}

class GameObject {
  constructor(canvas, x, y, vx, vy) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.isColliding = false;
  }
}

class Ball extends GameObject {
  radius = 20;
  startAngle = 0;
  endAngle = 2 * Math.PI;
  color = '#000';

  constructor(canvas, x, y, vx, vy) {
    super(canvas, x, y, vx, vy);
    this.color = this.getRandomColor();
  }

  draw() {
    this.canvas.context.beginPath();
    this.canvas.context.arc(
      this.x,
      this.y,
      this.radius,
      this.startAngle,
      this.endAngle
    );
    // this.canvas.context.fillStyle = this.color;
    this.canvas.context.fillStyle = this.isColliding ? '#ff8080' : '#0099b0';
    this.canvas.context.fill();
  }

  update(secondsPassed) {
    // Move with set speed
    this.x += this.vx * secondsPassed;
    this.y += this.vy * secondsPassed;
  }

  getRandomColor() {
    const spectr = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ];
    function getRandomSpectr() {
      return spectr[Math.round(Math.random() * 15)];
    }
    return `#${getRandomSpectr()}${getRandomSpectr()}${getRandomSpectr()}`;
  }
}

Canvas.init();