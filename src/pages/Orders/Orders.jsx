import "./Orders.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavBar from "../../components/NavBar/NavBar";
import LatestTransactionTable from "../../components/LatestTransactionTable/LatestTransactionTable";

const UserDetails = () => {
  return (
    <div className="orders">
      <Sidebar />
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

export default UserDetails;
