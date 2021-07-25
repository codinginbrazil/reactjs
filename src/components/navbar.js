import Link from 'next/link'


export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <a>Home &nbsp;</a>
            </Link>

            <Link href="/form">
                <a>Form &nbsp;</a>
            </Link>

            <Link href="/about">
                <a>About &nbsp;</a>
            </Link>
        </nav>
    )
}
