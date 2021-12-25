import React from 'react';
import Link from "next/link";

function PodcastEpisodeList() {
    return (
        <div>
            <ul>
                <li><Link href={"/listen/show-1/episode-1"}><a>Episode 1</a></Link></li>
                <li><Link href={"/listen/show-1/episode-2"}><a>Episode 2</a></Link></li>
                <li><Link href={"/listen/show-2/episode-3"}><a>Episode 3</a></Link></li>
                <li><Link href={"/listen/show-3/episode-4"}><a>Episode 4</a></Link></li>
            </ul>
        </div>
    );
}

export default PodcastEpisodeList;