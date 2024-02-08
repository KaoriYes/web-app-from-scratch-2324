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


//HIer ga ik even naar kijken, dit omschrijven naar articles voor de weekly nerd.
// function weeklyNerd() {
//     var mdDivs = document.querySelectorAll("[data-md-file]"); // Get all elements with 'data-md-file' attribute.
//
//     mdDivs.forEach(function(mdDiv) {
//         var mdFile = mdDiv.getAttribute("data-md-file"); // Get the Markdown file path from the data attribute.
//
//         fetch(mdFile)
//             .then(response => response.text())
//             .then(mdText => {
//                  // Convert Markdown to HTML using marked.js
//                 // Replace the content of the current div with the HTML generated from Markdown.
//                 mdDiv.innerHTML = marked(mdText);
//             })
//             .catch(error => {
//                 console.error('Error fetching Markdown file:', error);
//             });
//     });
// }
//
// weeklyNerd();
