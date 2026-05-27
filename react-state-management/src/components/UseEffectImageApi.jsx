import { React, useEffect, useState } from 'react'

const UseEffectImageApi = () => {

    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products")
            .then((res) => res.json())
            .then((data) => {
                setProduct(data.products.slice(0 , 15));
            });
    }, []);

    return (
        <div className="container" style={{ border: "1px solid blue", borderRadius: "5px", padding: "10px" }}>  
            <div className="container mt-4">
                <h2 className="text-center text-primary fw-bold mb-4">Product Cards API </h2>
                <div className="row">
                    {
                        products.map((p) => (
                            <div className="col-md-4 mb-4 " key={p.id}>
                                <div className="card shadow-lg border-0 rounded-4 h-100 product-card" style={{ overflow: "hidden", transition: "0.3s"}}>
                                    <img
                                        src={p.thumbnail}
                                        alt="product"
                                        className="card-img-top"
                                        height="220px"
                                        style={{objectFit: "cover"}}
                                    />

                                    {/* Card Body */}
                                    <div className="card-body text-center">
                                        <h4 className="fw-bold">{p.title}</h4>
                                        <h6 className="text-secondary text-uppercase">{p.category}</h6>
                                        <h5 className="text-success mt-3">₹ {p.price}</h5>
                                        <button className="btn btn-primary w-100 rounded-pill mt-3 fw-bold">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default UseEffectImageApi