export default function AppCard({ comic }) {


    return (
        <div className="col" key={comic.id}>
            <div className="card rounded-0 w-100">
                <img src={comic.thumb} alt={comic.title} className="card-img-top rounded-0" />
                <div className="card-title w-100 py-3">{comic.series.toUpperCase()}</div>
            </div>
        </div>
    )
}