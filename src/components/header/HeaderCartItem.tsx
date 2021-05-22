import ColorOptions from '../color-options/ColorOptions';
import ProductModel from '../../models/ProductModel';
import { useAppDispatch } from '../../app/hooks';
import { updateProduct, removeProduct } from '../../features/cart/CartSlice';

interface HeaderCartItemProps {
  product: ProductModel
}

const HeaderCartItem = ({product}: HeaderCartItemProps) => {

  const dispatch = useAppDispatch()

  const changeColor = (color: string) => {
    const productToUpdate = {...product}
    productToUpdate.color = color
    dispatch(updateProduct(productToUpdate))
  }

  const remove = () => {
    dispatch(removeProduct(product))
  }

  return (
    <div className="flex p-4 border-b border-gray-200">
      <div>
        <div
          style={{top: -10, left: -10}}
          className="
          relative w-6 h-6 text-center z-30
          flex justify-center items-center
          text-white text-xs bg-pink-600 rounded-3xl">{product.total}</div>
        <img
          src={product.picture}
          alt="glasses"
          className="relative w-24 h-full bottom-6 rounded-xl "
        />
      </div>

      <div className="ml-2 h-28 flex flex-col justify-between items-start">
        <div className="text-2xl">{product.name}</div>
        <ColorOptions
          colors={['blue', 'purple', 'pink']}
          selectedColor={product.color}
          onChange={changeColor}
        />
        <button onClick={remove} className="uppercase underline focus:outline-none">
          Remove
        </button>
      </div>
    </div>
  )
}

export default HeaderCartItem