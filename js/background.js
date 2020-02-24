const W = window.screen.width;
const H = window.screen.height;
var seq = 1;

function drawBg() {
    var currentDate = new Date();
    var factor = Math.sin(currentDate.getMilliseconds()/1000 + currentDate.getSeconds() + currentDate.getMinutes()*60);

    var target = document.querySelector('#c-animated').getContext("2d");
    target.clearRect(0,0,W, H);
    //Base Planet
    //--Base Planet Aura
    var grad_planetAura = target.createRadialGradient(W/2, H*2,H*Math.sqrt(2)*0.9, W/2, H*2,H*Math.sqrt(2)*(0.95+0.02*factor));
    grad_planetAura.addColorStop(0, "rgba(255,255,255,1)");
    grad_planetAura.addColorStop(0.5, "rgba(0,255,255,0.5)");
    grad_planetAura.addColorStop(1, "rgba(0,255,255,0)");
    target.beginPath();
    target.arc(W/2, H*2,H*Math.sqrt(2)*(0.95+0.02*factor), 0, Math.PI*2);
    target.fillStyle = grad_planetAura;
    target.fill();
    //--Base Planet Body
    var grad_planet = target.createRadialGradient(W/2, H*2,H*Math.sqrt(2)*0.5, W/2, H*2,H*Math.sqrt(2)*0.9);
    grad_planet.addColorStop(1,"rgba(255,255,255,1)");
    grad_planet.addColorStop(0.85, "rgba(0,11,180,1)");
    grad_planet.addColorStop(0.65, "rgba(0,0,0,1)");
    target.beginPath();
    target.arc(W/2, H*2,H*Math.sqrt(2)*0.9, 0, Math.PI*2);
    target.fillStyle = grad_planet;
    target.fill();

    //Sun
    //--Sun Aura
    var grad_sunAura = target.createRadialGradient(W*0.75, H*0.25, 0, W*0.75, H*0.25,H*(0.15+0.02*factor));
    grad_sunAura.addColorStop(0, "rgba(255,255,255,1)");
    grad_sunAura.addColorStop(0.6-(0.05*factor), "rgba(255,255,255,1)");
    grad_sunAura.addColorStop(1, "rgba(255,255,255,0)");
    target.beginPath();
    target.arc(W*0.75, H*0.25,H*(0.15+0.02*factor), 0, Math.PI*2);
    target.fillStyle = grad_sunAura;
    target.fill();

    
}

function init(){
    //Draw Static
    //var target = new HTMLCanvasElement().getContext('2d');
    var target = document.querySelector('#c-bgp').getContext("2d");
    const starsNum = 100
    //Background
    //--Main Bg
    var grad_b = target.createLinearGradient(0,0,0,1080);
    grad_b.addColorStop(1,"rgba(0,0,0,1)");
    grad_b.addColorStop(0, "rgba(0,70,180,1)");
    target.fillStyle = grad_b;
    target.fillRect(0,0,1980,1080);
    setInterval(drawBg, 1000/30);
    //--Stars
    for(var i = 0; i < starsNum; i++){
        var xpos = Math.random() * W;
        var ypos = Math.random()* H;
        target.beginPath();
        target.arc(xpos, ypos, 1+Math.random()*1, 0, Math.PI*2);
        target.fillStyle = "rgba(255,255,255,1)";
        target.fill();
    }
}

function changeSubtitle() {
    console.log("Hello");
    var query = document.querySelector("#subtitle");
    const wd = [
    "Hi 能遇见你真的很好 留下来随便点点看吧 :)",
    "你是第一个发现彩蛋的冒险者，继续点击阅读彩蛋",
    "PPT是最好用的画图工具",
    "在github项目给他一颗星能让galaxyzeta产生最大的成就感",
    "StackOverflowException",
    "精神上的优越才是最值得我们追求的",
    "愿波导与你同在",
    "你望着页面上的星空，这使你充满了决心",
    "En Taro RETRO!",
    "Every GAME that KILLs me 1,000 times makes me alive",
    "Excel是画像素画的！",
    "4e 00 5b 9a 66 2f 7a 0b 5e 8f 54 58 这究竟是什么意思呢... ...",
    "不，这个游戏不够硬核",
    "よろしくおねがいします",
    "阅读完毕，接下来你可以随便逛逛",
    ]
    
    query.innerHTML = wd[seq];
    seq = ++seq % wd.length;
}