import React from "react";
import {useSession, signIn,signOut} from 'next-auth/react'
import { loadGetInitialProps } from "next/dist/shared/lib/utils";
import Link from "next/link";
import styles from '../styles/Home.module.css'




const Login = () => {
    const {data: session} = useSession({required: true})

    if (session) {
        return (
            <div>
                <p>Welcome {session.user.name}</p>
                <img src={session.user.image} alt="" style={{width: '75px',borderRadius:'50px'}}/>
                <h1>Logged in as {session.user.email}</h1>
                <button onClick={() => signOut()}>Logout</button>
                <Link href='/idn'><a className={styles.btn}>See Mensen nearby</a></Link>


            </div>
        )
    }
    
    return (
        <div>
            <h1>Not logged in</h1>
            <button onClick={() => signIn()}>Login</button>
        </div>
    )

    
}
 
export default Login;