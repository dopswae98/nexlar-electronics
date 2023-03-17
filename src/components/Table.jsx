import React, { useContext } from 'react'
import { AuthContext } from './Auth';
import LatLongFormatter from './LatLongFormatter';

const Table = ({page, sateliteData, }) => {
    const {setModalData, modalData, setVisibility} = useContext(AuthContext)
  return (
    <>
        <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th scope="col">#id</th>
                  <th scope="col">DisplayName</th>
                  <th scope="col">Constellation</th>
                  <th scope="col">Healthy indicator</th>
                  <th scope="col">Latitude</th>
                  <th scope="col">Longitude</th>
                </tr>
              </thead>
              <tbody>
                {sateliteData.slice(page * 10 - 10, page * 10).map((item, index)=>
                  <tr onClick={()=>{setVisibility(true); setModalData([item]); console.log(modalData);}}>
                  <th scope="row" key={index}>{item.id}</th>
                    <td>{item.displayName}</td>
                    <td>{item.constellation}</td>
                    <td>{item.orbit.isHealthy? 'true':'false'}</td>

                    {item.path.map((loggo,index)=>
                      <>
                        <td>{loggo.trace.latitude} (<LatLongFormatter latitude ={Number(loggo.trace.latitude)} longitude={Number(loggo.trace.longitude)} />)</td>
                        <td>{loggo.trace.latitude} (<LatLongFormatter latitude ={Number(loggo.trace.longitude)} longitude={Number(loggo.trace.longitude)} />)</td>
                        {/*<td>{loggo.trace.longitude + <LatLongFormatter latitude ={Number(loggo.trace.latitude)} longitude={Number(loggo.trace.longitude)} /> } </td>
                        <td><LatLongFormatter latitude ={Number(loggo.trace.latitude)} longitude={Number(loggo.trace.longitude)} /></td>*/}
                      </>
                   
                  )}
                </tr>
                )}
                
              </tbody>
            </table>
    </>
  )
}

export default Table