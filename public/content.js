(function () {
    // Function to extract the product information
    function extractProductInfo() {
        // Ensure we are on https://www2.hm.com/
        if (window.location.href.startsWith('https://www2.hm.com/')) {
            // Extract product name
            const productNameElement = document.querySelector('hm-product-name#js-product-name');
            const productName = productNameElement ? productNameElement.getAttribute('product-name') : 'Product name not found';

            // Extract product price
            const productPriceElement = document.querySelector('hm-product-price');
            let productPrice = 'Price not found';

            if (productPriceElement) {
                // Try to get the 'yellow-price' attribute
                productPrice = productPriceElement.getAttribute('yellow-price');

                // If the attribute is not found, get the content of the 'span' element inside
                if (!productPrice) {
                    const spanElement = productPriceElement.querySelector('span');

                    console.log("spanElement",spanElement)
                    productPrice = spanElement ? spanElement.textContent : 'Price not found';
                }
            }


            // Extract product image URL
            const productImageElement = document.querySelector('.product-detail-main-image-container img');
            const productImageUrl = productImageElement ? productImageElement.src : 'Image URL not found';

            // Send the extracted information to the popup
            console.log('Sending product info:', { productName, productPrice, productImageUrl });
            chrome.runtime.sendMessage({
                productName,
                productPrice,
                productImageUrl,
            });
        } else {
            console.error('This script only works on https://www2.hm.com/ pages.');
        }
    }

    // Wait for the page to fully load before running the extraction
    window.addEventListener('load', extractProductInfo);
})();
