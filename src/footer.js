import './App.css'

function Footer() {
    return (
        <div >
            <div style={{ display: 'flex', fontSize: '16px', borderTop: "1px solid lightgrey", marginTop: '100px', paddingTop: '20px', borderBottom: "1px solid lightgrey", paddingBottom: '20px' }}>
                <div style={{ marginLeft: '5px' }}>
                    <h4>We're Always Here To Help</h4>
                    <p>Reach out to us through any of these support channels</p>
                </div>
                <div style={{ position: 'absolute', right: 200 }}>
                    <a className='anchortag' href='#'>
                        <p>HELP CENTER</p>
                        <h5>help.noon.com</h5>
                    </a>
                </div>
                <div style={{ position: 'absolute', right: 10 }}>
                    <a className='anchortag' href='#'>
                        <p>EMAIL SUPPORT</p>
                        <h5>care@noon.com</h5>
                    </a>
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr', fontSize: '16px', backgroundColor: 'white', lineHeight: '1.8em', paddingTop: '20px', paddingBottom: '50px' }}>
                <div>
                    <ul>
                        <h6>ELECTRONICS</h6>
                        <li>Mobiles</li>
                        <li>tablets</li>
                        <li>laptops</li>
                        <li>home Appliances</li>
                        <li>camera</li>
                        <li>photo</li>
                        <li>headphones</li>
                        <li>videogames</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h6>ELECTRONICS</h6>
                        <li>Mobiles</li>
                        <li>tablets</li>
                        <li>laptops</li>
                        <li>home Appliances</li>
                        <li>camera</li>
                        <li>photo</li>
                        <li>headphones</li>
                        <li>videogames</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h6>ELECTRONICS</h6>
                        <li>Mobiles</li>
                        <li>tablets</li>
                        <li>laptops</li>
                        <li>home Appliances</li>
                        <li>camera</li>
                        <li>photo</li>
                        <li>headphones</li>
                        <li>videogames</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h6>ELECTRONICS</h6>
                        <li>Mobiles</li>
                        <li>tablets</li>
                        <li>laptops</li>
                        <li>home Appliances</li>
                        <li>camera</li>
                        <li>photo</li>
                        <li>headphones</li>
                        <li>videogames</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h6>ELECTRONICS</h6>
                        <li>Mobiles</li>
                        <li>tablets</li>
                        <li>laptops</li>
                        <li>home Appliances</li>
                        <li>camera</li>
                        <li>photo</li>
                        <li>headphones</li>
                        <li>videogames</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h6>ELECTRONICS</h6>
                        <li>Mobiles</li>
                        <li>tablets</li>
                        <li>laptops</li>
                        <li>home Appliances</li>
                        <li>camera</li>
                        <li>photo</li>
                        <li>headphones</li>
                        <li>videogames</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        <h6>ELECTRONICS</h6>
                        <li>Mobiles</li>
                        <li>tablets</li>
                        <li>laptops</li>
                        <li>home Appliances</li>
                        <li>camera</li>
                        <li>photo</li>
                        <li>headphones</li>
                        <li>videogames</li>
                    </ul>
                </div>

            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', backgroundColor: 'white', paddingBottom: '50px',  borderBottom: "1px solid lightgrey" }}>
                <div style={{ textAlign: 'center' }}>
                    <h6>SHOP ON THE GO</h6>
                    <img src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" />
                    <img src='https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg' />
                </div>

                <div style={{ textAlign: 'center' }}>
                    <h6>CONNECT WITH US</h6>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '270px 60px 60px 60px 60px 1fr 1fr 1fr 1fr 1fr 1fr 1fr', paddingRight: '5px', paddingleft: '5px', marginTop: '20px', marginBottom: '40px' }}>
                <p style={{fontSize: '16px'}}>© 2023 noon. All Rights Reserved</p>
                <img src="https://z.nooncdn.com/s/app/com/noon/images/mastercard-color.svg" width="40px"/>
                <img src="https://z.nooncdn.com/s/app/com/noon/images/visa-color-v2.png" width="40px"/>
                <img src="https://z.nooncdn.com/s/app/com/noon/images/cash-color.svg"  width="40px"/>
                <img src="https://z.nooncdn.com/s/app/com/noon/images/amex-color.svg" width="40px" />
                <a href="#" className="secondancor">Careers</a>
                <a href="#" className="secondancor">Warranty Policy</a>
                <a href="#" className="secondancor">Sell with us</a>
                <a href="#" className="secondancor">Terms of use</a>
                <a href="#" className="secondancor">Terms of sale</a>
                <a href="#" className="secondancor">Privacy Policy</a>
                <a href="#" className="secondancor">Consumer rights</a>

            </div>
        </div>
    )
}

export default Footer;