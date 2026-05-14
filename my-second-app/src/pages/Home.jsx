const Home = () => {
    return (
        <>
            <section>
                <div className="container bg-gradient mt-4 bottom-50">
                    <div className="row">
                        <div className="col-md-6 bg-gradient p-4 rounded shadow pl-4 bottom-50">
                            <h2>Cafe</h2>
                            <p>Welcome to our cozy cafe! We serve a variety of delicious coffee and tea, along with freshly baked pastries. Whether you're looking for a quiet place to work or a spot to catch up with friends, our cafe is the perfect destination. Come in and enjoy a warm cup of your favorite beverage!</p>
                            <p>Our menu includes classic espresso drinks, refreshing iced teas, and a selection of sweet and savory pastries. We pride ourselves on using high-quality ingredients and providing excellent customer service. Stop by today and experience the inviting atmosphere of our cafe!</p>
                            <p>We also offer free Wi-Fi and comfortable seating, making it an ideal spot for remote work or studying. Whether you're in the mood for a quick pick-me-up or a leisurely afternoon, our cafe has something for everyone. We look forward to welcoming you soon!</p>
                        </div>
                            <div className="col-md-6 text-center bg-gradient p-4 rounded shadow m-5t-0 bottom-50">
                            <img
                                src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=500&q=60"
                                alt="Cafe"
                                className="img-fluid rounded shadow"
                                style={{
                                    width: "400px",
                                    height: "400px",
                                    objectFit: "cover"
                                }}
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Home;