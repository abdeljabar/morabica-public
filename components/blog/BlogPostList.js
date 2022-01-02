import React from 'react';
import {Grid} from "@material-ui/core";
import BlogPostItem from "./BlogPostItem";

function BlogPostList({posts, total}) {
    return (
        <Grid container spacing={2} alignItems="stretch" style={{padding: 20}}>
            {posts.map(post => (
                <Grid item key={post.id} xs={12} sm={6} lg={4} xl={3} style={{display: 'flex'}} >
                    <BlogPostItem post={post} />
                </Grid>
            ))}
        </Grid>
    )
}

export default BlogPostList;