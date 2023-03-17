import React, {useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import './LanguagTesting.css';

const LanguageTesting = () => {
  const {t, i18n} = useTranslation();
  const onChangeLanguage = e =>{
    i18n.changeLanguage(e.target.value)
  }

    useEffect(()=>{
        for (let index = 0; index < document.getElementsByClassName('lang').length; index++ ){
          const element = document.getElementsByClassName('lang')[index];
          console.log(`lement ${element}`);
          if (element.value === i18n.language){
            element.setAttribute('selected', 'true')
          }
        }  
      },[])

  return (
    <div className=''>
        <section className='Navbar'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li>
      </ul>
      
    </div>
    <div>
    <select className="form-select" aria-label="Default select example" onChange={onChangeLanguage}>
      
      <option className='lang' value="en" selected>EN</option>
      <option className='lang' value="fr">FR</option>
      
    </select>
    </div>
  </div>
  
</nav>
        </section> 
        <section className='header'>
            <div className="container  vh-100">
              <h1 className='text-center pt-3'>{t('Welcome to React')}</h1>
            </div>
            
        </section>
    </div>
  )
}

export default LanguageTesting