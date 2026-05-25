import { React, useState } from 'react'

const UseSateWithPropsHw = ({ title ,image }) => {
    const [like, setLike] = useState(false);
    const [count, setCount] = useState(0);
    const handleLike = () => {
        if (!like) {
            setCount(count + 1);
        }
        else {
            setCount(count - 1);
        }
        setLike(!like);
    };
    return (
        <div className="container mt-5 d-flex justify-content-center">

            <div
                className="card border-0 shadow-lg rounded-4 overflow-hidden"
                style={{
                    width: "24rem",
                    transition: "0.3s"
                }}
            >

                {/* Image */}

                <img
                    src={image}
                    alt="post"
                    height="250"
                    style={{
                        objectFit: "cover"
                    }}
                />

                {/* Card Body */}

                <div className="card-body">

                    {/* Title */}

                    <h3 className="fw-bold text-dark mb-3">
                        {title}
                    </h3>

                    {/* Heart Section */}

                    <div className="d-flex justify-content-between align-items-center">

                        <button
                            className="btn border-0"
                            onClick={handleLike}
                            style={{
                                fontSize: "32px",
                                transition: "0.3s",
                                transform: like ? "scale(1.2)" : "scale(1)"
                            }}
                        >

                            <i
                                className={`bi ${like
                                    ? "bi-heart-fill text-danger"
                                    : "bi-heart"
                                    }`}
                            ></i>

                        </button>

                        <h5 className="text-secondary mt-2">
                            {count} Like
                        </h5>

                    </div>

                </div>

            </div>

        </div>

    )
}

export default UseSateWithPropsHw