import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";


function AllBeersPage() {
    const [beers, setBeers] = useState([]);

    useEffect(() => {
        getBeers();
      }, [])

  const getBeers = async () => {
    try {
      const data = await fetch('https://ih-beers-api2.herokuapp.com/beers');
      const jsonDataBeers = await data.json();
      console.log(jsonDataBeers)
      setBeers(jsonDataBeers)

    } catch (error) {
      console.log(error);
    }
  }
    return(
        <>
        
        <h1>ALL BEERS</h1>
        <ul>
            {
                beers.map((eachBeer)=>{
                    return(
                        <Link to={`/beers/${eachBeer._id}`}>
                        <div key={eachBeer._id}>
                        <h2>{eachBeer.name}</h2>
                        <img src={eachBeer.image_url} alt={eachBeer.name} />
                        <p>{eachBeer.tagline}</p>
                        <p>{eachBeer.contributed_by}</p>
                        </div>
                        </Link>
                        
                        
                    )
                })
            }
        </ul>

        </>
    )
}

export default AllBeersPage;
