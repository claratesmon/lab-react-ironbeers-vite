import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

function BeerDetailsPage() {
    const [beer, setBeer] = useState(null)
    let { beerId } = useParams();
    

    useEffect(() => {
        getBeers();
    }, [beerId])

    const getBeers = async () => {
        try {
            const data = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
            const dataBeer = await data.json();
            console.log(dataBeer)
            setBeer(dataBeer)

        } catch (error) {
            console.log(error);
        }
    }
    if (!beer) {
        // Loading state or error handling can be added here
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <div key={beer._id}> 

            <h2>{beer.name}</h2>
            <img src={beer.image_url} alt="" />
            <p>{beer.tagline}</p>
            <p>{beer.description}</p>
            <p>{beer.first_brewed}</p>
            <p>{beer.contributed_by}</p>
            <p>{beer.attenuation_level}</p>
            </div>
        </>
    )
}

export default BeerDetailsPage;
