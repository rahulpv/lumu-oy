let productInfo = null;

// Listen for messages from the content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.productName && message.productPrice && message.productImageUrl) {
        productInfo = message; // Store the product information
        console.log("Product information stored in background script:", productInfo);
    }

    // Respond to popup's request for product info
    if (message === 'getProductInfo' && productInfo) {
        sendResponse(productInfo); // Send the stored product information to the popup
    }
});
