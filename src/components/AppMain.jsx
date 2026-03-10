import { main } from "@popperjs/core";
import AppCard from "./AppCard";

export default function AppMain({ comics }) {



    return (

        <main>
            <div id="jumbotron"></div>
            <div className="container py-5">
                <div className="badge rounded-0 fs-3">
                    CURRENTS SERIES
                </div>
                <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3">
                    {comics.map(comic => (
                        <AppCard comic={comic} />
                    ))}
                </div>
                <button>LOAD MORE</button>
            </div>
        </main>
    )
}
