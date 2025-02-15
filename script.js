document.addEventListener("DOMContentLoaded", function() {
    console.log("Portfolio site loaded successfully!");
    fetchGitHubProjects();
});

// Dark mode toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// Fetch GitHub projects dynamically
function fetchGitHubProjects() {
    const username = "your-github-username"; // Replace with your GitHub username
    fetch(`https://api.github.com/users/${username}/repos`)
        .then(response => response.json())
        .then(data => {
            const projectContainer = document.getElementById("github-projects");
            projectContainer.innerHTML = "";
            data.forEach(repo => {
                const projectElement = document.createElement("div");
                projectElement.classList.add("project");
                projectElement.innerHTML = `
                    <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                    <p>${repo.description || "No description available."}</p>
                `;
                projectContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error("Error fetching GitHub projects:", error));
}
