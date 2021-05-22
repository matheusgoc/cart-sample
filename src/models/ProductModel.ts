import { v4 as uuidv4 } from 'uuid'
export default class ProductModel {
  id: string = uuidv4()
  name: string = ''
  description: string = ''
  picture: string = ''
  color: string = ''
  total: number = 1
}