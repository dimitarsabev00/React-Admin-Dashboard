import "./Products.scss";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import DataTableProducts from "../../components/DataTableProducts/DataTableProducts";

const Products = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTableProducts />
      </div>
    </div>
  );
};

export default Products;
