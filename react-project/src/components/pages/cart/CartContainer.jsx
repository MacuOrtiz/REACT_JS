import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'

const CartContainer = () => {
 
const algo = useContext (CartContext)
   console.log (algo)
 return (
    <div>CartContainer</div>
  )
}

export default CartContainer