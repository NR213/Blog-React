import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className ="header">
            <Link to="" className = "blog">Blog</Link>
            <nav>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </nav>
        </div>
    );
}