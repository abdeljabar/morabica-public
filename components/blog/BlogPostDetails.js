import React from 'react';
import Image from 'next/image';

function BlogPostDetails({post}) {
    const featuredImage = post.image && post.image.contentUrl;

    return (
        <div>
            <h1>{post.title}</h1>
            <Image loader={() => featuredImage} src={featuredImage} width={720} height={480} alt={post.title}/>
            <div>
                {post.body}
            </div>
        </div>
    );
}

export default BlogPostDetails;