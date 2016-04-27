var calendar;
var previousYear, currentYear, nextYear;
var currentMonth;
var year, month, today;
var days, daylist = [];
var months = ["一月 January","二月 February","三月 March","四月 April",
"五月 May","六月 June","七月 July","八月 August","九月 September",
"十月 October","十一月 November","十二月 December"];
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
    var monthChanged = false;
    while(i < daylist.length){
        firstday = new Date(firstday.setDate(num));
        daylist[i].innerHTML = firstday.getDate();
        if(num - firstday.getDate() > 0) monthChanged = true;
        if(daylist[i].className == "today"){
                if(firstday.getDay() == 0 || firstday.getDay() == 6){
                    daylist[i].className = "weekends";
                }else{
                    daylist[i].className = "this-month";
                }
        }else if(daylist[i].className != "weekends"){
            if(monthChanged) daylist[i].className = "other-month";
            else daylist[i].className = "this-month";
        }
        if(num == today) daylist[i].className = "today";
        
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
function changeDate(newYear,newMonth){
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
}
function premonth(){
    if(!calendardisable){
        calendardisable = true;
        changeDate(year, month - 1);
        currentMonth.innerHTML = months[month];
        previousYear.innerHTML = year - 1;
        currentYear.innerHTML = year;
        nextYear.innerHTML = year + 1;
    }
    
}
function nextmonth(){
    if(!calendardisable){
        calendardisable = true;
        changeDate(year, month + 1);
        currentMonth.innerHTML = months[month];
        previousYear.innerHTML = year - 1;
        currentYear.innerHTML = year;
        nextYear.innerHTML = year + 1;
    }
}
function preyear(){
    if(!calendardisable){
        calendardisable = true;
        changeDate(year - 1, month);
        currentMonth.innerHTML = months[month];
        previousYear.innerHTML = year - 1;
        currentYear.innerHTML = year;
        nextYear.innerHTML = year + 1;
    }
}
function nextyear(){
    if(!calendardisable){
        calendardisable = true;
        changeDate(year + 1, month);
        currentMonth.innerHTML = months[month];
        previousYear.innerHTML = year - 1;
        currentYear.innerHTML = year;
        nextYear.innerHTML = year + 1;
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