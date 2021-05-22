import { useState } from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Headline from './Headline';
import ProductList from './ProductList';
import Countdown from '../../components/countdown/Countdown';

const Home = () => {

  const [showCountdown, setShowCountdown] = useState<boolean>(true)

  return (
    <main>
      {(showCountdown)? <Countdown onClose={() => setShowCountdown(false)} /> : null}
      <Header />
      <Headline />
      <ProductList />
      <Footer />
    </main>
  )
}

export default Home