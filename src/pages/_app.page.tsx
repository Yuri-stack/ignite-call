import type { AppProps } from 'next/app'
import { SessionProvider } from "next-auth/react"
import { globalStyles } from '../styles/global'

globalStyles() // Tranzendo a config de CSS

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
    return (
        <SessionProvider session={session}>
            <Component {...pageProps} />
        </SessionProvider>
    )
}
