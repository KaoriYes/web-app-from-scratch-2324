async function fetchDataAndRender() {
    try {
        const response = await fetch('./docs/data/eigenschappen.json');
        const data1 = await response.json();
        const data = data1.eend;
        const eend = data.favorieteDoelwit;
        console.log(eend);

        // Get reference to the <main> element
        const mainElement = document.querySelector('main');

        // Create a <div> element
        const divElement = document.createElement('div');

        // Create a <ul> element
        const ulElement = document.createElement('ul');

        // Iterate through the data and create <li> elements
        for (const key in data) {
            if (Object.hasOwnProperty.call(data, key)) {
                if (key === 'favorieteDoelwit') { // oi dit werkt niet, kan aan gewerkt worden
                    console.log("test")
                    const liElement = document.createElement('li');
                    liElement.textContent = `${key}: ${eend}`;
                    ulElement.appendChild(liElement);
                    continue;
                }
                else {
                    const liElement = document.createElement('li');
                    liElement.textContent = `${key}: ${data[key]}`;
                    ulElement.appendChild(liElement);
                }
            }
        }

        // Append the <ul> element to the <div> element
        divElement.appendChild(ulElement);

        // Append the <div> element to the <main> element
        mainElement.appendChild(divElement);
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchDataAndRender();
