import { Application } from 'pixi.js';
import './style.css';

//遊戲程式進入點
let app = new Application<HTMLCanvasElement>();
document.body.appendChild(app.view);