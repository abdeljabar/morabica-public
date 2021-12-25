import React from 'react';
import Link from 'next/link';

function Navbar() {
    return (
        <div>
            <ul>
                <li><Link href={"/"}><a>Home</a></Link></li>
                <li><Link href={"/blog"}><a>Blog</a></Link></li>
                <li><Link href={"/cards"}><a>Cards</a></Link></li>
                <li><Link href={"/listen"}><a>Listen</a></Link></li>
            </ul>
        </div>
    );
}

export default Navbar;