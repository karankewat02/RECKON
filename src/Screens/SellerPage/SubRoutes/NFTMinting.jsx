import React, { useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import Loading from "../../Loading/Loading";
import Style from "../SellerPage.module.css";
import Context from "../../../Context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function NFTMinting() {
  const [loggedInUserData] = useContext(Context);
  const [ProductData, setProductData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handelMinting = async (img_url) => {
    await axios
      .post("http://localhost:5000/mintingImage", {
        img_url: img_url,
      })
      .then(async(res) => {
        const image = new Image();
        image.src = res.data;

        image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;

        const context = canvas.getContext('2d');
        context.drawImage(image, 0, 0);

        const downloadLink = document.createElement('a');
        downloadLink.download = 'image.png';
        downloadLink.href = canvas.toDataURL();
        downloadLink.click();
        };
        toast.success("Image Downloaded");
      })
      .catch((err) => {
        toast.error("Something went wrong ");
      });


    navigate("/seller/nftMinting/mintingScreen");
  };

  const getOrders = async () => {
    setLoading(true);
    axios
      .get("https://kalashakti-node-hosted.vercel.app/api/products")
      .then(function (response) {
        setProductData(response.data);
        console.log(response);
        console.log(ProductData);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
        toast.error(" Failed!", { duration: 4000 });
      });
  };

  useEffect(() => {
    getOrders();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <h3>Products For Minting</h3>

          <div className={Style.OrdersContainer}>
            {ProductData.map((e, index) => {
              return (
                <>
                  {e.sellerId === loggedInUserData.data._id ? (
                    <div
                      key={index}
                      className={Style.OrderCard}
                      style={{ gridTemplateColumns: "1.5fr 1fr .5fr" }}
                    >
                      <div>
                        <p>
                          <small>Product id : </small>
                          {e._id}
                        </p>
                        <p>
                          <small>Product Name : </small>
                          {e.title}
                        </p>
                      </div>
                      <div>
                        <h4>Product Images</h4>
                        <div style={{ marginBlock: "1rem" }}>
                          <img
                            style={{ marginInline: "1rem" }}
                            width={100}
                            key={index}
                            src={e?.img[0]}
                            alt="product"
                          />
                        </div>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          alignItem: "center",
                        }}
                      >
                        <button onClick={() => handelMinting(e?.img[0])}>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                            />
                          </svg>
                          Mint NFT
                        </button>
                      </div>
                    </div>
                  ) : (
                    <></>
                  )}
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
