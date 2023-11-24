import { Link } from 'react-router-dom';
import '/public/homepage.css'

function HomePage() {
    return (
        <div id='homepage-container'>
            <Link to='/pages/AllBeersPage'>
                <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/vintage-beer-can-collection-max-huber.jpg" alt="All Beers Image" />
                <h2>All Beers</h2>

                </Link>
            <Link to='/RandomBeerPage'>
                <img src="https://assets.bonappetit.com/photos/57bf238fa184a3c9209db241/master/w_2000,h_1400,c_limit/beer-design-opener.jpg" alt="Random Beer Image" /></Link>
                <h2>Random Beer</h2>
            <Link to='/AddBeerPage'>
                <img src="https://hips.hearstapps.com/hmg-prod/images/glass-of-beer-on-the-table-with-wheat-malt-barley-royalty-free-image-881762668-1534183770.jpg" alt="Create a beer image" />
                <h2>Create New Beer</h2>
                </Link>
        </div>
    )
}

export default HomePage;
