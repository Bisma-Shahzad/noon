// import React from 'react';
// import Mycard from './mycard';
// import './mycard.css';
// // import './imagecaraousel.css';
// import { useState } from 'react';

// function Imagecaraousel() {

//     const [product, setproduct] = useState([
//         {
//             'title': 'iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.avif',
//             'price': 5218.00
//         },
//         {
//             'title': 'iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif',
//             'price': 5149.00
//         },
//         {
//             'title': 'PlayStation 5 Console (Disc Version) With Controller',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif',
//             'price': 2091.00
//         },
//         {
//             'title': '3300-piece-small-colourful-bracelet-beads-with-a-z-alphabet-letter',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1633252956/N48441886A_1.avif',
//             'price': 25.00
//         },
//         {
//             'title': 'bluetooth-full-touch-call-smartwatch-with-replaceable-strap-black',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif',
//             'price': 24.95
//         },
//         {
//             'title': 'galaxy-a13-dual-sim-blue-light-blue-4gb-ram-64gb-4g-middle-east-version',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif',
//             'price': 520.00
//         },
//         {
//             'title': 'airpods-2nd-gen-with-charging-case-white',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1668531488/N22732308A_1.avif',
//             'price': 389.00
//         },
//         {
//             'title': 'iphone-11-white-128gb-4g-lte-2020-slim-packing-middle-east-version',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1667829014/N41247610A_1.avif',
//             'price': 1999.00
//         },
//         {
//             'title': 'foldable-charcoal-bbq-grill-black',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1642141305/N39861491A_5.avif',
//             'price': 25.00
//         },
//         {
//             'title': 'tws-bluetooth-wireless-in-ear-headset-white',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1667497453/N27393383A_1.avif',
//             'price': 119.00
//         },
//         {
//             'title': '24v-electric-drifting-scooter',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1664110823/N39674788A_1.avif',
//             'price': 320.65
//         },
//         {
//             'title': 'glass-seed-and-alphabet-letter-beads-art-starter',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1663762039/N51638356A_1.avif',
//             'price': 31.00
//         },
//         {
//             'title': '55-piece-the-feel-twice-lomo-card',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1663762039/N51638356A_1.avif',
//             'price': 30.00
//         },
//         {
//             'title': 'ipad-2021-9th-generation-10-2-inch-64gb-wifi-space-gray',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.avif',
//             'price': 1233.00
//         },
//         {
//             'title': 'iphone-14-128gb-blue-5g-with-facetime-middle-east-version',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1662640939/N53346628A_1.avif',
//             'price': 3056.00
//         },
//         {
//             'title': 'galaxy-s22-ultra-dual-sim-burgundy-12gb-ram',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1653053749/N52535496A_1.avif',
//             'price': 3423.95
//         },
//         {
//             'title': 'mi-android-tv-stick-with-built-in-chromecast-full-hd',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1668527232/N39265265A_1.avif',
//             'price': 130.00
//         },
//         {
//             'title': 'tune-510bt-wireless-on-ear-headphones-pure-bass',
//             'image': 'https://f.nooncdn.com/products/tr:n-t_240/v1628140073/N49741483A_1.avif',
//             'price': 153.00
//         },
//     ])
//     return (
        // <div className='product-container'>
        //     <button className='pre-btn'><p>&lt;</p></button>
        //     <button className='next-btn'><p>&gt;</p></button>
            // product.map(x => {
            //     return <Mycard image={x.image} title={x.title} price={x.price} />
            // })
            /* <Mycard cardno='1' />
            <Mycard cardno='2' />
            <Mycard cardno='3' />
            <Mycard cardno='4' />
            <Mycard cardno='5' />
            <Mycard cardno='6' />
            <Mycard cardno='7' />
            <Mycard cardno='8' />
            <Mycard cardno='9' />
            <Mycard cardno='10' />
            <Mycard cardno='11' />
            <Mycard cardno='12' />
            <Mycard cardno='13' />
            <Mycard cardno='14' />
            <Mycard cardno='15' />
            <Mycard cardno='16' />
            <Mycard cardno='17' />
            <Mycard cardno='18' />
        </div> */
//     )
// }

// export default Imagecaraousel;

import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample(a) {
  return (
    <Carousel slide={false} controls={false}>
        
      <Carousel.Item>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'}}>
        <div style={{backgroundColor: 'black', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'black', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'black', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'black', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'black', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'black', width: '100px', height: '100px'}}></div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
      <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr'}}>
        <div style={{backgroundColor: 'green', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'green', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'green', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'green', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'green', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'green', width: '100px', height: '100px'}}></div>
        </div>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;