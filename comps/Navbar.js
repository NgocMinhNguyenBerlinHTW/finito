import Link from 'next/link'
import Image from 'next/image';


const Navbar = () => {
    return ( 
        <nav >
            <div className="logo">
                <Image src="/logoHTW.jpeg" width={128} height={77} />
            </div>

        <Link href='/'><a>Home</a></Link>
        <Link href='/mensen'><a>Mensen</a></Link>
        <Link href='/about'><a>About</a></Link>
        </nav>
     );
}
 
export default Navbar;