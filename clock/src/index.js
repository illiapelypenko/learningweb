import './style.scss';

const canvas = document.querySelector('.clock');
const context = canvas.getContext('2d');

const size = 1000;
const lineWidth = 20;

canvas.width = size;
canvas.height = size;

const x = size / 2;
const y = size / 2;
const r = size / 2 - lineWidth;

context.strokeStyle = '#fff';
context.lineWidth = lineWidth;

context.beginPath();
context.arc(x, y, r, 0, 2 * Math.PI);
context.stroke();

context.moveTo(x, y);
context.lineTo(x, y + r);
context.stroke();
