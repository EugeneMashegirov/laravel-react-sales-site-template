function Header() {
    return (
        <header className="header position-sticky sticky-top bg-dark">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container-fluid">
                        <div className="mx-auto navbar-logo">
                            <a className="navbar-brand" href=""><img className="logo" src="img/logo.png" alt="Logo" /></a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="navbarSupportedContent" className="collapse navbar-collapse navbar-links text-white">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item px-2 fz-5">
                                    <a id="link_1" className="nav-link active" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a id="link_2" className="nav-link" href="#features">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a id="link_3" className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a id="link_4" className="nav-link" href="#testimonials">Testimonials</a>
                                </li>
                                <li className="nav-item">
                                    <a id="link_5" className="nav-link" href="#pricing">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a id="link_6" className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </header>
    );
}

let activeLink = "";

window.addEventListener("scroll", () => {
    let ids = ["home", "features", "about", "testimonials", "pricing", "contact"];
    let iteration = 1;

    for (let id of ids) {
        let elem = document.getElementById(id);

        if (Math.floor(getCoords(elem).top) <= scrollY) {
            if (activeLink !== "") {
                activeLink.classList.remove("active");
            }

            let link = document.getElementById("link_" + iteration);
            link.classList.add("active");
            activeLink = link;
        }

        ++iteration;
    }
});

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + scrollY,
        left: box.left + scrollY
    };
}

export default Header;