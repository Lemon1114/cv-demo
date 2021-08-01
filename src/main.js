let string =`
/*大家好，我是一个前端
*我现在要开始写代码了
*首选画一个div
**/
#div{
    border:1px solid #000;
    width:200px;
    height:200px;
}
/*接下来把div变成一个圆
**/
#div{
    border-radius:50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
}
/*
*八卦是阴阳形成的
*画出一黑一白
**/
#div{
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*
*加两个神秘的小球 */
#div::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%, rgba(0,0,0,1) 100%);
}`
let cssText = document.querySelector("#cssText");
let style = document.querySelector("#style");
let string2=''
let n =0
let step =()=>{
    setTimeout(()=>{
        //html 无法区分换行和空格要将字符串中的换行和空格转成html标签
        if(string[n]==='\n'){
            string2 +="<br>"
        }else if(string[n]===' '){
            string2 +="&nbsp;"
        }else{
            string2 +=string[n]
        }
        cssText.innerHTML = string2
        style.innerHTML =string.substring(0,n)
        window.scrollTo(0, 99999);
        cssText.scrollTo(0, 99999);
        if(n>string.length){return}
        if (n < string.length - 1) {
            // 如果 n 不是最后一个,就继续
            n += 1;
            step();
          }
    },50)
}
step()