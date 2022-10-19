import { useLocation } from "react-router-dom";

export default function Navigation() {

    let {pathname} = useLocation();
    console.log(pathname);
    var getLinkClassName = (linkPath) => {
        if (linkPath === pathname) {
            return "nav-link active";
        }
        return "nav-link";
    };
    return (
        <ul className="nav nav-pills">
            <li className="nav-item"><a href="/" className={getLinkClassName('/')} aria-current="page">About Me</a></li>
            <li className="nav-item"><a href="/portfolio" className={getLinkClassName('/portfolio')}>Portfolio</a></li>
            <li className="nav-item"><a href="/contact" className={getLinkClassName('/contact')}>Contact</a></li>
            <li className="nav-item"><a href="/resume" className={getLinkClassName('/resume')}>Resume</a></li>
        </ul>
    )
}