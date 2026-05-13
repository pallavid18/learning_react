import HomeImage from "../assets/images/img3.jpg";

const Home = () => {
    return (
        <>
        <section id="home" className="md-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h1>Welcome to my Resume</h1>
                        <p>This is a simple resume built with React.</p>
                        <p>I am a software developer with experience in React, Node.js, and MongoDB. I have a passion for building web applications and learning new technologies.
                        </p>
                        <p>Feel free to contact me if you have any questions or would like to work together.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus consequatur vel maiores? Culpa minus, praesentium quia repudiandae quis impedit error ex nisi tempore aliquid corporis numquam maxime in laudantium.</p>
                    </div>
                    <div className="col-md-6">
                        <img className="img-fluid" src={HomeImage} alt="HomeIamge"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;