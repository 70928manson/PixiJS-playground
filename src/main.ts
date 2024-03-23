import { Application, Container, Text, Sprite, Graphics } from 'pixi.js';
import './style.css';
import testImageUrl from './images/test.jpg';

// 遊戲程式進入點
let app = new Application<HTMLCanvasElement>();
document.body.appendChild(app.view);

let graphics = new Graphics();
app.stage.addChild(graphics);

// 設定畫線的筆刷 (粗 20px 白色)
graphics.lineStyle({
    width: 20,
    color: 0xFFFFFF,
});
// 把筆移動到(40, 50)
graphics.moveTo(40, 50);
// 畫線畫到(140, 30)
graphics.lineTo(140, 30);
// 提起筆再移動到(200, 30)
graphics.moveTo(200, 30);
// 下筆畫到(300, 50)
graphics.lineTo(300, 50);

// let sprite = Sprite.from(testImageUrl);
// app.stage.addChild(sprite);

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