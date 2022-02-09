import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Post.module.css'

const Post: NextPage = () => {
    return (
        <motion.div className={styles.imageContainer}
            layout
            layoutId="to-post"
            initial={{ scale: 0.75 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.75 }}
            transition={{ type: "tween", ease: "easeInOut" }}
        >
            <Head>
                <title>Lost in Tokyo</title>
                <meta name="description" content="Lost in Tokyo - Jonathan Vik" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <figure className={styles.figure}
            >
                <Image src="/tokyo.jpg" alt="Tokyo at Nigh" objectFit="cover" layout="fill"

                />
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
                    <motion.h1 initial={{ y: -50 }} animate={{ y: 0 }}
                        transition={{ type: "spring", delay: .1, bounce: 0.6 }} >Lost in Tokyo</motion.h1>
                    <div className={styles.attribution}>
                        <motion.h2
                            initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                            transition={{ type: "spring", delay: .3 }}
                        >By Jonathan Vik</motion.h2>
                        <span>6 &#x1F4AC;</span>
                    </div>
                </main>
            </div>
        </motion.div>
    )
}

export default Post
