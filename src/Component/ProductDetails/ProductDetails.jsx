import React, { useEffect, useState } from 'react';
import './ProductDetail.css'; // Link to your custom styles
import { products } from '../../Common/Data';
import { useParams } from 'react-router-dom';
import ResponsiveForm from '../Home/Formsubmission/Form';

const ProductDetail = () => {
    const [product, setproduct] = useState({})
    const { id } = useParams()


    const filterProduct = () => {
        const data = products.filter((data) => data.id === Number(id))
        setproduct(data[0])
    }

    useEffect(() => {
       filterProduct()
       // eslint-disable-next-line
    }, [id])


    const post2Styles = {
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        post2_img: {
            width: "100%",
            objectFit: "contain",
            filter: "brightness(50%)",
        },
        post2_h1: {
            color: "white",
            position: "absolute",
            fontSize: "3vw",
            zIndex: "555",
            textAlign: "center",
            fontWeight: "bold"
        },
    };
    return (
        <>
            <div className="row p-0 m-0 wow animate__animated animate__fadeIn">
                <div
                    className="col-12 p-0 m-0 position-relative"
                    style={post2Styles.container}
                >
                    <img
                        src={product.bannerImage}
                        alt="not found ...!"
                        className="img-fluid"
                        style={post2Styles.post2_img}
                    />
                    <h1 className="post_h1" style={post2Styles.post2_h1} dangerouslySetInnerHTML={{ __html: product.bannerTitle }}>
                    </h1>
                </div>
            </div>
            <div className="custom-product-container mt-5">
                <h2 className="custom-title text-center fw-bold mb-5" style={{ color: "#E31E24" }} >
                    {product.headingTitle}
                </h2>

                {
                    product?.category?.map((row, rowIndex) => rowIndex % 2 === 0 ? (
                        <div className="custom-grid row mt-5" key={rowIndex}>
                            {/* Product Image */}
                            <div className="col-lg-5 col-md-6 col-sm-12 d-flex justify-content-md-end justify-content-center mt-4 mt-lg-0 pe-4">
                                <img
                                    src={row.image}
                                    alt="Xport BGII"
                                    className="custom-product-image wow animate__animated animate__flipInX animate__slower 4s"
                                    width={"250px"}
                                />
                            </div>

                            {/* Product Details */}
                            <div className="col-lg-6 col-md-6 col-sm-12 d-flex justify-content-md-start justify-content-center mt-0 wow animate__animated animate__fadeInUp animate__slower	4s">
                                <div className='ps-4'>
                                    <h3 className="text-start custom-product-name fw-bold" style={{color:row.titleColor , fontWeight:'bold'}}>
                                        {row.title}
                                    </h3>
                                    <p className="text-start custom-product-subtitle fw-bold">
                                        {row.title2}
                                    </p>

                                    <ul className="text-start product-features fw-bolder">
                                        {row.content.map((data, i) => (
                                            <li key={i}>{data}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="custom-grid-reverse row mt-5 wow animate__animated animate__fadeInUp animate__slower	3s" key={rowIndex}>
                            {/* Product Details */}
                            <div className="col-lg-7 col-md-7 col-sm-12 d-flex justify-content-end">
                                <div className='pe-lg-4 ps-md-5 px-4'>
                                    <h3 className="text-start custom-product-name fw-bold" style={{color:row.titleColor , fontWeight:'bolder'}}>
                                        {row.title}
                                    </h3>
                                    <p className="text-start  custom-product-subtitle fw-bold">
                                        {row.title2}
                                    </p>

                                    <ul className="text-start product-features fw-bold">
                                        {row.content.map((data, i) => (
                                            <li key={i}>{data}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Product Image */}
                            <div className="col-lg-5 col-md-5 col-sm-12 d-flex justify-content-center justify-content-lg-start justify-content-sm-center mt-4 mt-lg-0 ps-4">
                                <img
                                    src={row.image}
                                    alt="Xport BGII"
                                    className="custom-product-image wow animate__animated animate__flipInX animate__slower	3s"
                                    width={"250px"}
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='mt-2'>
                <div className="row">
                    {product?.imageGroup?.map((img, i) => (
                        <div key={i} className={i%2 === 0 ? "col-12 col-md-6 justify-content-md-end justify-content-center d-flex my-2 custom-grid-reverse wow animate__animated animate__zoomIn" : "col-12 col-md-6 justify-content-md-start justify-content-center d-flex my-2 custom-grid wow animate__animated animate__zoomIn"}><img src={img} alt="Plant 1"  width={"350px"} height={"420px"}/></div>
                    ))}
                </div>
            </div>
            <ResponsiveForm />
        </>
    );
};

export default ProductDetail;
