// import "./queue.js";
var calendar;
var previousYear, currentYear, nextYear;
var currentMonth;
var year, month, today;
var days, daylist = [];
var months = ["一月 January","二月 February","三月 March","四月 April",
"五月 May","六月 June","七月 July","八月 August","九月 September",
"十月 October","十一月 November","十二月 December"];
var monthsCH = ["一月","二月","三月","四月",
"五月","六月","七月","八月","九月",
"十月","十一月","十二月"];
var calendardisable = false;

function calendarInit(){
    calendar = document.getElementById("myCalendar");
    
    previousYear = document.getElementById("previousYear");
    currentYear = document.getElementById("currentYear");
    nextYear = document.getElementById("nextYear");
    days = calendar.getElementsByClassName("days");
    for(var i = 1; i < 7; i ++){
        var tds = days[i].getElementsByTagName("td");
        for(var j = 0; j < 7; j ++){
            daylist.push(tds[j]);
        }
    }
    
    currentMonth = document.getElementById("currentMonth");

    var date = new Date();
    year = date.getFullYear();
    month = date.getMonth();
    today = date.getDate();
    generateDates(date);
    
    previousYear.innerHTML = year - 1;
    currentYear.innerHTML = year;
    nextYear.innerHTML = year + 1;
    
    currentMonth.innerHTML = months[month];
}

function generateDates(date){
    var firstday = new Date(date.setDate(1));
    var first = firstday.getDay();
    var num = 1;
    var i = first;
    var monthchanged = false;
    while(i < daylist.length){
        firstday = new Date(firstday.setDate(num));
        daylist[i].innerHTML = firstday.getDate();
        if(num - firstday.getDate() > 0) monthchanged = true;
        if(daylist[i].className == "today"){
                if(firstday.getDay() == 0 || firstday.getDay() == 6){
                    daylist[i].className = "weekends";
                }else{
                    if(monthchanged) daylist[i].className = "other-month";
                    else daylist[i].className = "this-month";
                }
        }else if(daylist[i].className != "weekends"){
            if(monthchanged) daylist[i].className = "other-month";
            else daylist[i].className = "this-month";
        }
        if(num == today && !monthchanged) daylist[i].className = "today";
        
        num = firstday.getDate() + 1;
        i ++;
    }
    if(first != 0){
        firstday = new Date(date.setDate(0));
        first = firstday.getDay();
        num = firstday.getDate();
        i = first;
        while(i >= 0){
            daylist[i].innerHTML = num;
            if(daylist[i].className != "weekends"){
                daylist[i].className = "other-month";
            }
            num --;
            i --;
        }
    }
}
function changeupDate(newYear,newMonth){
    var date = new Date();
    date = new Date(date.setFullYear(newYear, newMonth));
    year = date.getFullYear();
    month = date.getMonth();
    today = date.getDate();
    for(var i = 0; i < daylist.length; i ++){
        dayFadeOut(daylist[i], i);
    }
    var last = daylist[daylist.length - 1];
    last.style.animation = "dayOut 0.3s " + (daylist.length - 1) / 100.0 + "s";
    last.style.webkitAnimation = "dayOut 0.3s " + (daylist.length - 1) / 100.0 + "s";
    last.addEventListener("animationend", all1 = function(){
        for(var i = 0; i < daylist.length; i ++){
            dayFadeIn(daylist[i], i);
        }
        calendardisable = false;
        //console.log(1);
        generateDates(date);
        last.removeEventListener("animationend", all1);
    });
    last.addEventListener("webkitAnimationEnd", all2 = function(){
        for(var i = 0; i < daylist.length; i ++){
            dayFadeIn(daylist[i], i);
        }
        calendardisable = false;
        //console.log(2);
        generateDates(date);
        last.removeEventListener("webkitAnimationEnd", all2);
    });
    currentMonth.innerHTML = months[month];
    previousYear.innerHTML = year - 1;
    currentYear.innerHTML = year;
    nextYear.innerHTML = year + 1;
}
function premonth(){
    if(!calendardisable){
        calendardisable = true;
        changeupDate(year, month - 1);
    }
    
}
function nextmonth(){
    if(!calendardisable){
        calendardisable = true;
        changeupDate(year, month + 1);
    }
}
function preyear(){
    if(!calendardisable){
        calendardisable = true;
        changeupDate(year - 1, month);
    }
}
function nextyear(){
    if(!calendardisable){
        calendardisable = true;
        changeupDate(year + 1, month);
    }
}

