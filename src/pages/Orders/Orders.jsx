import "./Orders.scss";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import LatestTransactionTable from "../../components/LatestTransactionTable/LatestTransactionTable";

const Orders = () => {
  return (
    <div className="orders">
      <SideBar />
      <div className="ordersContainer">
        <NavBar />

        <div className="box">
          <h1 className="title">Orders</h1>
          <LatestTransactionTable />
        </div>
      </div>
    </div>
  );
};

export default Orders;
