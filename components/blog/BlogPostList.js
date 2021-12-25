import React from 'react';
import Link from "next/link";

function BlogPostList() {
    return (
        <div>
            <ul>
                <li><Link href={"/blog/post-1"}><a>Post 1</a></Link></li>
                <li><Link href={"/blog/post-2"}><a>Post 2</a></Link></li>
                <li><Link href={"/blog/post-3"}><a>Post 3</a></Link></li>
                <li><Link href={"/blog/post-4"}><a>Post 4</a></Link></li>
            </ul>
        </div>
    );
}

export default BlogPostList;