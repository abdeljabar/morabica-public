import React from 'react';
import Link from "next/link";

function PodcastShowList() {
    return (
        <div>
            <ul>
                <li><Link href={"/podcasts/show-1"}><a>Show 1</a></Link></li>
                <li><Link href={"/podcasts/show-2"}><a>Show 2</a></Link></li>
                <li><Link href={"/podcasts/show-3"}><a>Show 3</a></Link></li>
                <li><Link href={"/podcasts/show-4"}><a>Show 4</a></Link></li>
            </ul>
        </div>
    );
}

export default PodcastShowList;