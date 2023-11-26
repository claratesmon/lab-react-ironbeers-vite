import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom'

function BeerDetailsPage() {
    const [beer, setBeers] = useState([]);
    const { beerId } = useParams();
    console.log(beerId)

    useEffect(() => {
        getBeers();
    }, [])

    const getBeers = async () => {
        try {
            const data = await fetch('https://ih-beers-api2.herokuapp.com/beers');
            const jsonDataBeer = await data.json();
            
            setBeers(jsonDataBeer)

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div key={beerId}> </div>

            <h2>{jsonDataBeer.name}</h2>
            <img src={jsonDataBeer.image_url} alt="" />
            <p>{beer.tagline}</p>
            <p>{beer.contributed_by}</p>

        </>
    )
}

export default BeerDetailsPage;
