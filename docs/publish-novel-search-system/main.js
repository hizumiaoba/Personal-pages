
function onLoadFunc() {
    fetch('./allPublished.json').then(response => response.json())
        .then(json => {
            const namesArray = json.titles;
            const workDetails = json.detail;
            const links = json.links;
            for(let i = 0; i < namesArray.length; i++) {
                const trElement = createTableBody(workDetails, links, i);
                document.getElementById('detailTable').appendChild(trElement);
            }
        });
}


function createTableBody(detail, links, num) {
    console.log(num);
    console.log(detail);
    const index = num + 1;
    var link = document.createElement('a');
    link.setAttribute('href', links[num]);
    const trElement = document.createElement('tr');
    const tdNumber = document.createElement('td');
    const tdTitle = document.createElement('td');
    const tdUploadDate = document.createElement('td');
    const tdIdols = document.createElement('td');
    const tdSeries = document.createElement('td');
    const tdPrimary = document.createElement('td');
    tdNumber.style.textAlign = 'center';
    tdTitle.style.textAlign = 'center';
    tdTitle.id = 'title-' + index;
    tdUploadDate.style.textAlign = 'center';
    tdIdols.style.textAlign = 'center';
    tdSeries.style.textAlign = 'center';
    tdPrimary.style.textAlign = 'center';
    tdNumber.innerText = index;
    link.innerText = detail[num].title;
    tdTitle.append(link);
    tdUploadDate.innerText = detail[num].pubDate;
    tdIdols.innerText = detail[num].idols.toString().replaceAll(",", ", ");
    tdSeries.innerText = detail[num].series;
    var primary = detail[num].primary;
    tdPrimary.innerText = primary.toString().replaceAll(",", "\n");
    trElement.appendChild(tdNumber);
    trElement.appendChild(tdTitle);
    trElement.appendChild(tdUploadDate);
    trElement.appendChild(tdIdols);
    trElement.appendChild(tdSeries);
    trElement.appendChild(tdPrimary);
    console.log(trElement);

    return trElement;
}
