const apiUrl = "https://api.github.com/repos/USERNAME/REPO_NAME/contents/index.html";
const token = "YOUR_PERSONAL_ACCESS_TOKEN"; // Personal access token
const htmlContent = "<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>My Website</title></head><body><h1>Hello, World!</h1></body></html>";

// Base64 encode the HTML content
const encodedContent = btoa(htmlContent);

const headers = {
    "Authorization": `token ${token}`,
    "Content-Type": "application/json",
};

const body = JSON.stringify({
    message: "Adding index.html",
    content: encodedContent,
    branch: "main"
});

fetch(apiUrl, {
    method: 'PUT',
    headers: headers,
    body: body
})
.then(response => response.json())
.then(data => {
    if (data.content) {
        console.log("HTML file uploaded successfully");
    } else {
        console.log("Failed to upload HTML file", data);
    }
})
.catch(error => console.error("Error:", error));
