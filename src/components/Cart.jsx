import React from 'react';
import flash1 from "../images/flash/flash-1.png";
import flash2 from "../images/flash/flash-2.png";
import flash3 from "../images/flash/flash-3.png";
import flash4 from "../images/flash/flash-4.png";
import flash5 from "../images/flash/flash-5.png";
import flash6 from "../images/flash/flash-1.png";

const Cart = () => {
    const Data = {
        CartItems: [
          {
            id: 1,
            discount: 50,
            cover: flash1,
            name: "Shoes",
            price: 100,
          },
          {
            id: 2,
            discount: 40,
            cover: flash2,
            name: "Watch",
            price: 20,
          },
          {
            id: 3,
            discount: 40,
            cover: flash3,
            name: "Smart Mobile Black",
            price: 200,
          },
          {
            id: 4,
            discount: 40,
            cover: flash4,
            name: "Smart Watch Black",
            price: 50,
          },
          {
            id: 5,
            discount: 50,
            cover: flash5,
            name: "Shoes",
            price: 100,
          },
          {
            id: 6,
            discount: 50,
            cover: flash6,
            name: "Shoes",
            price: 100,
          },
        ],
      }
    
  return (
    <>

    {
        true && (
           
            <div className='container fluid pt-3 '>
                <div className="cart d-md-flex justify-content-between flex-wrap">
                    <div className="cart-list bg-light p-2">
                        <div className="div">
                        {
                            Data.CartItems.map((item, i)=>{
                                return(
                                    <div key={i}>
                                        <div className="cart-item d-flex align-items-center bg-warning rounded mt-3 py-3 pt-1">
                                            <img src={item.cover} alt="" />
                                            <div className="right me-4 d-flex flex-column justify-content-between">
                                                <div className="right-top d-flex justify-content-between align-items-center">
                                                    <div>{item.name}</div>
                                                    <i className="far fa-x fw-bold"></i>
                                                </div>
                                                <div className="right-bottom d-flex justify-content-between align-items-center mt-3">
                                                    <div className=''>100.00*2 <span className='text-danger ms-2'>$200.00</span></div>
                                                    <div className="operations">
                                                    <i className="far fa-plus fw-bold me-4"></i>
                                                    <i className="far fa-minus fw-bold"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                      </div>)
                            }
                            )
                        }
                        </div>
                    </div>
                    <div className="cart-summary bg-light p-2 mt-5">
                        <h5 className='text-danger fw-bold'>Cart Summary</h5>
                        <hr className='my-0' />
                        <div className="price d-flex justify-content-between p-2">
                            <p className='fw-bold'>Total Price</p>
                            <p className='text-danger fw-bold'>$0.00</p>
                        </div>
                    </div>
                </div>
            </div>)
    }

    {
        !Data && (
    

    <div className='container fluid pt-3 '>
        <div className="cart d-md-flex justify-content-between flex-wrap">
            <div className="cart-list bg-light p-2">
                <h5 className='text-danger'>No Items in the Cart</h5>
            </div>
            <div className="cart-summary bg-light p-2 mt-5">
                <h5 className='text-danger'>Cart Summary</h5>
                <hr className='my-0' />
                <div className="price d-flex justify-content-between p-2">
                    <p className='fw-bold'>Total Price</p>
                    <p className='text-danger fw-bold'>$0.00</p>
                </div>
            </div>
        </div>
    </div>
        )
    }
    </>
  )
}

export default Cart