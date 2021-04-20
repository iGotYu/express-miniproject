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

        $.post("/tables", newTable)
        .then(function (data) {
            let reservation = data.reservation;
            let counter = 0;

            reservations.forEach(element => {
                counter++;

                if (counter <= 5) {
                    let tableList = `${tableWell} + counter`;
                    tableList.append(createTable(element, counter)); 
                } else {
                    let waitlist = $("#waitlistSection");
                    waitlist.append(createTable(element, counter));
                }
            });
            alert("Adding your reservation...");
        });
});

