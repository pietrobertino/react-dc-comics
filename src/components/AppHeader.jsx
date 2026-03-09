export default function () {

    const dcLogo = "./img/dc-logo.png";
    const navbar = [
        {
            id: 1,
            text: "CHARACTERS",
            active: false,
            url: "#"
        },
        {
            id: 2,
            text: "COMICS",
            active: true,
            url: "#"
        },
        {
            id: 3,
            text: "MOVIES",
            active: false,
            url: "#"
        },
        {
            id: 4,
            text: "TV",
            active: false,
            url: "#"
        },
        {
            id: 5,
            text: "GAMES",
            active: false,
            url: "#"
        },
        {
            id: 6,
            text: "COLLECTIBLES",
            active: false,
            url: "#"
        },
        {
            id: 7,
            text: "VIDEOS",
            active: false,
            url: "#"
        },
        {
            id: 8,
            text: "FANS",
            active: false,
            url: "#"
        },
        {
            id: 9,
            text: "NEWS",
            active: false,
            url: "#"
        },
        {
            id: 10,
            text: "SHOP",
            active: false,
            url: "#"
        }

    ]


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
                                <li className="nav-item">
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