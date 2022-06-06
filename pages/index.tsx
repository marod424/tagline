import type { NextPage } from 'next'
import {AppShell } from '@mantine/core'
import { Header } from '../components/Header';
import { Navbar } from '../components/Navbar';

const Home: NextPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      header={<Header />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
    {/* TODO: move to layout component and add app pages */}
    </AppShell>
  )
}

export default Home
