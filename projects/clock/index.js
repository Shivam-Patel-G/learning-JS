hour1top = document.getElementById("hour1top");
hour1bottom = document.getElementById("hour1bottom");
hour2top = document.getElementById("hour2top");
hour2bottom = document.getElementById("hour2bottom");

minute1top = document.getElementById("minute1top");
minute1bottom = document.getElementById("minute1bottom");
minute2top = document.getElementById("minute2top");
minute2bottom = document.getElementById("minute2bottom");

second1top = document.getElementById("second1top");
second1bottom = document.getElementById("second1bottom");
second2top = document.getElementById("second2top");
second2bottom = document.getElementById("second2bottom");


function checktime(time,placetop,placebottom){
    switch(true){
        case time == 0:
            draw0(placetop,placebottom);
            break;
        case time == 1:
            draw1(placetop,placebottom);
            break;
        case time == 2:
            draw2(placetop,placebottom);
            break;
        case time == 3:
            draw3(placetop,placebottom);
            break;
        case time == 4:
            draw4(placetop,placebottom);
            break;
        case time == 5:
            draw5(placetop,placebottom);
            break;
        case time == 6:
            draw6(placetop,placebottom);
            break;
        case time == 7:
            draw7(placetop,placebottom);
            break;
        case time == 8:
            draw8(placetop,placebottom);
            break;
        case time == 9:
            draw9(placetop,placebottom);
            break;
    }
}

function updateclock(){
    const current = new Date();
    let hour = current.getHours().toString().padStart(2,0);
    let hour1 = hour.slice(0,1);
    let hour2 = hour.slice(-1);

    let minute = current.getMinutes().toString().padStart(2,0);
    let minute1 = minute.slice(0,1);
    let minute2 = minute.slice(-1);

    let second = current.getSeconds().toString().padStart(2,0);
    let second1 = second.slice(0,1);
    let second2 = second.slice(-1);

    reset(hour1top,hour1bottom);
    reset(hour2top,hour2bottom);
    reset(minute1top,minute1bottom);
    reset(minute2top,minute2bottom);
    reset(second1top,second1bottom);
    reset(second2top,second2bottom);

    checktime(hour1,hour1top,hour1bottom);
    checktime(hour2,hour2top,hour2bottom);
    checktime(minute1,minute1top,minute1bottom);
    checktime(minute2,minute2top,minute2bottom);
    checktime(second1,second1top,second1bottom);
    checktime(second2,second2top,second2bottom);
}
setInterval(updateclock, 1000);

function reset(top,bottom){
    top.style.borderTopColor = "#666666"
    top.style.borderBottomColor = "#666666"
    top.style.borderLeftColor = "#666666"
    top.style.borderRightColor = "#666666"

    bottom.style.borderTopColor = "#666666"
    bottom.style.borderBottomColor = "#666666"
    bottom.style.borderLeftColor = "#666666"
    bottom.style.borderRightColor = "#666666"
}
function draw0(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#666666"
    top.style.borderLeftColor = "#ff0000"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#666666"
    bottom.style.borderBottomColor = "#ff0000"
    bottom.style.borderLeftColor = "#ff0000"
    bottom.style.borderRightColor = "#ff0000"
}
function draw1(top,bottom){
    top.style.borderTopColor = "#666666"
    top.style.borderBottomColor = "#666666"
    top.style.borderLeftColor = "#666666"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#666666"
    bottom.style.borderBottomColor = "#666666"
    bottom.style.borderLeftColor = "#666666"
    bottom.style.borderRightColor = "#ff0000"
}
function draw2(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#ff0000"
    top.style.borderLeftColor = "#666666"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#ff0000"
    bottom.style.borderBottomColor = "#ff0000"
    bottom.style.borderLeftColor = "#ff0000"
    bottom.style.borderRightColor = "#666666"
}
function draw3(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#ff0000"
    top.style.borderLeftColor = "#666666"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#ff0000"
    bottom.style.borderBottomColor = "#ff0000"
    bottom.style.borderLeftColor = "#666666"
    bottom.style.borderRightColor = "#ff0000"
}
function draw4(top,bottom){
    top.style.borderTopColor = "#666666"
    top.style.borderBottomColor = "#ff0000"
    top.style.borderLeftColor = "#ff0000"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#ff0000"
    bottom.style.borderBottomColor = "#666666"
    bottom.style.borderLeftColor = "#666666"
    bottom.style.borderRightColor = "#ff0000"
}
function draw5(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#ff0000"
    top.style.borderLeftColor = "#ff0000"
    top.style.borderRightColor = "#666666"

    bottom.style.borderTopColor = "#ff0000"
    bottom.style.borderBottomColor = "#ff0000"
    bottom.style.borderLeftColor = "#666666"
    bottom.style.borderRightColor = "#ff0000"
}
function draw6(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#ff0000"
    top.style.borderLeftColor = "#ff0000"
    top.style.borderRightColor = "#666666"

    bottom.style.borderTopColor = "#ff0000"
    bottom.style.borderBottomColor = "#ff0000"
    bottom.style.borderLeftColor = "#ff0000"
    bottom.style.borderRightColor = "#ff0000"
}
function draw7(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#666666"
    top.style.borderLeftColor = "#666666"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#666666"
    bottom.style.borderBottomColor = "#666666"
    bottom.style.borderLeftColor = "#666666"
    bottom.style.borderRightColor = "#ff0000"
}
function draw8(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#ff0000"
    top.style.borderLeftColor = "#ff0000"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#ff0000"
    bottom.style.borderBottomColor = "#ff0000"
    bottom.style.borderLeftColor = "#ff0000"
    bottom.style.borderRightColor = "#ff0000"
}
function draw9(top,bottom){
    top.style.borderTopColor = "#ff0000"
    top.style.borderBottomColor = "#ff0000"
    top.style.borderLeftColor = "#ff0000"
    top.style.borderRightColor = "#ff0000"

    bottom.style.borderTopColor = "#ff0000"
    bottom.style.borderBottomColor = "#ff0000"
    bottom.style.borderLeftColor = "#666666"
    bottom.style.borderRightColor = "#ff0000"
}