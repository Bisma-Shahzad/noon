import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample(a) {
  return (
    <Carousel style={{marginBottom: '20px'}}>
        
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/8429c515-26fc-4661-a8a8-7453682483b9.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://f.nooncdn.com/mpcms/EN0001/assets/ac73d559-9560-4d40-9e0a-61670d1814a3.png"
          alt="Second slide"
        />  
      </Carousel.Item>
      
    </Carousel>
  );
}

export default UncontrolledExample;