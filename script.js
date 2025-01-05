const apiUrl = "https://api.github.com/repos/USERNAME/REPO_NAME/contents/about.html";
const token = ""; // Your GitHub personal access token

// The content for the new HTML page (e.g., about.html)
const aboutPageContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
</head>
<body>
    <h1>About Us</h1>
    <p>This is the about page of our website.</p>
</body>
</html>
`;

// Base64 encode the HTML content
const encodedContent = btoa(aboutPageContent);

const headers = {
    "Authorization": `token ${token}`,
    "Content-Type": "application/json",
};

const body = JSON.stringify({
    message: "Adding about.html page",  // Commit message
    content: encodedContent,  // Base64 encoded content
    branch: "main",  // The branch where the file will be uploaded
});

fetch(apiUrl, {
    method: 'PUT',
    headers: headers,
    body: body,
})
.then(response => response.json())
.then(data => {
    if (data.content) {
        console.log("New page (about.html) uploaded successfully");
    } else {
        console.log("Failed to upload the page", data);
    }
})
.catch(error => console.error("Error:", error));
