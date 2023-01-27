import React,{Fragment} from 'react';
import './mycard.css';

function Mycard(){
    return(
        // <div style={{width: '200px', margin: '10px', height: '300px'}}>
        //     <img src={a.image} width='100%' height='100%'/>
        //     <p>{a.title}</p>
        //     <p>AED <span>{a.price}</span></p>
        // </div>

        // <div className='mycard'>Mycard No. {a.cardno}</div>

        <Fragment>
            <section>
                <div className='rows'>
                <div className='product'>
                    <div className='product-thumb'>
                        <img src="https://f.nooncdn.com/products/tr:n-t_240/v1643263567/N50867004A_1.avif" alt="" className="imagediv" />
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>5218.00</span></p>
                        </div>
                    </div>
                </div>

                {/* <div className='product'> */}
                    {/* <div className='product-thumb' style={{width: '100%'}}> */}
                        <img src="https://f.nooncdn.com/products/tr:n-t_240/v1662640953/N53346840A_1.avif" alt="" width='100%' />
                    {/* </div> */}
                    {/* <div className='product-body'>
                        <div className='title'>
                            <h6>iPhone 14 Pro Max Physical Dual Sim 256GB Deep Purple</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>5149.00</span></p>
                        </div>
                    </div> */}
                {/* </div> */}

                <div className='product'>
                    <div className='product-thumb'>
                        <img src="https://f.nooncdn.com/products/tr:n-t_240/v1669724765/N40633047A_1.avif" alt="" />
                     </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>PlayStation 5 Console (Disc Version) With Controller</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>2091.00</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1633252956/N48441886A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>3300-piece-small-colourful-bracelet-beads-with-a-z-alphabet-letter</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>25.00</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1663322644/N43241184A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>bluetooth-full-touch-call-smartwatch-with-replaceable-strap-black</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>24.95</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1660052743/N52856958A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>galaxy-a13-dual-sim-blue-light-blue-4gb-ram-64gb-4g-middle-east-version</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>520.00</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1668531488/N22732308A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>airpods-2nd-gen-with-charging-case-white</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>589.00</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1667829014/N41247610A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>iphone-11-white-128gb-4g-lte-2020-slim-packing-middle-east-version</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>1999.00</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1642141305/N39861491A_5.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>foldable-charcoal-bbq-grill-black</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>25.00</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1667497453/N27393383A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>tws-bluetooth-wireless-in-ear-headset-white</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>119.00</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1664110823/N39674788A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>24v-electric-drifting-scooter</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>320.65</span></p>
                        </div>
                    </div>
                </div>

                <div className='product'>
                    <div className='product-thumb'>
                        <a href='#'><img src="https://f.nooncdn.com/products/tr:n-t_240/v1663762039/N51638356A_1.avif" alt=""></img></a>
                    </div>
                    <div className='product-body'>
                        <div className='title'>
                            <h6>glass-seed-and-alphabet-letter-beads-art-starter</h6>
                        </div>
                        <div className='price'>
                            <p>AED <span className='price-rate'>31.00</span></p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Mycard;