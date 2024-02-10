// console.log('Hello from the index.js file');
async function fetchData() {
    try {
        const response = await fetch('./data/eigenschappen.json');
        // console.log(data);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData().then(data => console.log(data.eend));

// fetch('./uploads/Weeklynerd_1.md')
//     .then(response => response.text())
//     .then(result => {
//         console.log(result); // Log the fetched content
//         document.getElementById('content').innerHTML = result; // Set the content
//     });



