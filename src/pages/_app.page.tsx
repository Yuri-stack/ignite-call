import type { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

globalStyles() // Tranzendo a config de CSS

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
