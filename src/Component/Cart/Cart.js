
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus, BsFillTrashFill } from "react-icons/bs";
import './Cart.scss'
import { Link } from "react-router-dom";

const Cart = () => {
  const { products,totalPrice,totalQuantities } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  return (
    <div>
      {products.length > 0 ? (
        <>
          <div className="row">
            <div className="col-9">
              <div className=" text-center lg:grid lg:grid-cols-6 hidden bg-gray-100 p-3">
                <div>picture</div>
                <div>name</div>
                <div>Price</div>
                <div>Inc/Dec</div>
                <div>totalPrice</div>
                <div>Remove</div>
              </div>

              {products.map((product) => (
                <div
                  className="grid lg:grid-cols-6 grid-cols-1 gap-4"
                  key={product.id}
                >
                  <div>
                    <div className="bg-gray-100 p-5 m-2">
                      <img
                        className="mx-auto w-3/4 h-full"
                        src={product.img}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="text-center mt-5">{product.name}</div>
                  <div>
                    <div className="text-center mt-5">
                      {currencyFormatter.format(product.discoutPrice, {
                        code: "USD",
                      })}
                    </div>
                  </div>

                  <div className="flex mx-auto mt-3">
                    <span
                      className="dec"
                      onClick={() =>
                        dispatch({ type: "DEC", payload: product.id })
                      }
                    >
                      <BsDash />
                    </span>
                    <span className="quantity">{product.quantity}</span>
                    <span
                      className="inc"
                      onClick={() =>
                        dispatch({ type: "INC", payload: product.id })
                      }
                    >
                      <BsPlus />{" "}
                    </span>
                  </div>

                  <div>
                    <div className="text-center mt-5">
                      {currencyFormatter.format(
                        product.discoutPrice * product.quantity,
                        {
                          code: "USD",
                        }
                      )}
                    </div>
                  </div>
                  <div
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: product.id })
                    }
                  >
                    <BsFillTrashFill className="mx-auto mt-6 cursor-pointer" />
                  </div>
                </div>
              ))}
            </div>

            <div className="col-3 mx-auto lg:mt-0 mt-4 lg:w-1/5 w-5/6 h-full bg-yellow-200 p-5">
              <div className="text-center w-full bg-gray-100 p-3">
                summary
              </div>
              <h3 className="font-bold text-lg mt-3">Total Items : <span className='ml-10'>{totalQuantities}</span></h3>
              <h3 className="font-bold text-lg">
                total Price : <span className="ml-5">  {currencyFormatter.format(totalPrice, {code: "USD",})} </span>
              </h3>
                <div className="text-center mt-3">
                  
                  <Link to='/checkout'>
                  <button className="bg-red-300 px-7 py-4 text-white text-lg w-full">Checkout</button>
                  </Link>
                </div>
            </div>
          </div>
        </>
      ) : 
         <h2 className='text-center text-red-500 mt-32'>you have cart is empty</h2>
      }
    </div>
  );
};

export default Cart;
