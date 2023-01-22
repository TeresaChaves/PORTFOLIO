import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './ProjectsCards.css'

function ProjectCard({ title, description, imgUrl }) {
    return (




        <div class="card" style={{ width: '18rem' }}>
            <div class="card-details">
                <img className="imgcard" src={imgUrl} alt="image" />
                <p class="text-title">{title}</p>
                <p class="text-body">{description}</p>
            </div>
            <Row>
                <button class="cssbuttons-io">
                    <span><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M24 12l-5.657 5.657-1.414-1.414L21.172 12l-4.243-4.243 1.414-1.414L24 12zM2.828 12l4.243 4.243-1.414 1.414L0 12l5.657-5.657L7.07 7.757 2.828 12zm6.96 9H7.66l6.552-18h2.128L9.788 21z" fill="currentColor"></path></svg> Code</span>
                </button>
                <button class="cssbuttons-io">
                    <span>Web</span>
                </button>
            </Row>
        </div>












        // <Card style={{ width: '18rem' }}>
        //     <Card.Img variant="top" src={imgUrl} />
        //     <Card.Body>
        //         <Card.Title>{title}</Card.Title>
        //         <Card.Text>
        //             {description}.
        //         </Card.Text>
        //         <Button variant="primary">Go somewhere</Button>
        //     </Card.Body>
        // </Card>







        // <Row xs={1} md={2} className="g-4">
        //     {Array.from({ length: 2 }).map((_, idx) => (
        //         <Col>
        //             <Card>
        //                 <Card.Img variant="top" src={imgUrl} />
        //                 <Card.Body>
        //                     <Card.Title>{title}</Card.Title>
        //                     <Card.Text>
        //                         {description}
        //                     </Card.Text>
        //                 </Card.Body>
        //             </Card>
        //         </Col>
        //     ))}
        // </Row>



        // <Row xs={6} md={2} className="g-4">

        //     <Col>
        //         <Card>
        //             <Card.Img src={imgUrl} />
        //             <Card.Body>
        //                 <Card.Title>{title}</Card.Title>
        //                 <Card.Text>
        //                     {description}
        //                 </Card.Text>
        //             </Card.Body>
        //         </Card>
        //     </Col>

        // </Row>


    );
}

export default ProjectCard;