

new QRCode(document.getElementById("qrcode"), "http://www.runoob.com");
let imgurl = "";
setTimeout(function () {
    imgurl = $('#qrcode').children('img')[0].src;
    //console.log(imgurl);
    //遍历swipers里面的图片  进行替换图片
    let img = $('#swipers').children('div').children();
    for (let j = 0; j < img.length; j++) {
        //console.log(img[j].src);
        drawAndShareImage(img[j], img[j].src);
    }
}, 500);
//合成图片的方法
function drawAndShareImage(div, img) {
    var canvas = document.createElement("canvas");
    canvas.width = 700;
    canvas.height = 1300;
    var context = canvas.getContext("2d");

    context.rect(0, 0, canvas.width, canvas.height);
    context.fillStyle = "#fff";
    context.fill();

    var myImage = new Image();
    myImage.src = img;    //背景图片  你自己本地的图片或者在线图片
    console.log(div, img);
    myImage.crossOrigin = 'Anonymous';

    myImage.onload = function () {
        context.drawImage(myImage, 0, 0, 700, 1300);
        context.font = "60px Courier New";
        context.fillText(" ", 1, 1);
        var myImage2 = new Image();
        //console.log(imgurl);
        myImage2.src = imgurl;   //你自己本地的图片或者在线图片
        myImage2.crossOrigin = 'Anonymous';
        myImage2.onload = function () {
            // 左 上     右     下
            context.drawImage(myImage2, 250, 650, 225, 225);
            var base64 = canvas.toDataURL("image/png");  //"image/png" 这里注意一下
            var img = document.getElementById('avatar');

            // 注意 这里的div 其实就是 img  给他添加一个图片路径
            div.setAttribute('src', base64);
        }
    }
}

