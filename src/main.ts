import { Application, Text } from 'pixi.js';
import './style.css';

//遊戲程式進入點
let app = new Application<HTMLCanvasElement>();
document.body.appendChild(app.view);

let text = new Text('Hello world', {
    fill: 0x00FF00,
});
app.stage.addChild(text);