import React from 'react';
import Link from "next/link";

function CardCategoryList(props) {
    return (
        <div>
            <li><Link href={"/cards/?category=category-1"}><a>Category 1</a></Link></li>
            <li><Link href={"/cards/?category=category-2"}><a>Category 2</a></Link></li>
            <li><Link href={"/cards/?category=category-3"}><a>Category 3</a></Link></li>
        </div>
    );
}

export default CardCategoryList;