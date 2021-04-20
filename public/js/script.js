const viewResBtn = document.getElementById('view-btn');
const makeResBtn = document.getElementById('res-btn');
const tableNum = document.getElementById('table-num')
const idEl = document.getElementById('id');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const phoneEl = document.getElementById('phone');


viewResBtn.addEventListener('click', () => {
    let viewTables = document
    .getElementById('res-info')
    .value.trim();
    alert('Your table has been reserved!');
    viewTables = viewTables.replace(/\s+/g, '').toLowerCase();

    fetch(`/api/tables/${viewTables}`, {
        method: 'GET',
        headers: {
            'content-Type': 'application/json',
        },
    })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            const { id, name, email, phone } = data;
            if (data) {
                tableNum.setAttribute('style', 'display: inline');
                idEl.textContent = id;
                nameEl.textContent = name;
                emailEl.textContent = email;
                phoneEl.textContent = phone;
            } else {
                idEl.textContent = 'Oh noaarrrr';
                tableNum.setAttribute('style', 'display:none');
            }
        })
        .catch((error) => {
            console.erro(error);
        });
});