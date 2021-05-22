import { useState } from 'react'
import ProductModel from '../../models/ProductModel'
import { v4 as uuidv4 } from 'uuid'
import ProductItem from './ProductItem';

const ProductList = () => {
  const [products] = useState<ProductModel[]>(initialProducts)

  return (
    <section className="
    flex flex-wrap my-10 justify-center
    md:mt-20 md:mb-14
    ">
      {products.map((product) => <ProductItem key={product.id} product={product} />)}
    </section>
  )
}

const prodDesc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
const initialProducts: ProductModel[] = [
  {id: uuidv4(), name: "Lorem ipsum 1", description: prodDesc, color: 'blue', total: 1, picture: 'images/products/glasses.png'},
  {id: uuidv4(), name: "Lorem ipsum 2", description: prodDesc, color: 'blue', total: 1, picture: 'images/products/bench.png'},
  {id: uuidv4(), name: "Lorem ipsum 3", description: prodDesc, color: 'blue', total: 1, picture: 'images/products/airpods.png'},
  {id: uuidv4(), name: "Lorem ipsum 4", description: prodDesc, color: 'blue', total: 1, picture: 'images/products/pitcher.png'},
];

export default ProductList