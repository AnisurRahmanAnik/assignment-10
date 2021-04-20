import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductSection = () => {

    
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://hidden-caverns-93002.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    return (
        <div>

            <div className="row">
                {
                    product.map(product => <ProductCard product={product}></ProductCard> )
                }
            </div>
            
        </div>
    );
};

export default ProductSection;