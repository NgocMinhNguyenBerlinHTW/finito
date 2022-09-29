import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import React from 'react'
import { useSession,signOut,signIn } from 'next-auth/react'
// test



const Mensen = () => {
    const [distance, setDistance] = useState(5);

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
    const { data: session} = useSession({required: true})
    if(session) {
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
                  <p></p>
                  <input type="text" value={distance}
                   onChange={
                          (e) => setDistance(e.target.value)
                   }/>
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
    }

    else{
        return (
            <div>
                <h1>Bitte loggen Sie sich ein</h1>
                <button onClick={signIn}>Login</button>
            </div>
        )
        
    }
    
};

export default Mensen;
