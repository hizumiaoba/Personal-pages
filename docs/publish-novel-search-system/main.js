
document.onload = function() {
    const allPubs = readAllPublished();
    const tbodyElement = document.getElementById('tbody');
    for (let i = 0; i < allPubs.length; i++) {
        tbodyElement.appendChild(createTableBody(allPubs[i]));
    }
}

function readAllPublished() {
    const json = require('./allPublished.json');
    let allPubsElement = json.name;
    let allPubs = [];
    for (let i = 0; i < allPubsElement.length; i++) {
        allPubs.push(allPubsElement[i]);
    }
    return allPubs;
}

function createTableBody(detail) {
    const trElement = document.createElement('tr');
    const trNumber = document.createElement('td');
    const trName = document.createElement('td');
    const trTitle = document.createElement('td');
    const trUploadDate = document.createElement('td');
    const trIdols = document.createElement('td');
    const trSeries = document.createElement('td');
    const trPrimary = document.createElement('td');
    trNumber.style.textAlign = 'center';
    trName.style.textAlign = 'center';
    trTitle.style.textAlign = 'center';
    trUploadDate.style.textAlign = 'center';
    trIdols.style.textAlign = 'center';
    trSeries.style.textAlign = 'center';
    trPrimary.style.textAlign = 'center';
    trNumber.innerHTML = detail.number;
}
