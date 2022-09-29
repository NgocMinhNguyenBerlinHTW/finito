import Link from "next/link"
import { useRouter } from 'next/router'
import { useEffect } from "react";
import Head from 'next/head'

const NotFound = () => {
    const router = useRouter();

    useEffect(() => { 
        setTimeout(() => {
            router.push('/');
        }, 3000)
    }, [router])
    return ( 
        <>
        <Head>
            <title>HTW Mensa | 404</title>
            <meta name="keywords" content="mensa"/>
        </Head>
        < div className="not-found">
            <h1>Oooops</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href='/'><a>Home</a></Link></p>
        </div>
        </>
        
     );
}
 
export default NotFound;