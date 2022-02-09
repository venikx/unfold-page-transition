import { motion } from "framer-motion"
import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "../styles/Home.module.css"

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
          <motion.figure
            className={styles.figure}
            layout
            layoutId="to-post"
            initial={{ scaleX: 1.1, scaleY: 2 }}
            animate={{ scaleX: 1, scaleY: 1 }}
            exit={{ scaleX: 1.1, scaleY: 2 }}
            transition={{ type: "spring", bounce: 0.2 }}
          >
            <Image
              src="/tokyo.jpg"
              alt="Tokyo at Nigh"
              width={250}
              height={250}
              layout="responsive"
            />
          </motion.figure>
          <h2>Lost in Tokyo</h2>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam
            eget risus varius blandit sit amet non magna.
          </p>
          <Link href="/post">
            <a className={styles.card}>
              <Image
                src="/quote-icon.svg"
                alt="See details"
                width={50}
                height={50}
              />
            </a>
          </Link>
        </article>
      </main>
    </div>
  )
}

export default Home
