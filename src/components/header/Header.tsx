import HeaderCart from './HeaderCart'
import { getCartTotal } from '../../features/cart/CartSlice'
import { useAppSelector } from '../../app/hooks';
import { useState } from 'react';

const Header = () => {

  const [showCart, setShowCart] = useState<boolean>(false)
  const total = useAppSelector(getCartTotal)

  return (
    <header className="h-16 border-b-2 px-2">
      <div className="container mx-auto flex justify-around sm:justify-between items-center h-full">
        <img src="images/menu.svg" alt="menu" className="block md:hidden" />
        <div className="text-2xl font-semibold cursor-pointer">Lorem Ipsum</div>
        <nav className="
          hidden md:flex justify-evenly items-center flex-wrap flex-grow
          text-sm font-bold font-medium uppercase tracking-widest">
          <div className="cursor-pointer">Lorem</div>
          <div className="cursor-pointer">Ipsum</div>
          <div className="cursor-pointer">Excepteur</div>
          <div className="cursor-pointer">Consectetur</div>
          <div className="cursor-pointer">Veniam</div>
        </nav>
        <div className="cursor-pointer" onClick={() => setShowCart(!showCart)}>
          <img src="images/cart.svg" alt="cart" className="relative top-4" />
          <div className="
            relative bottom-6 left-6 w-6 h-6 text-center
            flex justify-center items-center
            text-white text-xs bg-pink-600 rounded-3xl">{total}</div>
        </div>
      </div>
      {(showCart)? <HeaderCart /> : null}
    </header>
  )
}

export default Header