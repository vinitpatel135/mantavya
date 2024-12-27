import React from 'react';
import './ProductList.css'; // CSS for styling the background and layout

const products = [
    { id: 1, name: 'કપાસ', image: '/images/product1.png' },
    { id: 2, name: 'મગફળી', image: '/images/product2.png' },
    { id: 3, name: 'જીરૂ', image: '/images/product3.png' },
    { id: 4, name: 'ભીંડા', image: '/images/product4.png' },
    { id: 5, name: 'ચીકુ', image: '/images/product5.png' },
    { id: 6, name: 'ટમાટર', image: '/images/product6.png' },
    { id: 7, name: 'ધાણા', image: '/images/product7.png' },
    // Add more products as needed
];

const ProductList = () => {
    return (
        <div className="product-container">
            <h2>મંતવ્યા સીડ્સ ના બિયારણ ઉત્પાદનો</h2>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <img src={product.image} alt={product.name} className="product-image" />
                        <h3>{product.name}</h3>
                        <button className="buy-button">ખરીદ કરો</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductList;
