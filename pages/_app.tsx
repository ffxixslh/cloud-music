import '@unocss/reset/tailwind.css'
import '@/styles/uno.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
