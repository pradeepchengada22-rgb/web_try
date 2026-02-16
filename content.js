function extractFullPage() {

    // Get all visible text from webpage
    let text = document.body.innerText;

    // Remove extra spaces
    text = text.replace(/\s+/g, " ").trim();

    // Limit size (important for future backend)
    return text.slice(0, 10000);
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {

    if (request.action === "extractArticle") {

        let text = extractFullPage();

        if (text.length > 50) {
            sendResponse({ text: text });
        } else {
            sendResponse({ text: null });
        }
    }
});
