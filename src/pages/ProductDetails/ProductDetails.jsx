import "./ProductDetails.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavBar from "../../components/NavBar/NavBar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const getProduct = async () => {
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setProduct(docSnap.data());
    }
  };
  useEffect(() => {
    getProduct();
  }, [productId]);
  return (
    <div className="productDetails">
      <Sidebar />
      <div className="productDetailsContainer">
        <NavBar />
        <div className="wrapper">
          <div className="box">
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={product?.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{product?.title}</h1>
                <div className="detailItem">
                  <span className="itemKey">Price:</span>
                  <span className="itemValue">{product?.price}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Stock:</span>
                  <span className="itemValue">{product?.stock}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Category:</span>
                  <span className="itemValue">{product?.category}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Description:</span>
                  <span className="itemValue">{product?.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
