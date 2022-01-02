import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Image from "next/image";
import Link from "next/link";

const BlogPostItem = ({post}) => {
    const featuredImage = post.image && post.image.contentUrl;
    return (
        <Card style={{display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
            <Image loader={() => featuredImage} src={featuredImage} width={720} height={480} alt={post.title}/>
            <CardMedia loader={() => featuredImage} image={featuredImage} title={post.title}/>
            <CardContent>
                <Typography variant={"headline"} component={"h2"}>
                    {post.title}
                </Typography>
                <Typography component={"p"}>
                    {post.teaser}
                </Typography>
            </CardContent>
            <CardActions>
                {/* eslint-disable-next-line @next/next/link-passhref */}
                <Link href={`/blog/${post.slug}`}>
                    <Button size="small" color="primary" variant={"contained"}>
                        Go To Post
                    </Button>
                </Link>
            </CardActions>
        </Card>
    )
};

export default BlogPostItem;