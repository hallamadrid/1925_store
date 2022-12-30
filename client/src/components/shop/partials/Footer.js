// import React, { Fragment } from "react";
// import moment from "moment";
// import {logo} from './NH.png'
// import { CDBFooter } from 'cdbreact';

// const Footer = (props) => {
//   return (
//     <Fragment>
//       <footer
//         style={{ background: "#303031", color: "#87898A" }}
//         className="z-10 py-6 px-4 md:px-12 text-center"
//       >
//         {logo}
//         Develop & Design Hasan-py © Copyright {moment().format("YYYY")}
        
//         <dev display="flex">
          
          
//           </dev>
//       </footer>
//     </Fragment>
//   );
// };

// export default Footer;
import React from 'react';
import moment from "moment";
import {logo} from "./logo/1925.png";
import { CDBFooter, CDBFooterLink, CDBBox, CDBBtn, CDBIcon } from 'cdbreact';

 const Footer = () => {
  return (
    <CDBFooter className="shadow">
      <CDBBox display="flex" flex="column" className="mx-auto py-5" style={{ width: '90%' }}>
        <CDBBox display="flex" justifyContent="between" className="flex-wrap">
          <CDBBox>
            <a href="/" className="d-flex align-items-center p-0 text-dark">
              <img alt="icon" src={logo} width="50px" href="1925.png" />
              <span className="ml-3 h5 font-weight-bold">ESS STORE</span>
            </a>
            <p className="my-3" style={{ width: '250px' }}>
            Official ESS Store store page. All official club products: jerseys, sweatshirts....
            </p>
            <CDBBox display="flex" className="mt-4">
              {/* <CDBBtn flat color="dark">
                <a href='https://www.facebook.com/ESSStore/'>
                  <CDBIcon fab icon="facebook-f" /></a>
                
              </CDBBtn>
              <CDBBtn flat color="dark" className="mx-3">
                <a href='https://twitter.com/?lang=fr'>
                  <CDBIcon fab icon="twitter" />
                </a>
                
              </CDBBtn>
              <CDBBtn flat color="dark" className="p-2">
                <a href='https://www.instagram.com/_ess.store_/'>
                  <CDBIcon fab icon="instagram" />
                </a>
                
              </CDBBtn> */}
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Instagram
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
              
              <CDBBtn flat color="dark" className="p-2">
                <a href='https://www.instagram.com/_ess.store_/'>
                  <CDBIcon fab icon="instagram" />
                </a>
                
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Facebook
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <CDBBtn flat color="dark">
                <a href='https://www.facebook.com/ESSStore/'>
                  <CDBIcon fab icon="facebook-f" /></a>
                
              </CDBBtn>
            </CDBBox>
          </CDBBox>
          <CDBBox>
            <p className="h5 mb-4" style={{ fontWeight: '600' }}>
              Twitter
            </p>
            <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
            <CDBBtn flat color="dark" className="mx-3">
                <a href='https://twitter.com/?lang=fr'>
                  <CDBIcon fab icon="twitter" />
                </a>
                
              </CDBBtn>
            </CDBBox>
          </CDBBox>
        </CDBBox>
        <small className="text-center mt-5">&copy; ESS STORE, {moment().format("YYYY")}. All rights reserved.</small>
      </CDBBox>
    </CDBFooter>
  );
};
export default Footer