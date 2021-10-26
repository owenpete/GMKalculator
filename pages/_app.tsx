import '../styles/globals.css'
import '../styles/index.scss';
import '../styles/calculator.scss';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
