import type { NextPage } from 'next'
import { FeaturedCard } from '../components/FeaturedCard';
import { Layout } from '../components/Layout';

const Home: NextPage = () => {
  return (
    <Layout>
      <FeaturedCard />
    </Layout>
  )
}

export default Home
