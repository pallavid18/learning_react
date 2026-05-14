import HomeImage from "../assets/images/img3.jpg";
// import "./Home.css";
import style from "../components/Home.module.css";

// Internal  CSS outside the function 
const paragraphColor={
    color:"aqua",
    background:"burlywood",
    padding:"10px",
    borderRadius:"5px"

}

const Home = () => {

    //internal css inside the function
    const headingStyle={
        color:"blue",
        background:"burlywood",
        padding:"10px",
        borderRadius:"5px"
    }

    return (
        <>
        <section id="home" className="mt-4 mb-4">
            <div className="container mt-5">
                <div className="row mt-4">
                    <div className="col-md-6 p-4">
                        {/*  css module and external css */}
                        <h1 className={style.t_shadow}>Welcome to my Resume</h1>  
                        {/* external css */}
                        <h2 style={headingStyle}>Hello its Inline css</h2>
                        <p style={paragraphColor}>This is a simple resume built with React.</p>
                        {/* inline css */}
                        <p className="bg-secondary-subtle">I am a software developer with experience in React, Node.js, and MongoDB. I have a passion for building web applications and learning new technologies.
                        </p>
                        <p>Feel free to contact me if you have any questions or would like to work together.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam accusamus consequatur vel maiores? Culpa minus, praesentium quia repudiandae quis impedit error ex nisi tempore aliquid corporis numquam maxime in laudantium.</p>
                    </div>
                    <div className="col-md-6 p-4">
                        <img className="img-fluid" src={HomeImage} alt="HomeIamge"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Home;