import React, {useState, useEffect, useContext, lazy, Suspense} from 'react'

import serviceData from './SateliteData'
import SateliteData from './SateliteData'
import { AuthContext } from '../components/Auth';
import { Redirect, withRouter } from 'react-router-dom';
import axios from 'axios';
import ModalDialogue from '../components/ModalDialogue';
import NavBar from '../components/NavBar';
import Pagination from '../components/Pagination';
const Table = lazy(()=> import('../components/Table')) ;

function AllSatelites({history}) {
    
    const [data, setData] = useState([...serviceData])
    const [filterVal, setFilterVal] = useState('')
    const [searchApiData, setSearchApiData] = useState([])
    const [page, setPage] = useState(1)
    const [sateliteData, setSateliteData] = useState([...SateliteData])

    //const backupData = serviceData
    const bigData = sateliteData
   
    useEffect(()=>{
      const fetchData = async ()=>{
        const result = await axios('https://gnssplanningbeta.azurewebsites.net/api/SatelliteLocations/');
        console.log(`all satelites data ${result.data}`)
        setSateliteData(result.data);
      }

      fetchData();
      setData([...serviceData])
      setSearchApiData([...SateliteData])
      setSateliteData([...SateliteData])
      console.log('data',data);
      console.log('satelitedata', sateliteData);
      console.log('bigData', bigData.length);
      console.log('searchApiData', searchApiData);
    },[]);

    const selectPageHandler = (selectedPage)=>{
      if(
        selectedPage >=1 &&
        selectedPage <= Math.ceil(sateliteData.length/10) &&
        selectedPage !== page
      )
        //console.log(selectedPage,page);
        setPage(selectedPage);
      
        
    }

    const onSort = sortType => {
      //const sorted = [...data].sort((a,b)=> a.title.localCompare(b.title));
      if (sortType==='asc'){
        const sorted = [...bigData].sort((a,b)=>a.displayName > b.displayName ? 1 : -1)
        setSateliteData(sorted)
      }
      else{
        const sorted = [...bigData].sort((a,b)=>a.displayName < b.displayName ? 1 : -1)
        setSateliteData(sorted)
      }
      
      //console.log(sortType, sorted);
      
    }
    

    const handleFilter = (e)=>{
      if (e.target.value === ''){
        setSateliteData(searchApiData)
      }
      else {
        setPage(1);
        const filterResult = searchApiData.filter(item=>
            item.displayName.toLowerCase().includes(e.target.value.toLowerCase()
            ) || item.constellation.toLowerCase().includes(e.target.value.toLowerCase()
          ))
          console.log('filterResult',filterResult);
          if(filterResult.length > 0){
            setSateliteData(filterResult)
          } else {
            setSateliteData([])
          }
          
      }
      setFilterVal(e.target.value)
    }

    const {setValidated, validated, visibility, setVisibility} = useContext(AuthContext)

    const handleLogout =() =>{
      //e.preventDefault();
      console.log('tagged', validated);
      setValidated(false);

      try {
        history.push('/')
    } catch (error) {
        alert(error)
    }

      if(!validated){
        console.log('!validated', !validated);
        return <Redirect to='/' />
    }
    }
  return (
    <div className="dropdown py-3">
          <ModalDialogue visibility={visibility} setVisibility={setVisibility} onClose/>
            <div className="container">

                
                <NavBar onSort={onSort} filterVal={filterVal} handleFilter={handleFilter} handleLogout={handleLogout}/>
                

                <Suspense fallback={
                  <>
                    <div className="spinner-grow text-primary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-secondary" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-success" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-danger" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-warning" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-info" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-light" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <div className="spinner-grow text-dark" role="status">
                          <span className="visually-hidden">Loading...</span>
                    </div>
                  </>
                }>
                  
                  <Table page={page} sateliteData={sateliteData}/>
                </Suspense>
                
                

              {data.length > 0 && 
              
              <Pagination page={page} bigData={bigData} selectPageHandler={selectPageHandler} SateliteData={SateliteData}/>
              
              }
            
            </div>
      </div>
  )
}

export default withRouter(AllSatelites);