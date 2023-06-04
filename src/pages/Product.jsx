import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
function Product() {
  const navigate=useNavigate();
  const { id } = useParams();
  return (
    <>
      <section className="productdetails">
        <div className="productleft">
          <div className="productimages">
            <img
              src="https://www.shutterstock.com/image-photo/red-leather-armchair-isolated-on-260nw-1028424553.jpg"
              alt="shofar"
            />
          </div>
          <div>
            <div className="text-center">
              <span className="productNamedetail">Read Seat</span>

              <br />

              <span className="productprice">RS 4000</span>
            </div>
            <div>
              <span>5</span>
            </div>
          </div>
        </div>
        <div className="productright">
          <div>
            <p className="about">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              minima, quibusdam repellat dolorum dicta deserunt consequuntur
              quaerat neque. Rem omnis ab, iusto numquam voluptas dolore?
              Expedita perferendis iure cupiditate odio.
            </p>
          </div>
          <div className="btns">
            <button className="ADD_CART bg-danger mt-1 px-2 py-2">
              ADD TO CART
            </button>
            <button className="ADD_CART bg-danger mt-1 px-2 py-2"
             onClick={()=>navigate('/')}
            >
              Go Back
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Product;
