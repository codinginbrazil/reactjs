import Link from 'next/link'


export default function Navbar() {
    return (
        <nav>
            <Link href="/">
                <a>Home &nbsp;</a>
            </Link>

            <Link href="/form">
                <a>Adicionar cliente &nbsp;</a>
            </Link>

            <Link href="/list">
                <a>Listar cliente &nbsp;</a>
            </Link>

            <Link href="/about">
                <a>About &nbsp;</a>
            </Link>
        </nav>
    )
}
