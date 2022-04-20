
function onLoadFunc() {
    fetch('./allPublished.json').then(response => response.json())
        .then(json => {
            const namesArray = json.titles;
            const workDetails = json.detail;
            
        });
}


function createTableBody(detail, titles) {
    const trElement = document.createElement('tr');
    const trNumber = document.createElement('td');
    const trTitle = document.createElement('td');
    const trUploadDate = document.createElement('td');
    const trIdols = document.createElement('td');
    const trSeries = document.createElement('td');
    const trPrimary = document.createElement('td');
    trNumber.style.textAlign = 'center';
    trTitle.style.textAlign = 'center';
    trUploadDate.style.textAlign = 'center';
    trIdols.style.textAlign = 'center';
    trSeries.style.textAlign = 'center';
    trPrimary.style.textAlign = 'center';
    trNumber.innerText = detail.number;
    trTitle.innerText = titles[detail.number - 1];
    trUploadDate.innerText = detail.pubDate;
    trIdols.innerText = detail.idols;
}
