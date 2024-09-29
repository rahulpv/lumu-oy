import React, { useEffect, useState } from 'react';
import axios from "axios";

interface ProductInfo {
    productName: string;
    productPrice: string;
    productImageUrl: string;
}

interface SimilarProduct {
    product_title: string;
    product_photos: string[];
    typical_price_range: string[];
}

const Popup: React.FC = () => {
    const [productInfo, setProductInfo] = useState<ProductInfo | null>(null);
    const [similarProducts, setSimilarProducts] = useState<SimilarProduct[] | null>(null);


    // Function to fetch product information
    const fetchProductInfo = () => {


        chrome.runtime.sendMessage('getProductInfo', (response) => {

            if (response?.productName && response?.productPrice && response?.productImageUrl) {
                setProductInfo({
                    productName: response.productName,
                    productPrice: response.productPrice,
                    productImageUrl: response.productImageUrl,
                });

                fetchSimilarProducts(response.productName);

            } else {
                console.error('No product information found in background script.');
            }
        });
    };


    useEffect(() => {
        fetchProductInfo();

    }, []);


    // Function to fetch product information
    const fetchSimilarProducts = async (productName: string) => {



        if(productName){
            const options = {
                method: 'GET',
                url: 'https://real-time-product-search.p.rapidapi.com/search-v2',
                params: {
                    q: productName,
                    country: 'us',
                    language: 'en',
                    page: '1',
                    limit: '10',
                    sort_by: 'BEST_MATCH',
                    product_condition: 'ANY'
                },
                headers: {
                    'x-rapidapi-key': '009dbfba61msh17516e17752f006p15d864jsn5d3752eaafd7',
                    'x-rapidapi-host': 'real-time-product-search.p.rapidapi.com'
                }
            };
            try {
                const response = await axios.request(options);
                setSimilarProducts(response.data.data.products)
            } catch (error) {
                console.error(error);
            }
        }


    };



    return (
        <div style={{width: '500px', height: '450px', overflow: 'scroll'}}>
            <div className="row">


                <div className="col-6 d-flex justify-content-center">
                    {productInfo ? (

                        <div className="card">

                            <h6 className={`p-1`}>Lumu Oy Product Info</h6>
                            <div className="image-container">

                                <img src={productInfo.productImageUrl}
                                     className="img-fluid rounded thumbnail-image"/>


                            </div>


                            <div className="product-detail-container p-2">

                                <div className="d-flex justify-content-between ">

                                    <h5 className="dress-name">{productInfo.productName}</h5>

                                    <div className="d-flex flex-column mb-2">

                                        <span className="new-price">{productInfo.productPrice}</span>
                                    </div>

                                </div>


                            </div>

                        </div>

                    ) : (
                        <p>No product information found.</p>
                    )}
                </div>
                <div className="col-6" style={{ height:'450px', overflow:'scroll'}}>

                    <h6 className={`p-1`}>Lumu Oy Similar Products</h6>

                    {similarProducts !== null ? similarProducts?.map((product) => {


                            return (
                                <div className="card mt-2">
                                    <div className="image-container">

                                        <img src={product.product_photos[0]}
                                             className="img-fluid rounded thumbnail-image"/>


                                    </div>


                                    <div className="product-detail-container p-2">

                                        <div className="d-flex justify-content-between ">

                                            <h5 className="dress-name">{product.product_title}</h5>

                                            <div className="d-flex flex-column mb-2">


                                                <span
                                                    className="new-price">{product.typical_price_range && product.typical_price_range.length ? product.typical_price_range[0] : 'No price found'}</span>

                                            </div>

                                        </div>


                                    </div>

                                </div>
                            )
                        }) :

                        <div  className={`d-flex justify-content-center`}>

                            <div className="spinner-border text-primary" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </div>
                    }
                </div>


            </div>


        </div>
    );
};

export default Popup;
