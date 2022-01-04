import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import NextImage from "next/image";

function CardList({cards}) {

    return (
        <Box sx={{width: 720, height: 450, overflowY: 'scroll'}}>
            <ImageList variant="masonry" cols={3} gap={8}>
                {cards.map((item) => {
                    const featuredImage = item.image && item.image.contentUrl;
                    return (
                        <ImageListItem key={item["@id"]}>
                            <img
                                src={`${featuredImage}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                            <ImageListItemBar position="below" title={item.title}/>
                        </ImageListItem>
                    );
                })}
            </ImageList>
        </Box>
    );
}

export default CardList;