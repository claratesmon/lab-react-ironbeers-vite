import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";
import "/public/allbeerspage.css"


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

  const handleSearch = async () => {
    
  }
  return (
    <>

      <h1>ALL BEERS</h1>
      <div>
        <input onChange={(event) => handleSearch(event.target.value)} id="search-input" type="search" placeholder="Search Beer" /><span id="magni-icon">🔍</span>
      </div>
      <ul>
        {
          beers.map((eachBeer) => {
            console.log(eachBeer._id)
            return (
              <Link to={`/beers/${eachBeer._id}`}>
                <div className="beer-container" key={eachBeer._id}>
                  <img id="allbeers-img" src={eachBeer.image_url} alt={eachBeer.name} />
                  <div className="beers-info">
                  <h4>{eachBeer.name}</h4>
                  <p className="tagline" >{eachBeer.tagline}</p>
                  <p className="contributed" >{eachBeer.contributed_by}</p>
                  </div>
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
