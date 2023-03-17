import React from 'react'

const Pagination = ({page, bigData, selectPageHandler, SateliteData}) => {
  return (
    <>
        <div className="pagination pt-1 d-flex justify-content-center">
                <nav aria-label="Page navigation example" >
                  <ul className="pagination">
                    <li className="page-item" onClick={()=>selectPageHandler(page-1)}><button className={page>1?"page-link":"opacity-0"}>Previous</button></li>
                    {
                      [...Array(Math.ceil(bigData.length/10))].map((_,i)=>{
                        return <li className="page-item" key={i} onClick={()=>selectPageHandler(i+1)}><button className="page-link" >{i+1}</button></li>

                      })
                    }
                    
                    <li className="page-item" onClick={()=>selectPageHandler(page+1)}><button className={page<SateliteData.length/10?"page-link":'opacity-0'} >Next</button></li>
                  </ul>
                </nav>
        </div>
    </>
  )
}

export default Pagination