import "./Users.scss";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import DataTableUsers from "../../components/DataTableUsers/DataTableUsers";

const Users = () => {
  return (
    <div className="list">
      <SideBar />
      <div className="listContainer">
        <NavBar />
        <DataTableUsers />
      </div>
    </div>
  );
};

export default Users;
