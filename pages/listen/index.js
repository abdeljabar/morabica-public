import Head from 'next/head'
import {Fragment} from "react";
import PodcastShowList from "../../components/podcasts/PodcastShowList";
import Layout from "../../components/Layout";
import PodcastEpisodeList from "../../components/podcasts/PodcastEpisodeList";

export default function PodcastsPage() {
  return (
    <Fragment>
      <Head>
        <title>Morabica Podcasts</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            {/* Display latest episodes */}
            <PodcastEpisodeList />

            {/* Display all shows */}
            <PodcastShowList />
        </Layout>
    </Fragment>
  )
}