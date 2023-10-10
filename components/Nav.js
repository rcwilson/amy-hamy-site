import Link from "next/link";

export default function Nav({className, ...props}) {
    return (
        <nav className={' navbar navbar-expand-lg bg-none fixed-top'}>
            <div className="container-fluid">
                <li className="nav-item nav-link">
                    <Link href="/">
                        <a className="navbar-brand name-color">
                            Amy Hamby
                        </a>
                    </Link>
                </li>
                <button className={className + " navbar-toggler"} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={className + " collapse navbar-collapse"} id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item nav-link">
                            <Link className="nav-link" href="/about"> About </Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link className="nav-link" href="/contact"> Contact </Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link className="nav-link" href="/social"> Social </Link>
                        </li>
                        <li className="nav-item nav-link">
                            <Link className="nav-link" href="/art"> Art </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
