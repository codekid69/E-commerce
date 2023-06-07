import React, { useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData } from "../redux/reducers/product";
import Loader from "./Loader";
function ItemList() {
  
  const dispatch = useDispatch();
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    rating: "",
    content: "",
  });

  useEffect(() => {
    dispatch(fetchData());
  },[dispatch])

  const {product,isLoading}=useSelector((state)=>state.product);
  if (isLoading) {
    return <Loader/>;
    // console.log("INLOADERRR",isLoading);
  }
  // const { product } = useSelector((state) => state.product);
  // console.log("rerender",product);
  let arr = [1, 2, 3, 4, 5];
  console.log(data);
  const id = 12121;
  return (
    <>


      {product?.map((x) => {
        return (
          <section className={check ? "listItem" : "listItemFalse"} key={x.id}>
            <div className="left">
              <div className="images">
                {
                  check ?
                    <>
                      <Link to={`/product/${id}`} >
                        <img
                          src={x.image}
                          alt={x.name}
                        />
                      </Link>
                    </>
                    :
                    <img
                    src={x.image}
                    alt={x.name}
                    />
                }
              </div>
              <div>
                <div className="input_set">
                  {check ? (
                    <span className="productName">{x.name}</span>
                  ) : (
                    <input
                      type="text"
                      value={x.name}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          name: e.target.value,
                        }))
                      }
                    />
                  )}
                  <br />
                  {check ? (
                    <>
                      {" "}
                      <span>RS {x.price}</span>
                    </>
                  ) : (
                    <>
                      <span>RS</span>
                      <input
                        type="text"
                        value={x.price}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            price: e.target.value,
                          }))
                        }
                      />
                    </>
                  )}
                </div>
                <div>
                  {check ? (
                    <span>{x.rating}</span>
                  ) : (
                    <>
                      {" "}
                      <p>Rating</p>
                      <input className="last_input"
                        type="text"
                        value={x.rating}
                        onChange={(e) =>
                          setData((prev) => ({
                            ...prev,
                            rating: e.target.value,
                          }))
                        }
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
            <div className="right">
              <div>
                {check ? (
                  <p>
                    {x.content}
                  </p>
                ) : (
                  <textarea
                    rows="5"

                    type="text"
                    value={x.content}
                    onChange={(e) =>
                      setData((prev) => ({
                        ...prev,
                        content: e.target.value,
                      }))
                    }
                  />
                )}
              </div>
              <div className="btns">
                {check ? (
                  <button className="ADD_CART bg-danger mt-1 px-2 py-2">
                    ADD TO CART
                  </button>
                ) : (
                  ""
                )}
                {check ? (
                  <>
                    <button onClick={()=>dispatch(deleteData(x.id))}>
                      <AiFillDelete
                        style={{ color: "red", fontSize: "20px" }}
                      />
                    </button>
                    <button onClick={() => setCheck(false)}>
                      <BsFillPencilFill
                        style={{ color: "yellow", fontSize: "20px" }}
                      />
                    </button>
                  </>
                ) : (
                  <>
                    <button className="update" onClick={() => setCheck(true)}>
                      Cancel
                    </button>
                    <button className="update" onClick={() => console.log('hello world')}>Save</button>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}

export default ItemList;


// {
//   "id": 2,
//   "image": "https://w7.pngwing.com/pngs/313/947/png-transparent-gray-sony-smartwatch-sony-smartwatch-android-wear-smart-watches-gadget-electronics-mobile-phone.png",
//   "name": "Watch",
//   "price": 3999,
//   "rating": 3,
//   "editable": false,
//   "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex minima, quibusdam repellat dolorum dicta deserunt consequuntur quaerat neque. Rem omnis ab, iusto numquam voluptas dolore? Expedita perferendis iure cupiditate odio."
// },
// {
//   "id": 4,
//   "name": "CHAIR",
//   "image": "https://e7.pngegg.com/pngimages/184/85/png-clipart-throne-chair-red-throne-miscellaneous-furniture.png",
//   "price": 999,
//   "rating": 5,
//   "editable": false,
//   "content": "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex minima, quibusdam repellat dolorum dicta deserunt consequuntur quaerat neque. Rem omnis ab, iusto numquam voluptas dolore? Expedita perferendis iure cupiditate odio."
// }