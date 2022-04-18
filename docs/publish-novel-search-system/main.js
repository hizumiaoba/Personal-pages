function readAllPublished() {
    const json = require('./allPublished.json');
    let allPubsElement = json.name;
    let allPubs = [];
    for (let i = 0; i < allPubsElement.length; i++) {
        allPubs.push(allPubsElement[i]);
    }
}