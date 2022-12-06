import "./UserDetails.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import NavBar from "../../components/NavBar/NavBar";
import Chart from "../../components/Chart/Chart";
import LatestTransactionTable from "../../components/LatestTransactionTable/LatestTransactionTable";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/firebase";

const UserDetails = () => {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const getUser = async () => {
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
    }
  };
  useEffect(() => {
    getUser();
  }, [userId]);
  console.log(user);
  return (
    <div className="userDetails">
      <Sidebar />
      <div className="userDetailsContainer">
        <NavBar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img src={user?.img} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{`${user?.firstName} ${user?.lastName}`}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{user?.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{user?.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{user?.address}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{user?.country}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <LatestTransactionTable />
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
