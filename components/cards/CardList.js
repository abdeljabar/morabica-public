import React from 'react';
import Link from "next/link";

function CardList() {
    return (
        <div>
            <ul>
                <li><Link href={"/cards/card-1"}><a>Card 1</a></Link></li>
                <li><Link href={"/cards/card-2"}><a>Card 2</a></Link></li>
                <li><Link href={"/cards/card-3"}><a>Card 3</a></Link></li>
                <li><Link href={"/cards/card-4"}><a>Card 4</a></Link></li>
            </ul>
        </div>
    );
}

export default CardList;