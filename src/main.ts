import { Application, Container, Text, Sprite } from 'pixi.js';
import './style.css';
import testImageUrl from './images/test.jpg';

//遊戲程式進入點
let app = new Application<HTMLCanvasElement>();
document.body.appendChild(app.view);

let sprite = Sprite.from(testImageUrl);
app.stage.addChild(sprite);

let container = new Container();
app.stage.addChild(container);

let text1 = new Text('Hello world', {
    fill: 0x00FF00,
});
let text2 = new Text('哈囉世界', {
    fill: 0x00FF00,
});
container.addChild(text1);
container.addChild(text2);

text1.position.set(100, 50);
text2.position.set(100, 100);
container.angle = 15;