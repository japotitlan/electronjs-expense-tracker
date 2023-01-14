const addButton = document.getElementById('addButton');

const inputWhere = document.getElementById('inputWhere');
const inputWhen = document.getElementById('inputWhen');
const inputAmount = document.getElementById('inputAmount');

const container = document.getElementById('container');


addButton.addEventListener('click', () => {

    //if (inputWhere.value == '') return;
    
    const whereTD = document.createElement('td');
    const whenTD = document.createElement('td');
    const amountTD = document.createElement('td');
    const closebtn = document.createElement('button');
    const closeTD = document.createElement('td');

    closebtn.setAttribute("type","button");
    closebtn.setAttribute("id","closebtn");
    closebtn.setAttribute("class","btn-close btn-close-white");
    closeTD.append(closebtn);
    
    whereTD.innerText = inputWhere.value;
    whenTD.innerText = inputWhen.value;
    amountTD.innerText = '$' + inputAmount.value;

    const containerRow = document.createElement('tr');
    containerRow.setAttribute("id","containerRow");
    containerRow.append(whereTD,whenTD,amountTD,closeTD);

    container.appendChild(containerRow);

    inputWhere.value = '';
    inputWhen.value = '';
    inputAmount.value = '';

    closebtn.addEventListener('click', () => {
        container.removeChild(containerRow);
    });
});



