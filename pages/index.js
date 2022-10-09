import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Amy Hamby's Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Happy Birthday, Amy!!" />
        <p className="description">
          Happy Birthday!
        </p>
      </main>

      <Footer />
    </div>
  )
}
