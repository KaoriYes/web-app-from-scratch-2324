console.log('Hello from the index.js file');
async function fetchData() {
    try {
        const response = await fetch( './data/eigenschappen.json');
        // console.log(data);
        return await response.json();
    } catch (error) {
        console.error("Error:", error);
    }
}

fetchData().then(data => console.log(data.eend));

// fetch('../readme.md')
//     .then(response => response.text())
//     .then(result => {
//         console.log(result); // Log the fetched content
//         document.getElementById('content').innerHTML = result; // Set the content
//     });






//HIer ga ik even naar kijken, dit omschrijven naar articles voor de weekly nerd.
//document.body.style.display = "none"; // Hide the page until it's finished rendering.
//
// document.createElement("markdown");
// var md_tags = document.getElementsByTagName("markdown"); // Returns array of all markdown tags.
//
// for (var i = 0; i < md_tags.length; i++) { // Iterate through all the tags, and generate the HTML.
//     var md_text = md_tags[i].textContent.replace(/^[^\S\n]+/mg, ""); // I love regex, so shoot me.
//
//     var md_div = document.createElement("div"); // Make a new div to replace the fake tag.
//     md_div.id = "content";
//     md_div.innerHTML = marked(md_text);
//
//     md_tags[i].parentNode.appendChild(md_div); // Add remove the old raw markdown.
//     md_tags[i].parentNode.removeChild(md_tags[i]);
// }
//
// document.body.style.display = ""; // Show the rendered page.
