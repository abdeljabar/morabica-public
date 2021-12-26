import React from 'react';
import Link from "next/link";

function BlogPostList({posts, total}) {
    return (
        <div>
            <p>There are {total} posts.</p>
            <ul>
                {posts.map(post => (
                    <li key={post.id}><Link href={`/blog/${post.slug}`}><a>{post.title}</a></Link></li>
                ))}
            </ul>
        </div>
    );
}

export default BlogPostList;