import Head from 'next/head'
import {Fragment} from "react";
import BlogPostList from "../../components/blog/BlogPostList";
import Layout from "../../components/Layout";
import CardCategoryList from "../../components/cards/CardCategoryList";

export default function CardCategoryListPage() {
  return (
    <Fragment>
      <Head>
        <title>Morabica Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Layout>
            <CardCategoryList />
        </Layout>
    </Fragment>
  )
}
