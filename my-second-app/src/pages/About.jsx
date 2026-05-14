import aboutImage from "../assets/imag1.jpeg";
const About = () => {
    return(
        <>
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p >About Us</p>
                        <p >Welcome to our cafe! We are passionate about serving high-quality coffee and creating a warm and inviting atmosphere for our customers. Our cafe is a place where you can relax, socialize, and enjoy a delicious cup of coffee or tea.</p>
                    </div>
                    <div className="col-md-6 m-4t-0 p-4 rounded shadow ">
                        <img  src={aboutImage} alt="About Us" className="img-fluid w-50"></img>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}
export default About;