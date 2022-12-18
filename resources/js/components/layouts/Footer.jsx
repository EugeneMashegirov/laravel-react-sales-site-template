function Footer() {
    return (
        <footer className="footer">
            <div className="container text-center pt-3 fw-bold">
                <div className="row">
                    <div className="col">
                        <div className="icons fs-6 py-3">
                            <a className="px-4" href=""><i className="bi bi-behance"></i></a>
                            <a className="px-4" href=""><i className="bi bi-dribbble"></i></a>
                            <a className="px-4" href=""><i className="bi bi-twitter"></i></a>
                            <a className="px-4" href=""><i className="bi bi-facebook"></i></a>
                            <a className="px-4" href=""><i className="bi bi-linkedin"></i></a>
                        </div>
                        <p className="mb-4 text-uppercase fs-6">COPYRIGHT &copy; 2022</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;