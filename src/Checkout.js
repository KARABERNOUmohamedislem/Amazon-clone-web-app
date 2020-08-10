import React from 'react'
import { useStateValue } from "./StateProvider"
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from "react-currency-format"
import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout_left">
                <img className="checkout_ad" src="https://m.media-amazon.com/images/G/08/shazam/XCM-Manual-1940x500-1199974-1199974-uk-eu-house-ads-asv-970x250-fr-1575378752-jpg-LOWER-QL85--Ljpy2._V444967961_.jpg" ></img>
                {basket?.length === 0 ? (
                    <div>
                        <h2 className="checkout_title"> Your Shopping Basket is empty </h2>
                    </div>
                ) : (
                        <div>
                            <h2 className="checkout_title">Your Shopping Basket </h2>
                            {basket.map(item => (
                                <CheckoutProduct
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>
                 { basket?.length > 0 && (
                <div className="checkout_right">
                    <Subtotal />
                </div>
                )}
            </div>
           
            
            
    )
}

export default Checkout
