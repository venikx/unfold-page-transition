import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Post.module.css'

const Post: NextPage = () => {
    return (
        <div className={styles.imageContainer}>
            <Head>
                <title>Lost in Tokyo</title>
                <meta name="description" content="Lost in Tokyo - Jonathan Vik" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <figure className={styles.figure}>
                <Image src="/tokyo.jpg" alt="Tokyo at Nigh" objectFit="cover" layout="fill" />
            </figure>
            <div className={styles.container}>
                <nav>
                    <Link href="/">
                        <a>
                            <Image src="/close-icon.svg" alt="Go back" width={24} height={24} />
                        </a>
                    </Link>
                </nav>
                <main className={styles.main}>
                    <h1 >Lost in Tokyo</h1>
                    <div className={styles.attribution}>
                        <h2>By Jonathan Vik</h2>
                        <span>6 &#x1F4AC;</span>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Post
