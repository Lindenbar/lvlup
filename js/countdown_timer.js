if (document.querySelector('.timer__box')) {
    //Исправить отрицательное знаечние при перезагрузке страницы на 0 diff
    let hours = 0; // 0 min value 24 max value.
    let minutes = 30; // 0 min value 59 max value.
    let seconds = 0; // 0 min value 59 max value.
    let saveTime = false; // save time after reload.

    const milliseconds = 1000;

    let hoursBox = document.querySelector('.timer__countdown .timer__hours');
    let minutesBox = document.querySelector('.timer__countdown .timer__minutes');
    let secondsBox = document.querySelector('.timer__countdown .timer__seconds');

    let nowDate = new Date();
    let endDate = new Date (nowDate.getTime() + (hours * 3600 * 24 * milliseconds) +
        (minutes * 60 * milliseconds) + (seconds * milliseconds));
    let diff = endDate - nowDate;

    if (localStorage.getItem('timeDifference')  && saveTime) {
        diff = localStorage.getItem('timeDifference');
        calcTime();
    } else {
        localStorage.removeItem('timeDifference');
    }

    addZeroAndViewSelected();

    let timer = setInterval(() => {

        diff -= milliseconds;
        localStorage.setItem('timeDifference',diff);

        calcTime();
        addZeroAndViewSelected();

        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearTimeout(timer);
        }

    }, milliseconds);

    function calcTime() {
        hours = Math.floor(diff / milliseconds / 3600 / 24);
        minutes = Math.floor(diff / milliseconds / 60) % 60;
        seconds = Math.floor(diff / milliseconds) % 60;
    }

    function addZeroAndView(number, viewBox) {
        number < 10 ? viewBox.innerHTML = '0' + String(number) :  viewBox.innerHTML = String(number);
    }

    function addZeroAndViewSelected() {
        addZeroAndView(hours, hoursBox);
        addZeroAndView(minutes, minutesBox);
        addZeroAndView(seconds, secondsBox);
    }
}

/* minimal HTML construction

    <div class="countdown-timer">
        <div class="hours"></div>
        <div class="minutes"></div>
        <div class="seconds"></div>
    </div>

 */