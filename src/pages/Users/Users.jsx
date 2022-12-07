import "./Users.scss";
import SideBar from "../../components/SideBar/SideBar";
import Navbar from "../../components/navbar/Navbar";
import DataTableUsers from "../../components/DataTableUsers/DataTableUsers";

const Users = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <Navbar />
        <DataTableUsers />
      </div>
    </div>
  );
};

export default Users;
