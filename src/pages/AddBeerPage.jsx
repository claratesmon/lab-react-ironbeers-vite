import Navbar from "../components/Navbar";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddBeerPage() {
    const [name, setName] = useState('')
    const [tagline, setTagline] = useState('')
    const [description, setDescription] = useState('')
    const [first_brewed, setFirstBrewed] = useState('')
    const [brewers_tips, setBrewerTips] = useState('')
    const [attenuation_level, setAttenuationLevel] = useState(0);
    const [contributed_by, setContributedBy] = useState('')
    const navigate = useNavigate()



    const handleSubmit = async (e) => {
        e.preventDefault();
        const newBeer = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tips,
            attenuation_level,
            contributed_by
        };
        try {
            const response = await fetch("https://ih-beers-api2.herokuapp.com/beers/new", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newBeer),
            })

            if (response.ok) {
                console.log('Beer successfully added!');
                // You might want to handle success, maybe redirect the user or show a success message
                navigate('/beers');
            } else {
                console.log('Failed to add beer. Status:', response.status);
                // You might want to handle the failure, show an error message, etc.
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }


    return (
        <>
            <div className='form-container'>

                <form onSubmit={(e) => handleSubmit(e)} className="form">

                    <label htmlFor="name">Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} name="name" type="text" />

                    <label htmlFor="tagline">Tagline</label>
                    <input onChange={(e) => setTagline(e.target.value)} value={tagline} name="tagline" type="text" />

                    <label htmlFor="description">Description</label>
                    <textarea onChange={(e) => setDescription(e.target.value)} value={description} className='area' name="description" type="text" />


                    <label htmlFor="first_brewed">First Brewed</label>
                    <input onChange={(e) => setFirstBrewed(e.target.value)} value={first_brewed} name="first_brewed" type="text" />

                    <label htmlFor="brewers_tips">Brewer Tips</label>
                    <input onChange={(e) => setBrewerTips(e.target.value)} value={brewers_tips} name="brewers_tips" type="text" />

                    <label htmlFor="attenuation_level">Attenuation level</label>
                    <input onChange={(e) => setAttenuationLevel(Number(e.target.value))} value={attenuation_level} name="attenuation_level" type="number" />

                    <label htmlFor="contributed_by">Contributed by</label>
                    <input onChange={(e) => setImage(e.target.value)} value={contributed_by} name="contributed_by" type="text" />

                    <button type='submit'>ADD BEER</button>
                </form>
            </div>
        </>

    )

}

export default AddBeerPage;
