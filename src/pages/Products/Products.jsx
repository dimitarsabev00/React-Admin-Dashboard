import "./Products.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTableProducts from "../../components/DataTableProducts/DataTableProducts";

const Products = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTableProducts />
      </div>
    </div>
  );
};

export default Products;
