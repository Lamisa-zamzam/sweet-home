// import React from 'react';
// import Header from '../../Shared/Header/Header';
// import HeaderTop from '../../Shared/HeaderTop/HeaderTop';
// import data from '../../../data.json';
// import { useParams } from 'react-router-dom';
// import './ApartmentDetails.css'

// const ApartmentDetails = () => {
//     const {id} = useParams();
//     const result = data.find(ap => ap.id == id);
//     console.log('id', id, result);
//     return (
//         <div>
//             <HeaderTop></HeaderTop>
//             <Header></Header>
//             <div className="apartment-header">
//                 <h1>{result.title}</h1>
//             </div>
//         </div>
//     );
// };

// export default ApartmentDetails;