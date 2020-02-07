function drawBg() {
    var currentDate = new Date();
    var factor = Math.sin(currentDate.getMilliseconds()/1000 + currentDate.getSeconds() + currentDate.getMinutes()*60);

    var target = document.querySelector('#c-animated').getContext("2d");
    target.clearRect(0,0,document.body.clientWidth, document.body.clientHeight);
    //Base Planet
    //--Base Planet Aura
    var grad_planetAura = target.createRadialGradient(document.body.clientWidth/2, document.body.clientHeight*2,document.body.clientHeight*Math.sqrt(2)*0.9, document.body.clientWidth/2, document.body.clientHeight*2,document.body.clientHeight*Math.sqrt(2)*(0.95+0.02*factor));
    grad_planetAura.addColorStop(0, "rgba(255,255,255,1)");
    grad_planetAura.addColorStop(0.5, "rgba(0,255,255,0.5)");
    grad_planetAura.addColorStop(1, "rgba(0,255,255,0)");
    target.beginPath();
    target.arc(document.body.clientWidth/2, document.body.clientHeight*2,document.body.clientHeight*Math.sqrt(2)*(0.95+0.02*factor), 0, Math.PI*2);
    target.fillStyle = grad_planetAura;
    target.fill();
    //--Base Planet Body
    var grad_planet = target.createRadialGradient(document.body.clientWidth/2, document.body.clientHeight*2,document.body.clientHeight*Math.sqrt(2)*0.5, document.body.clientWidth/2, document.body.clientHeight*2,document.body.clientHeight*Math.sqrt(2)*0.9);
    grad_planet.addColorStop(1,"rgba(255,255,255,1)");
    grad_planet.addColorStop(0.85, "rgba(0,11,180,1)");
    grad_planet.addColorStop(0.65, "rgba(0,0,0,1)");
    target.beginPath();
    target.arc(document.body.clientWidth/2, document.body.clientHeight*2,document.body.clientHeight*Math.sqrt(2)*0.9, 0, Math.PI*2);
    target.fillStyle = grad_planet;
    target.fill();

    //Sun
    //--Sun Aura
    var grad_sunAura = target.createRadialGradient(document.body.clientWidth*0.75, document.body.clientHeight*0.25, 0, document.body.clientWidth*0.75, document.body.clientHeight*0.25,document.body.clientHeight*(0.15+0.02*factor));
    grad_sunAura.addColorStop(0, "rgba(255,255,255,1)");
    grad_sunAura.addColorStop(0.6-(0.05*factor), "rgba(255,255,255,1)");
    grad_sunAura.addColorStop(1, "rgba(255,255,255,0)");
    target.beginPath();
    target.arc(document.body.clientWidth*0.75, document.body.clientHeight*0.25,document.body.clientHeight*(0.15+0.02*factor), 0, Math.PI*2);
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
        var xpos = Math.random() * document.body.clientWidth;
        var ypos = Math.random()* document.body.clientHeight;
        target.beginPath();
        target.arc(xpos, ypos, 1+Math.random()*1, 0, Math.PI*2);
        target.fillStyle = "rgba(255,255,255,1)";
        target.fill();
    }
}