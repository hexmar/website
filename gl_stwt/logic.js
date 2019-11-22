window.addEventListener('DOMContentLoaded', function (event) {
    window.glstwt = {
        main: document.getElementById('content'),
        scrollElem: document.head.parentElement,
        lastAddedDate: new Date(0),
    };

    const convertTime = function (time) {
        if (('' + time).length < 2) {
            return '0' + time;
        }
        return time;
    }

    function createDivider() {
        const divider = document.createElement('div');
        divider.className = 'divider';
        return divider;
    }
    
    function createTimeRow(date) {
        const row = document.createElement('div');
        row.className = 'time-row';
        const time = document.createElement('span');
        time.innerHTML = date.getHours() + ':' + convertTime(date.getMinutes()) + ':' + convertTime(date.getSeconds());
        row.append(time);
        return row;
    }
    
    function createDateRow(date) {
        const row = document.createElement('div');
        row.className = 'date-row';
        const time = document.createElement('span');
        time.innerHTML = date.getDate() + '.' + (date.getMonth() + 1) + '.' + date.getFullYear();
        row.append(time);
        return row;
    }
    
    function isAfterLastDate(date) {}

    let add = function () {
        const now = new Date();
        const row = createTimeRow(now);
        const divider = createDivider();
        {
            let currentDate = new Date(
                now.getFullYear(),
                now.getMonth(),
                now.getDate());
        }
        glstwt.main.append(row, divider);
        glstwt.scrollElem.scrollTo({
            left: 0,
            top: glstwt.scrollElem.scrollHeight,
            behavior: 'smooth',
        });
    };
    document.getElementById('add-button').addEventListener('click', add);
});
