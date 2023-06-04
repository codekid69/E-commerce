import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { useState } from "react";
import { Link } from "react-router-dom";
function ItemList() {
  const [check, setCheck] = useState(false);
  const [data, setData] = useState({
    name: "",
    price: "",
    rating: "",
    content: "",
  });
  let arr = [1, 2, 3, 4, 5];
  console.log(data);
  const id=12121;
  return (
    <>
      {arr.map((x) => {
        return (
          <section className="listItem">
            <div className="left">
              <div className="images">
                {
                  check ?
                  <>
                  <Link to={`/product/${id}`} >
                  <img
                    src="https://www.shutterstock.com/image-photo/red-leather-armchair-isolated-on-260nw-1028424553.jpg"
                    alt="shofar"
                  />
                </Link>
                  </>
                  :
                  <img
                    src="https://www.shutterstock.com/image-photo/red-leather-armchair-isolated-on-260nw-1028424553.jpg"
                    alt="shofar"
                  />
                }
              </div>
              <div>
                <div>
                  {check ? (
                    <span className="productName">Read Seat</span>
                  ) : (
                    <input
                      type="text"
                      value={data.name}
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
                      <span>RS 4000</span>
                    </>
                  ) : (
                    <>
                      <span>RS</span>
                      <input
                        type="text"
                        value={data.price}
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
                    <span>5</span>
                  ) : (
                    <>
                      {" "}
                      <p>Rating</p>
                      <input
                        type="text"
                        value={data.price}
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
                    minima, quibusdam repellat dolorum dicta deserunt
                    consequuntur quaerat neque. Rem omnis ab, iusto numquam
                    voluptas dolore? Expedita perferendis iure cupiditate odio.
                  </p>
                ) : (
                  <textarea
                    rows="5"
                    cols="55"
                    type="text"
                    value={data.content}
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
                    <button>
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
                    <button className="update">Save</button>
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
