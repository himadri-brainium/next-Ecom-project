import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import Layout from './components/layout'

function MyApp({ Component, pageProps }) {
  return (
  // <Component {...pageProps} />
  <Layout>
    <Component {...pageProps} />
  </Layout>

  )
}

export default MyApp
