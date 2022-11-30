import "./Users.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTableUsers from "../../components/DataTableUsers/DataTableUsers";

const Users = ({ columns, rows }) => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <DataTableUsers />
      </div>
    </div>
  );
};

export default Users;
