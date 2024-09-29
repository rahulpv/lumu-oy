# Chrome Web Plugin: H&M Product Information Extractor with Similar Product API Integration (React.js + TypeScript)

## Overview

This Chrome plugin, developed with React.js and TypeScript, extracts product information (Product Name, Price, and Product Image URL) from product pages on the H&M e-commerce website. It also integrates with an external API to find similar products based on the extracted data.

## Features

- **Product Information Extraction**: Extracts product name, price, and image URL from H&M product pages.
- **React-based Popup Interface**: Displays the extracted product details in a clean, React-powered popup interface.
- **API Integration for Similar Products**: Calls an external API using the extracted product information to find and display similar products.

## Technologies

- **Frontend**: React.js, TypeScript
- **Styling**: CSS Modules (or plain CSS)
- **API Integration**: External API for fetching similar products based on the extracted product data
- **Chrome Extensions API**: For handling plugin functionality

## Installation Instructions

1. **Download the Plugin**: Clone or download the repository files from the provided link.

2. **Build the Plugin**:
   - Navigate to the plugin directory.
   - Run `npm install` to install the dependencies.
   - Run `npm run build` to compile the TypeScript and React code into the `/build` folder.

3. **Load the Plugin in Chrome**:
   - Open Chrome and navigate to `chrome://extensions/`.
   - Enable `Developer mode` by toggling the switch in the top right corner.
   - Click `Load unpacked` and select the `/build` folder containing the compiled plugin files.

4. **Use the Plugin**:
   - Navigate to a product page on the H&M website.
   - Click the plugin icon in the Chrome toolbar.
   - The React popup will display the product name, price, image, and similar products retrieved through the API.

## API Integration for Similar Products

This plugin includes an API integration to find similar products based on the extracted product data. The API key is securely embedded in the plugin code.

- **API Endpoint**: [API URL]
- **API Key**: The API key is included in the plugin for fetching similar products.

## Development

1. **Setup**:
   - Clone the repository.
   - Run `npm install` to install dependencies.

2. **Running the Plugin in Development**:
   - Use `npm run dev` to start the development server.
   - You can test the plugin while it's running in development mode.

3. **Building for Production**:
   - Run `npm run build` to compile the project into the `/build` folder for distribution.

## Files Included

- **manifest.json**: Chrome plugin configuration file.
- **src/**: Contains the React.js and TypeScript source files.
  - **popup.tsx**: React component for the popup interface.
  - **contentScript.ts**: Handles extraction of product information from the H&M website.
  - **api.ts**: Manages API calls for fetching similar products.
  - **styles/**: CSS files or modules for styling the popup UI.
- **build/**: Compiled plugin files ready for use in the Chrome browser.

## Example

1. Navigate to a product page on H&M.
2. Click the plugin icon in the Chrome toolbar.
3. The React popup will display the product name, price, image, and similar products retrieved via the API.
