import { Application, Container, Text, Graphics } from 'pixi.js';
import './style.css';
import { ArrayUtils } from './lib/ArrayUtils';

// 遊戲程式進入點
let app = new Application<HTMLCanvasElement>();
document.body.appendChild(app.view);

// 使用通用物件來儲存舞台的尺寸
let stageSize = {
    width: 0,
    height: 0
}

// 新增一個繪圖元件來畫舞台的外框
let stageFrame = new Graphics();
app.stage.addChild(stageFrame);

/**
 * 重繪舞台的外框
 */
function redrawStageFrame(): void {
    stageFrame.clear();  // 清除繪圖器
    stageFrame.lineStyle({
        color: 0xFF0000,
        width: 2
    });
    stageFrame.drawRect(
        0,   // x
        0,   // y
        stageSize.width,  // 寬
        stageSize.height  // 高
    )
}

/**
 * 用來指定舞台大小的function
 */
function setStageSize(width: number, height: number): void {
    stageSize.width = width;
    stageSize.height = height;
    redrawStageFrame();
    refreshCanvasAndStage();
}

/**
 * 根據舞台尺寸(stageSize)與瀏覽器視窗大小
 * 來調整app.stage的縮放與位置
 */
function refreshCanvasAndStage(): void {
    // 首先取得瀏覽器的視窗大小
    let winSize = {
        width: window.innerWidth,
        height: window.innerHeight
    };
    // 將app裡的畫布尺寸同步到視窗大小
    app.renderer.resize(winSize.width, winSize.height);
    // 計算舞台最多可以放大多少倍, 才能盡量占滿視窗又不超出畫面
    let scale = Math.min(
        winSize.width / stageSize.width,
        winSize.height / stageSize.height
    );
    // 將舞台按計算結果縮放尺寸
    app.stage.scale.set(scale);
    // 計畫舞台在經過縮放後的實際尺寸
    let stageRealSize = {
        width: stageSize.width * scale,
        height: stageSize.height * scale,
    };
    // 計算並平移舞台位置, 讓舞台置中於視窗內
    app.stage.position.set(
        (winSize.width - stageRealSize.width) / 2,
        (winSize.height - stageRealSize.height) / 2
    );
}

// 設定舞台尺寸
setStageSize(640, 480);

// 監聽視窗的resize事件
// 再發生改變時執行refreshCanvasAndStage
window.addEventListener('resize', refreshCanvasAndStage);

/**
 * 設定外框顯示與否的函式
 */
export function setStageFrameVisible(visible: boolean) {
    stageFrame.visible = visible;
}

/**
 * 匯出取得舞台尺寸的函式
 */
export function getStageSize() {
    return {
        width: stageSize.width,
        height: stageSize.height 
    }
}

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