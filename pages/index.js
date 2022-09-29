import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'

// test



const Mensen = () => {

    const [mensen, setMensen] = useState([]);
    const [location, setLocation] = useState();

    const fetchApiData = async ({ latitude, longitude }) => {
        const res = await fetch(`https://openmensa.org/api/v2/canteens?near[lat]=${latitude}&near[lng]=${longitude}&near[dist]=5`);
        const data = await res.json();
        setMensen(data);
    };

    useEffect(() => {
        if('geolocation' in navigator) {
            // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
            navigator.geolocation.getCurrentPosition(({ coords }) => {
                const { latitude, longitude } = coords;
                setLocation({ latitude, longitude });
            })
        }
    }, []);

    useEffect(() => {
        // Fetch data from API if `location` object is set
        if (location) {
            fetchApiData(location);
        }
    }, [location]);
    
    return ( 
      <>
      
      <Head>
        <title>HTW Mensa | Home</title>
        <meta name="keywords" content="mensa"/>
      </Head>
      <div>
        <h1 className={styles.title}>Homepage </h1>
        <p className={styles.text}>This is the homepage</p>
        <Link href='/mensen'><a className={styles.btn}>See Mensen Listing</a></Link>
      </div>

        
        <div>
            <h1>Alle Mensen in der Nähe</h1>
            
            
            {mensen?.length > 0 && mensen.map(mensa => ( 
                <Link href={`/mensen/${mensa.id}`} key={mensa.id}>
                    <a className={styles.single}> 
                        <h3>{mensa.name}</h3>
                    </a>
                </Link>
            ))}
        </div>
      </>
    );
};

export default Mensen;
