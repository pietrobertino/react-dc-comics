export default function FooterNavbar({ footerNavbar }) {

    return (
        <nav className="py-5" id="footer-navbar">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-3">
                    {footerNavbar.map(navItem => (
                        <div className="col d-flex align-items-center justify-content-around" key={navItem.id}>
                            <img src={navItem.url} alt="" />
                            <span className="text-center">{navItem.text}</span>
                        </div>
                    ))}
                </div>
            </div>
        </nav>
    )
}   