import ProductFormItem from "./ProductFormItem";
import "./productFOrm.scss";
import productFormImage from "../../images/productFormImage.png";

function ProductForm() {
  return (
    <div className="productForm">
      <div className="productForm_container">
        <div className="productForm_wrapper">
          <div className="productForm_wrapper_image">
            <img src={productFormImage} className="productimage" />
          </div>
          <div className="productForm_wrapper_inner">
            <ProductFormItem />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductForm;
