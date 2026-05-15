import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";  // Import NavLink for active link styling


//USing NavLink allows us to apply an active class to the currently active link, which can be styled differently in CSS. This is useful for navigation menus to indicate which page is currently active.
//Using Link Page should be redirect to new address without refreshing the page. It is used for client-side routing in React applications, allowing for smooth navigation between different components or pages without a full page reload.
// const Header = () => {
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark-subtle m-4t-0 p-4 rounded shadow">
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">Navbar</Link>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNav">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <Link to="/" className="nav-link">Home</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/about" className="nav-link">About</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/services" className="nav-link">Services</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/product" className="nav-link">Product</Link>
//                             </li>
//                             <li className="nav-item">
//                                 <Link to="/contact" className="nav-link">Contact</Link>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//             </>
//             )
// }

//Using Navlink PAge should be redirect as well as styling navigation to new address without refreshing the page. It is used for client-side routing in React applications, allowing for smooth navigation between different components or pages without a full page reload. NavLink also allows us to apply an active class to the currently active link, which can be styled differently in CSS. This is useful for navigation menus to indicate which page is currently active.
const Header = () => {
    return(
        <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark-subtle m-4t-0 p-4 rounded shadow">
            <div className="container">
                <NavLink className="navbar-brand" to="/">Coffee Shop</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/" className={({ isActive}) => isActive ? "nav-link activeLink" : "nav-link"}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className={({ isActive}) => isActive ? "nav-link activeLink" : "nav-link "}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/services" className={({ isActive}) => isActive ? "nav-link activeLink" : "nav-link"}>Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/product" className={({ isActive}) => isActive ? "nav-link activeLink" : "nav-link"}>Product</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" className={({ isActive}) => isActive ? "nav-link activeLink" : "nav-link "}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    )
}

export default Header;