import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Widget from "../../components/Widget/Widget";
import Chart from "../../components/Chart/Chart";
import "./Home.scss";
import Featured from "../../components/Featured/Featured";
import LatestTransactionTable from "../../components/LatestTransactionTable/LatestTransactionTable";

const Home = () => {
  return (
    <div className="home">
      <SideBar />
      <div className="homeContainer">
        <NavBar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="product" />
          <Widget type="order" />
          <Widget type="earning" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <LatestTransactionTable />
        </div>
      </div>
    </div>
  );
};

export default Home;
