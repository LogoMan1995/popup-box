document.addEventListener('DOMContentLoaded', () => {
    const showBtn = document.querySelector('#showbtn');
    const closeBtn = document.querySelector('#closebtn');
    const popup = document.querySelector('.popup');
    const subp = document.querySelector('#sub-p');

    showBtn.addEventListener('click', () => {
        showBtn.style.display = 'none';
        popup.style.display = 'block';
        subp.style.display = 'none';
        document.body.style.backgroundColor = 'red';
    });

    closeBtn.addEventListener('click', () => {
        showBtn.style.display = 'block';
        popup.style.display = 'none';
        subp.style.display = 'block';
        document.body.style.backgroundColor = '#09dbd450';
    });
});
