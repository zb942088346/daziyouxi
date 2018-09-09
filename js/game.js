class Game{               //类
    //属性
    constructor(){
            this.screen="";
            this.letters=[];
            this.fenshu=0;
            this.shengming=10;
            this.fensh="";
            this.shengmin="";
    }
    //方法
    //创建字母

    createletter(){
         let div=document.createElement("div");
         let asc,letter;
        do {
             asc=Math.floor( Math.random()*26+65);
             letter=String.fromCharCode(asc);
        }while (letterapeats(letter,this.letters)) ;

        let left;
        do {
            left=Math.random()*(7.5-0.53*3)+0.53;
        }while (letterapeat(left,this.letters));
        let top=Math.random();
        div.style=`background-image:url(img/A_Z/${letter}.png);left:${left}rem;top:${top}rem`;
        this.screen.appendChild(div);
        let obj={};
        obj['top']=top;
        obj['left']=left;
        obj['node']=div;
        obj['name']=letter;
        this.letters.push(obj);

    }

    //下落
    run(){
        let sudu=0.1;
        this.t=setInterval(()=> {
            for (let item of this.letters) {
                item['top']+=sudu;
                if (item['top']>=8.89){
                    this.remove(item['name'],0);
                    continue;
                }
                item['node'].style.top=item['top']+'rem';
            }
        },100)
    }

    //消失
    remove(letter,type){
        //需要传入字母 A B C
        //从页面中（screen）移除节点
        //从this.letters  数组中移除对应的数据
        //type=0减生命值 =1加分
       for (item of this.letters){
           if (item['name']==letter){
               let index=this.letters.indexOf(item);
               this.screen.removeChild(item['node']);
               this.letters.splice(index,1);
               this.createletter();

               if (type==0){
                   this.shengming--
               } else if (type==1){
                   this.fenshu++
               }
               this.fensh.innerText=this.fenshu;
               this.shengmin.innerText=this.shengming;
               if(this.shengmin.innerText==0){
                   let show=document.querySelector(".show");
                   let pop=document.querySelector(".pop");
                   let clound1=document.querySelector(".clound1");
                   let soc=document.querySelector(".pop .score");
                   show.style.display=`block`;
                   pop.style.display=`block`;
                   clound1.style.display=`block`;
                    soc.innerText=this.fenshu;
                   this.pause();
                   let begin=document.querySelector(".pop .begin");
                  begin.onclick=function () {
                      history.go(0)
                  }
               }
           }
       }
    }

    //暂停
    pause(){
        clearInterval(this.t);
    }

}
function letterapeat(left,letters){
      for (item of letters){
        if(Math.abs(left-item['left'])<0.53){
            return true;
        }

    }
    return false;
}
function letterapeats(letter,letters) {
    for (item of letters){
        if (letter==item['name']) {
            return true;
        }
    }
    return false;
}