function dayFadeIn(item, time){
    
    item.style.animation = "dayIn 0.3s " + time / 100.0 + "s";
    item.style.webkitAnimation = "dayIn 0.3s "+ time / 100.0 + "s";
    item.addEventListener("animationend", temp = function(){
        item.style.opacity = 1;
        item.style.animation = "";
        item.style.webkitAnimation = "";
        item.removeEventListener("webkitAnimationend", temp);
        item.removeEventListener("animationend", temp);   
    });
    item.addEventListener("webkitAnimationEnd", temp = function(){
        item.style.opacity = 1;
        item.style.animation = "";
        item.style.webkitAnimation = "";
        item.removeEventListener("animationend", temp);
        item.removeEventListener("webkitAnimationend", temp);
    });
    
}
function dayFadeOut(item, time){
    
    item.style.animation = "dayOut 0.3s " + time / 100.0 + "s";
    item.style.webkitAnimation = "dayOut 0.3s " + time / 100.0 + "s";
    item.addEventListener("animationend", temp = function(){
        item.style.opacity = 0;
        item.style.animation = "";
        item.style.webkitAnimation = "";
        item.removeEventListener("webkitAnimationend", temp);
        item.removeEventListener("animationend", temp);
    });
    item.addEventListener("webkitAnimationEnd", temp = function(){
        item.style.opacity = 0;
        item.style.animation = "";
        item.style.webkitAnimation = "";
        item.removeEventListener("animationend", temp);
        item.removeEventListener("webkitAnimationend", temp);
    });
    
}
function popUp(dom){
    if(calendardisable) return;
    calendardisable = true;
    if(dom.id == "currentMonth"){
        var board = document.createElement("table");
        board.id = "chooseBoard";
        board.className = "popUp";
        board.style.tableLayout = "fixed";
        board.style.left = calendar.offsetLeft + "px";
        board.style.top = dom.offsetTop + dom.offsetHeight + "px";
        board.style.width = calendar.offsetWidth + "px";
        calendar.appendChild(board);
        for(var i = 0; i < 3; i ++){
            var line = document.createElement("tr");
            for(var j = 0; j < 4; j ++){
                var block = document.createElement("td");
                var id = i * 4 + j;
                block.id = id + 1;
                block.innerHTML = monthsCH[id];
                if(id == month) block.className = "selected";
                line.appendChild(block);
                block.addEventListener("click", function(event){
                    var item = event.target;
                    board.getElementsByClassName("selected")[0].className = "";
                    item.className = "selected";
                    chooseMonth(item, dom);
                }, false);
            }
            board.appendChild(line);
        }
    }else if(dom.id == "currentYear"){
        var board = document.createElement("table");
        board.id = "chooseBoard";
        board.className = "popUp";
        board.style.tableLayout = "fixed";
        board.style.left = calendar.offsetLeft + "px";
        board.style.top = dom.offsetTop + dom.offsetHeight + 15 + "px";
        board.style.width = calendar.offsetWidth + "px";
        calendar.appendChild(board);
        // 想想怎么显示
        var uparrow = document.createElement("div");
        uparrow.style.display = "table-cell";
        uparrow.style.verticalAlign = "middle";
        uparrow.colSpan = 5;
        uparrow.id = "uparrow";
        uparrow.innerHTML = '<svg fill="#009688" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">                        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/><path d="M0 0h24v24H0z" fill="none"/></svg>';
        uparrow.addEventListener("click", function(event){
            for(var i = 0; i < blocklist.length - 5; i ++){
                
                blocklist[i].style.animation = "moveDown 0.7s";
                blocklist[i].style.webkitAnimation = "moveDown 0.7s";
            }
            var changeup = function(){
                for(var i = 5; i > 0; i --){
                    for(var j = 0; j < 5; j ++){
                        blocklist[i * 5 + j].id = blocklist[(i - 1) * 5 + j].id;
                        blocklist[i * 5 + j].innerHTML = blocklist[(i - 1) * 5 + j].innerHTML;
                        if(blocklist[(i - 1) * 5 + j].className == "selected"){
                            blocklist[(i - 1) * 5 + j].className = "";
                            blocklist[i * 5 + j].className = "selected";
                        }else if(blocklist[i * 5 + j].className == "selected")
                            blocklist[i * 5 + j].className = "";
                    }
                }
                for(var j = 0; j < 5; j ++){
                    blocklist[j].id = blocklist[j + 5].id - 5;
                    blocklist[j].innerHTML = blocklist[j].id;
                }
                for(var i = 0; i < blocklist.length; i ++){
                    
                    blocklist[i].style.animation = "";
                    blocklist[i].style.webkitAnimation = "";
                }
                blocklist[0].removeEventListener("webkitAnimationEnd", changeup);
                blocklist[0].removeEventListener("animationend", changeup);
            }
            blocklist[0].addEventListener("animationend", changeup);
            blocklist[0].addEventListener("webkitAnimationEnd",changeup);
            
        },false);
        var upline = document.createElement("div");
        upline.appendChild(uparrow);
        upline.style.position = "absolute";
        upline.style.top = "0px";
        upline.style.height = "3em";
        upline.style.backgroundColor = "#FFFFFF";
        upline.style.width = board.offsetWidth - 20 + "px";
        upline.style.borderRadius = "1em";
        upline.style.borderWidth = 0;
        upline.style.display = "table";
        upline.style.zIndex = "5";
        upline.style.cursor = "pointer";
        upline.style.textAlign = "center";
        board.appendChild(upline);
        for(var i = 0; i < 6; i ++){
            var line = document.createElement("tr");
            for(var j = 0; j < 5; j ++){
                var block = document.createElement("td");
                line.appendChild(block);
                board.appendChild(line);
            }
        }
        var downarrow = document.createElement("div");
        downarrow.style.display = "table-cell";
        downarrow.style.verticalAlign = "middle";
        downarrow.colSpan = 5;
        downarrow.id = "downarrow";
        downarrow.innerHTML = '<svg fill="#009688" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"/><path d="M0-.75h24v24H0z" fill="none"/></svg>';
        downarrow.addEventListener("click", function(event){
            for(var i = 5; i < blocklist.length; i ++){
                blocklist[i].style.animation = "moveUp 0.7s";
                blocklist[i].style.webkitAnimation = "moveUp 0.7s";
            }
            var changedown = function(){
                
                for(var i = 0; i < 5; i ++){
                    for(var j = 0; j < 5; j ++){
                        blocklist[i * 5 + j].id = blocklist[(i + 1) * 5 + j].id;
                        blocklist[i * 5 + j].innerHTML = blocklist[(i + 1) * 5 + j].innerHTML;
                        if(blocklist[(i + 1) * 5 + j].className == "selected"){
                            blocklist[(i + 1) * 5 + j].className = "";
                            blocklist[i * 5 + j].className = "selected";
                        }else if(blocklist[i * 5 + j].className == "selected")
                            blocklist[i * 5 + j].className = "";
                    }
                }
                for(var j = 0; j < 5; j ++){
                    blocklist[25 + j].id = blocklist[20 + j].id - (-5);
                    blocklist[25 + j].innerHTML = blocklist[25 + j].id;
                }
                for(var i = 0; i < blocklist.length; i ++){
                    
                    blocklist[i].style.animation = "";
                    blocklist[i].style.webkitAnimation = "";
                }
                blocklist[29].removeEventListener("webkitAnimationEnd", changedown);
                blocklist[29].removeEventListener("animationend", changedown);
            }
            console.log(1);
            blocklist[29].addEventListener("animationend", changedown);
            blocklist[29].addEventListener("webkitAnimationEnd",changedown);
        },false);
        
        var downline = document.createElement("div");
        downline.appendChild(downarrow);
        downline.style.position = "absolute";
        downline.style.top = board.offsetHeight - upline.offsetHeight - 2 + "px";
        downline.style.height = "3em";
        downline.style.backgroundColor = "#FFFFFF";
        downline.style.width = board.offsetWidth - 20 + "px";
        downline.style.borderRadius = "1em";
        downline.style.borderWidth = 0;
        downline.style.display = "table";
        downline.style.zIndex = "5";
        downline.style.cursor = "pointer";
        downline.style.textAlign = "center";
        board.appendChild(downline);
        var blocklist = board.getElementsByTagName("td");
        for(var i = 1; i < blocklist.length; i ++){
            blocklist[i].style.opacity = 0;
        }
        curPos = 5 * 3 + year % 5;
        bfsSpread(curPos, blocklist)
    }
}
function chooseMonth(item, dom){
    var index = item.id - 1;
    changeupDate(year, index);
    calendar.removeChild(document.getElementById("chooseBoard"));
}
function chooseYear(item, dom){
    var index = item.id;
    changeupDate(index, month);
    calendar.removeChild(document.getElementById("chooseBoard"));
}
function bfsSpread(curPos, blocklist){
    var queue = new Queue();
    var levelqueue = new Queue();
    queue.Enqueue(curPos);
    levelqueue.Enqueue(0);
    while(queue.size != 0){
        var cur = queue.Dequeue();
        var level = levelqueue.Dequeue();
        if(cur == curPos) blocklist[cur].className = "selected";
        blocklist[cur].innerHTML = year + cur - curPos;
        blocklist[cur].id = year + cur - curPos;
        blocklist[cur].addEventListener("click", function(event){
            var target = event.target;
            calendar.getElementsByClassName("selected")[0].className = "";
            target.className = "selected";
            chooseYear(target, document.getElementById("currentYear"));
        },false);
        blocklist[cur].style.animation = "dayIn 0.5s " + level / 5.0 + "s";
        blocklist[cur].style.webkitAnimation = "dayIn 0.5s " + level / 5.0 + "s";
        blocklist[cur].addEventListener("animationend", function(event){
            var target = event.target;
            target.animation = "";
            target.webkitAnimation = ""
            target.style.opacity = 1;
        },false);
        blocklist[cur].addEventListener("webkitAnimationEnd", function(event){
            var target = event.target;
            target.animation = "";
            target.webkitAnimation = ""
            target.style.opacity = 1;
        },false);
        if(cur % 5 != 0 && blocklist[cur - 1] && blocklist[cur - 1].innerHTML == ""){
            queue.Enqueue(cur - 1);
            levelqueue.Enqueue(level + 1);
        }
        if(cur / 5 != 0 && blocklist[cur - 5] && blocklist[cur - 5].innerHTML == ""){
            queue.Enqueue(cur - 5);
            levelqueue.Enqueue(level + 1);
        }
        if(cur % 5 != 4 && blocklist[cur + 1] && blocklist[cur + 1].innerHTML == ""){
            queue.Enqueue(cur + 1);
            levelqueue.Enqueue(level + 1);
        }
        if(cur / 5 != 3 && blocklist[cur + 5] && blocklist[cur + 5].innerHTML == ""){
            queue.Enqueue(cur + 5);
            levelqueue.Enqueue(level + 1);
        }
    }
}