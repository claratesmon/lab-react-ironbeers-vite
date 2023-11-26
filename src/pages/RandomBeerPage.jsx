import { useState, useEffect } from "react";

function RandomBeersPage() {
    const [beer, setBeer] = useState(null)
    

    useEffect(() => {
        getRandomBeer();
    }, [])

    const getRandomBeer = async () => {
        try {
            const data = await fetch(`https://ih-beers-api2.herokuapp.com/beers/random`);
            const dataBeer = await data.json();
            console.log(dataBeer)
            setBeer(dataBeer)

        } catch (error) {
            console.log(error);
        }
    }

    if(!beer){
        return <h2>Loading...</h2>
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

export default RandomBeersPage;
