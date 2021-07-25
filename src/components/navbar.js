import Link from 'next/link'


export default function Navbar() {
    return (
        <nav>
            {/* <input className={styles.input} placeholder="Search..." /> */}
            <Link href="/">
                <a>Home &nbsp;</a>
            </Link>
            
            <Link href="/about">
                <a>About &nbsp;</a>
            </Link>
        </nav>
    )
}
