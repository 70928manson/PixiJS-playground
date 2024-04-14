import { Application, Container, Text, Sprite, Graphics } from 'pixi.js';
import './style.css';
import testImageUrl from './images/test.jpg';

// 遊戲程式進入點
let app = new Application<HTMLCanvasElement>();
document.body.appendChild(app.view);

let graphics = new Graphics();
app.stage.addChild(graphics);

// 改變畫布蓋滿整個window畫面
app.renderer.resize(
    window.innerWidth,  // 視窗內部不含框的寬
    window.innerHeight  // 視窗內部不含寬的高
);

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

// 改變筆刷 (粗 10px / 綠色)
graphics.lineStyle({
    width: 10,
    color: 0x00FF00,
});
// 畫圈 圓心在(100, 120) / 半徑50
graphics.drawCircle(100, 120, 50);
// 畫另一個圖
graphics.drawCircle(240, 120, 50);

// 重置筆刷
graphics.lineStyle();
// 準備填色 (紫色)
graphics.beginFill(0xFF00FF);
// 畫方, 從(150, 200) 畫一個寬80, 高30的方形
graphics.drawRect(150, 200, 80, 30);
// 結束填色
graphics.endFill();

// 再建一個名子叫hole的Graphics
let hole = new Graphics();
// 準備填黑色
hole.beginFill(0);
// 以(180, 120)為圓心畫個半徑100的圓
hole.drawCircle(180, 120, 100);
// 結束填色
hole.endFill();
// 將這個hole指定為graphics的遮罩
graphics.mask = hole;


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