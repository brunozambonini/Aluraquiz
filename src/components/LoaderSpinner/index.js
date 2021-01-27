import React from 'react';
import styled from 'styled-components';
import Loader from 'react-loader-spinner'
 export default class LoaderSpinner extends React.Component {
  //other logic
    render() {
     return(
      <Loader
         type="Hearts"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs
 
      />
     );
    }
 }