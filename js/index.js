window.onload=function () {
    let game=new Game();
    game.screen=document.querySelector("header");
    game.shengmin=document.querySelectorAll(".right li")[1];
    game.fensh=document.querySelectorAll(".right li")[2];
    let num=5;
    for (let i=0;i<num;i++){
        game.createletter();

    }

    let footercon=document.querySelector("footer .con");
    let state1=true;
    footercon.onclick=function (event) {
        if (state1){
            return;
        }
        if(event.target.className!="con"){
                let text=event.target.innerText;
                game.remove(text,1);
        }
    }
    let play=document.querySelectorAll(".right li")[3];
    let state=true;
    play.onclick=function (event) {
        if (state){
            this.style=`background-image:url(img/Pause.png)`;
            state=false;
            state1=false;
            game.run()
        }else {
            this.style=`background-image:url(img/Play.png)`;
            state=true;
            state1=true;
            game.pause();
        }

    }
}