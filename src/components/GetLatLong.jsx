import { useEffect, useContext } from 'react';
import { AuthContext } from './Auth';

const GetLatLong = () => {
  const {setLatitude, setLongitude, longitude, latitude} = useContext(AuthContext)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(position => {
        
      setLongitude(position.coords.longitude);
      setLatitude(position.coords.latitude);
    });
  }, [latitude, longitude]);

  return (
    <p>{`latitude ${longitude} & ${latitude}`}</p>
  );  
};

export default GetLatLong;