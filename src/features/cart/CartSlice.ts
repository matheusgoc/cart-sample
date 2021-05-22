import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import ProductModel from '../../models/ProductModel'

interface CartState {
  products: ProductModel[]
}

const initialState: CartState = {
  products: []
}

export const CartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<ProductModel>) => {
      const index = findProductIndex(state.products, action.payload)
      if (index >= 0) {

        // increment product
        state.products[index].total++

      } else {

        // add a new product on the cart
        state.products.push(action.payload)
      }
    },
    updateProduct: (state, action: PayloadAction<ProductModel>) => {
      const index = findProductIndex(state.products, action.payload)
      state.products[index] = action.payload
    },
    removeProduct: (state, action: PayloadAction<ProductModel>) => {
      const index = findProductIndex(state.products, action.payload)
      state.products.splice(index, 1)
    },
  }
})

// find the product index on the cart list
const findProductIndex = (products: ProductModel[], productToFind: ProductModel) => {
  return products.findIndex((product: ProductModel) => {
    return product.id === productToFind.id
  })
}

// actions
export const { addProduct, removeProduct, updateProduct } = CartSlice.actions

// selectors
export const getCart = (state:any) => state.cart.products
export const getCartTotal = (state:any) => {

  let total = 0
  for (let product of state.cart.products) {
    total += product.total
  }

  return total
}

// reducers
export default CartSlice.reducer