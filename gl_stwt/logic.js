window.addEventListener('DOMContentLoaded', function (event) {
    window.glstwt = {
        main: document.getElementById('content'),
        scrollElem: document.head.parentElement,
    };

    const convertTime = function (time) {
        if (('' + time).length < 2) {
            return '0' + time;
        }
        return time;
    }

    let add = function () {
        const now = new Date();
        const row = document.createElement('div');
        row.className = 'time-row';
        const time = document.createElement('span');
        time.innerHTML = now.getHours() + ':' + convertTime(now.getMinutes()) + ':' + convertTime(now.getSeconds());
        row.append(time);
        const divider = document.createElement('div');
        divider.className = 'divider';
        glstwt.main.append(row, divider);
        glstwt.scrollElem.scrollTo({
            left: 0,
            top: glstwt.scrollElem.scrollHeight,
            behavior: 'smooth',
        });
    };
    document.getElementById('add-button').addEventListener('click', add);
});