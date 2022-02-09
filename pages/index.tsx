import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Shared by you</title>
                <meta name="description" content="Travel experiences shared by you." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    Shared <span className="">by you</span>
                </h1>

                <article className={styles.article}>
                    <figure className={styles.figure}>
                        <Image src="/tokyo.jpg" alt="Tokyo at Nigh" width={250} height={250} layout="responsive" />
                    </figure>
                    <h2>Lost in Tokyo</h2>
                    <p>Cras mattis consectetur purus sit amet fermentum.
                        Maecenas sed diam eget risus varius blandit sit amet non magna.
                    </p>
                    <Link href="/post">
                        <a className={styles.card}>
                            <Image src="/quote-icon.svg" alt="Tokyo at Nigh" width={50} height={50} />
                        </a>
                    </Link>
                </article>
            </main>
        </div>
    )
}

export default Home
