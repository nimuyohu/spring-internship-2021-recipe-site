import { Navbar } from 'react-bootstrap';
import Link from 'next/link';
import { FC } from "react";

export const Header: FC = () => {
    return (
        <Navbar bg="dark" variant="dark">
                <Link href='/'><Navbar.Brand href="/">レシピサイト🍳~料理が楽しい生活を~</Navbar.Brand></Link>
        </Navbar>
    )
}