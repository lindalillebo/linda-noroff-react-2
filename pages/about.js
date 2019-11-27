import React from "react";
import Link from "next/link";
import Head from "../components/head";
import Layout from "../components/layout/Layout";
import Heading from "../components/layout/Heading";

export default function About() {
    return (
        <Layout>
            <Head title="About | Noroff Next" />

            <Heading background="#ebebeb" small>About this app</Heading>
        </Layout>
    );
}