import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { AppShell, Header, MantineProvider, Navbar } from '@mantine/core';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider
      theme={{
        /** Put your mantine theme override here */
        colorScheme: 'dark',
        fontFamily: 'var(--font-mono)',
      }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  );
}
