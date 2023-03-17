// eslint-disable-next-line
import React from "react";

const LatLongFormatter = (latitudes, longitudes) => {
  //console.log('latitudes,longitude',latitudes.longitude);
  //const [latitude, setLatitude] = useState('');
  //const [longitude, setLongitude] = useState('');

  const formatDegreesMinutesSeconds = (coordinate) => {
    let absoluteValue = Math.abs(coordinate);

    let degrees = Math.floor(absoluteValue);

    let minutesDecimalPart = (absoluteValue - degrees) * 60;

    let minutesIntegerPart = Math.floor(minutesDecimalPart);

    let secondsDecimalPart = (minutesDecimalPart - minutesIntegerPart) * 60;

    let secondsIntegerPart = Math.round(secondsDecimalPart);

    return `${degrees}° ${minutesIntegerPart}' ${secondsIntegerPart}"`;
  };

  return <>{formatDegreesMinutesSeconds(Number(latitudes.latitude))}</>;
};
export default LatLongFormatter;
