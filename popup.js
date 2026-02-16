document.getElementById("extract").addEventListener("click", async () => {

    let [tab] = await chrome.tabs.query({
        active: true,
        currentWindow: true
    });

    chrome.tabs.sendMessage(tab.id, { action: "extractArticle" }, (response) => {

        if (response && response.text) {
            document.getElementById("result").innerText = response.text;
        } else {
            document.getElementById("result").innerText = "No article found.";
        }

    });
});
