export default function AppHeader({ navbar }) {

    const dcLogo = "./img/dc-logo.png";



    return (

        <header>
            <div className="container">
                <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
                    <a class="navbar-brand" href="#"><img src={dcLogo} alt="DC Logo" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                        <ul class="navbar-nav">
                            {navbar.map(item => (
                                <li className="nav-item" key={item.id}>
                                    <a href={item.url} className={item.active ? "current nav-link" : "nav-link"}>{item.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}