import React from 'react';
import Link from "next/link";

function BlogCategoryList(props) {
    return (
        <div>
            <ul>
                <li><Link href={"/blog/?category=category-1"}><a>Category 1</a></Link></li>
                <li><Link href={"/blog/?category=category-2"}><a>Category 2</a></Link></li>
                <li><Link href={"/blog/?category=category-3"}><a>Category 3</a></Link></li>
            </ul>
        </div>
    );
}

export default BlogCategoryList;