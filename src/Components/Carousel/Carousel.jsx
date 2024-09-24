import './Carousel.css'
import { Carousel, Container } from 'react-bootstrap';
import backgroundImg from '../../assets/carousel-imgs/bgc-carousel.png'

const opinions = [
    {
        id: 1,
        text: "This is a great service! I feel much better now.",
        author: "John Doe"
    },
    {
        id: 2,
        text: "The doctors were very professional and caring.",
        author: "Jane Smith"
    },
    {
        id: 3,
        text: "I highly recommend this clinic to anyone in need.",
        author: "Michael Brown"
    },
    {
        id: 3,
        text: "I highly recommend this clinic to anyone in need.",
        author: "Michael Brown"
    }
];
export default function CarouselSide() {
    return (
        <>
        <section className="carousel-container ">
            <Container className="mt-5">
            <div className="row ustify-content-center">
                <div className="col-lg-8 mx-auto">
                <Carousel >
            {opinions.map(opinion => (
            <Carousel.Item key={opinion.id} className="carousel-item">
                <div className="carousel-caption">
                <p>{opinion.text}</p>
                <h5>- {opinion.author}</h5>
                </div>
            </Carousel.Item>
            ))}
        </Carousel> 
            </div>
            
            </div>
        </Container>
        </section>
        </>
  )
}
{/* <div className="col-lg-3">
                <div className="img-container">
                    <img src={backgroundImg} alt="" />
                </div>
            </div> */}