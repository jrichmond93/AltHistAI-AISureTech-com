// Shared components loader for static HTML files
document.addEventListener('DOMContentLoaded', function() {
    
    // Function to load HTML content
    async function loadHTML(url, targetSelector) {
        try {
            const response = await fetch(url);
            const html = await response.text();
            const targetElement = document.querySelector(targetSelector);
            if (targetElement) {
                targetElement.innerHTML = html;
            }
        } catch (error) {
            console.warn(`Could not load ${url}:`, error);
        }
    }

    // Load shared components
    loadHTML('../includes/header.html', '[data-include="header"]');
    loadHTML('../includes/footer.html', '[data-include="footer"]');
});