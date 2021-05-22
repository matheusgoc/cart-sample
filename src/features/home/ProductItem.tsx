import ProductModel from '../../models/ProductModel';
import { useState } from 'react';
import ColorOptions from '../../components/color-options/ColorOptions';
import { useAppDispatch } from '../../app/hooks';
import { addProduct } from '../../features/cart/CartSlice';

interface ProductItemProps {
  product: ProductModel
}

const ProductItem = ({product}: ProductItemProps) => {

  const dispatch = useAppDispatch()

  const [colorOption, setColorOption] = useState<string>('blue')

  const addToCart = () => {
    const cartProduct = {...product}
    cartProduct.color = colorOption
    dispatch(addProduct(cartProduct))
  }

  return (
    <div className="w-72 rounded-xl shadow-md mx-5 my-5">
      <img src={product.picture} alt={product.name} className="rounded-t-xl" />
      <div className="p-6 h-64">
        <h3 className="text-2xl font-semibold pb-2">{product.name}</h3>
        <p className="font-open-sans-regular font-light">{product.description}</p>
        <div className="h-3/4 flex flex-col justify-center">
          <ColorOptions
            colors={['blue', 'purple', 'pink']}
            selectedColor={colorOption}
            onChange={(color) => setColorOption(color)}
          />
        </div>
      </div>
      <button onClick={addToCart} className="w-full h-14 bg-black text-white rounded-b-2xl focus:outline-none">
        Add to cart
      </button>
    </div>
  )
}

export default ProductItem