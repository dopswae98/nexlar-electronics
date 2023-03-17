import React, { useState, useEffect, useContext } from "react";
import serviceData from "./SateliteData";
import SateliteData from "./SateliteData";
import { AuthContext } from "../components/Auth";
import { Redirect, withRouter } from "react-router-dom";
import Table from "../components/Table";
import ModalDialogue from "../components/ModalDialogue";
import axios from "axios";
import Pagination from "../components/Pagination";
import NavBar from "../components/NavBar";
import GetLatLong from "../components/GetLatLong";

function VisibleSatelites({ history }) {
  const {
    setValidated,
    validated,
    latitude,
    longitude,
    visibility,
    setVisibility,
  } = useContext(AuthContext);

  const [data, setData] = useState([...serviceData]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState([]);
  const [page, setPage] = useState(1);
  const [sateliteData, setSateliteData] = useState([...SateliteData]);

  //const backupData = serviceData
  const bigData = sateliteData;
  console.log(`latitude and longitude ${(latitude, longitude)}`);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        `https://gnssplanningbeta.azurewebsites.net/api/SatelliteLocations/VisibleFrom/${latitude}/${longitude}/`
      );
      setSateliteData(result.data);
      console.log(`resuts data ${result.data}`);
    };

    fetchData();
    setData([...serviceData]);
    setSearchApiData([...SateliteData]);
    setSateliteData([...SateliteData]);
    console.log("data", data);
    console.log("satelitedata", sateliteData);
    console.log("bigData", bigData.length);
    console.log("searchApiData", searchApiData);
  }, [latitude, longitude]);

  const selectPageHandler = (selectedPage) => {
    if (
      selectedPage >= 1 &&
      selectedPage <= Math.ceil(sateliteData.length / 10) &&
      selectedPage !== page
    )
      //console.log(selectedPage,page);
      setPage(selectedPage);
  };

  const onSort = (sortType) => {
    //const sorted = [...data].sort((a,b)=> a.title.localCompare(b.title));
    if (sortType === "asc") {
      const sorted = [...bigData].sort((a, b) =>
        a.displayName > b.displayName ? 1 : -1
      );
      setSateliteData(sorted);
    } else {
      const sorted = [...bigData].sort((a, b) =>
        a.displayName < b.displayName ? 1 : -1
      );
      setSateliteData(sorted);
    }

    //console.log(sortType, sorted);
  };

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setSateliteData(searchApiData);
    } else {
      setPage(1);
      const filterResult = searchApiData.filter(
        (item) =>
          item.displayName
            .toLowerCase()
            .includes(e.target.value.toLowerCase()) ||
          item.constellation
            .toLowerCase()
            .includes(e.target.value.toLowerCase())
      );
      console.log("filterResult", filterResult);
      if (filterResult.length > 0) {
        setSateliteData(filterResult);
      } else {
        setSateliteData([]);
      }
    }
    setFilterVal(e.target.value);
  };

  const handleLogout = () => {
    //e.preventDefault();
    console.log("tagged", validated);
    setValidated(false);

    try {
      history.push("/menu");
    } catch (error) {
      alert(error);
    }

    if (!validated) {
      console.log("!validated", !validated);
      return <Redirect to="/" />;
    }
  };
  return (
    <div className="dropdown py-3">
      <GetLatLong />
      <ModalDialogue
        visibility={visibility}
        setVisibility={setVisibility}
        onClose
      />
      <div className="container">
        {/*navbar */}
        <NavBar
          onSort={onSort}
          filterVal={filterVal}
          handleFilter={handleFilter}
          handleLogout={handleLogout}
        />
        {/*navbar */}

        <Table page={page} sateliteData={sateliteData} />

        {data.length > 0 && (
          <Pagination
            page={page}
            bigData={bigData}
            selectPageHandler={selectPageHandler}
            SateliteData={SateliteData}
          />
        )}
      </div>
    </div>
  );
}

export default withRouter(VisibleSatelites);
