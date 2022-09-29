import Head from 'next/head'
import styles from '../../styles/Mensen.module.css'
import Link from "next/link";

export const getStaticProps = async () => {
    const res = await fetch('https://openmensa.org/api/v2/canteens');
    const data = await res.json();
    
    return { props: { mensen: data } }
}



const Mensen = ({mensen}) => {
    
    return ( 
        <>
        <Head>
            <title>HTW Mensa | Mensen</title>
            <meta name="keywords" content="mensa"/>
        </Head>

        <div>
            <h1>Alle Mensen</h1>
            <p>Alle Mensen</p>
            {mensen.map(mensa => ( 
                <Link href ={'/mensen/' + mensa.id}key={mensa.id}>
                    <a className={styles.single}> 
                        <h2>{mensa.name}</h2>
                        <h4>{mensa.address}</h4>
                        <h4>{mensa.city}</h4>
                    </a>
                </Link>))}
        </div>
        </>
     );
}

// index.js will create route to the root page
 
export default Mensen;