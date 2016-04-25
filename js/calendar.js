var calendar;
var previousYear, currentYear, nextYear;
var currentMonth;
var year, month, today;
var days, daylist = [];
var months = ["January","February","March","April","May","June","July","August","September","October",
"November","December"];

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
    var firstday = new Date(date.setDate(1));
    var first = firstday.getDay();
    var num = 1;
    var i = first;
    while(i < daylist.length){
        firstday = new Date(firstday.setDate(num));
        daylist[i].innerHTML = firstday.getDate();
        if(daylist[i].className != "weekends"){
            daylist[i].className = "this-month";
        }
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
    previousYear.innerHTML = year - 1;
    currentYear.innerHTML = year;
    nextYear.innerHTML = year + 1;
    
    currentMonth.innerHTML = months[month];
}