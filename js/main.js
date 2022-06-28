const lists = document.querySelectorAll('.list');

function addTask() {
    const btn = document.querySelector('.add__btn'),
        addBtn = document.querySelector('.add__item-btn'),
        cancelBtn = document.querySelector('.cancel__item-btn'),
        textarea = document.querySelector('.textarea'),
        form = document.querySelector('.form');

    let value;

    btn.addEventListener('click', () => {
        form.style.display = 'block';
        addBtn.style.display = 'none';
        btn.style.display = 'none';

        textarea.addEventListener('input', e => {
            value = e.target.value;
            if(value) {
                addBtn.style.display = 'block';
            } else {
                addBtn.style.display = 'none';
            }
        });
    });

    cancelBtn.addEventListener('click', () => {
        textarea.value = '';
        value = '';
        form.style.display = '';
        btn.style.display = 'block';

    });
}
addTask();
