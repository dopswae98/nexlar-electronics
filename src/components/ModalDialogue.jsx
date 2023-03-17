import React, { useContext } from 'react'
import { AuthContext } from './Auth';
import './ModalDialogue.css';

const ModalDialogue = ({visibility, setVisibility}) => {
    const {modalData} = useContext(AuthContext)
  return (
    <div className='modals' style={{display: visibility? 'block': 'none'}}>
        <div className="innerDisplay">
            <div className="header">
                <p>ssdfsdf</p>
                <button type='button' className='btn btn-sm btn-danger' onClick={()=>setVisibility(false)}><h6>X</h6></button>
            </div>
            <div className="sateliteDetails">
                {
                    modalData.map((item, index)=>
                    <div key={index}>
                        <p>{item.id}</p>
                        <p>{item.prn}</p>
                        <p>{item.displayName}</p>
                        <p>{item.constellation}</p>
                        

                        <h5>Orbit Details</h5>
                        <p>{item.orbit.satId}</p>
                        <p>{item.orbit.healthCode}</p>
                        <p>{item.orbit.isHealthy? 'true':'false'}</p>
                        {item.path.map((loggo,index)=>
                      <div key={index}>
                        <p>{loggo.trace.latitude}</p>
                        <p>{loggo.trace.longitude}</p>
                      </div>
                   
                         )}
                    </div>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default ModalDialogue;