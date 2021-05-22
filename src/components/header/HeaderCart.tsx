import { useAppSelector } from '../../app/hooks';
import { getCart } from '../../features/cart/CartSlice'
import HeaderCartItem from './HeaderCartItem';
import ProductModel from '../../models/ProductModel';

const HeaderCart = () => {

  const cart = useAppSelector(getCart)

  return (
    <div className="
      bg-white absolute right-5 w-80 rounded-b-lg shadow-md z-50
      lg:right-20">
      {(!cart.length)? (
        <div className="flex justify-center items-center w-full h-40">
          <div>The cart is empty!</div>
        </div>
      ) : null}
      {cart.map((product: ProductModel) => <HeaderCartItem product={product} key={product.id} />)}
    </div>
  )
}

export default HeaderCart