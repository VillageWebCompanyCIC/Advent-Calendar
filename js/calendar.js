function clearCalendar(days){
    days.forEach(day => {
        day.innerHTML = " ";
        day.className = "day no-date";
    });
}

function generateCalendar(today, daysInMonth,days){
    clearCalendar(days);
    var firstDay = new Date(today.year, today.month, 1);

    for (var i = 1; i <= daysInMonth; i++){
        days[i + firstDay.getDay() - 1].innerHTML = i;

        if (i > today.day){
            days[i + firstDay.getDay() - 1].className = "day future";
            days[i + firstDay.getDay() - 1].addEventListener('click', (e) => {
                alert('You are not allowed to open future days, please wait until that day')
            });
        }
        else if (i === today.day){
            days[i + firstDay.getDay() - 1].className = "day today";
            days[i + firstDay.getDay() - 1].addEventListener('click', (e) => {
                openBox(e.target.innerHTML - 1);
            });
        }
        else{
            days[i + firstDay.getDay() - 1].className = "day past"; 
            days[i + firstDay.getDay() - 1].addEventListener('click', (e) => {
                openBox(e.target.innerHTML - 1);
            });
        }
    }
}

window.addEventListener('load', () =>{
    //if you want to change the date, remember that months is 0-indexed which means that 0 is equal to january
    var date = new Date();
    var today = {
        'dayOfWeek':date.getDay(),
        'day': date.getDate(),
        'month': date.getMonth(),
        'year':date.getFullYear(),
    }
    var daysInMonth = new Date(today.year, today.month + 1, 0).getDate(); 

    var days = document.querySelectorAll('.day');

    generateCalendar(today,daysInMonth,days);
})