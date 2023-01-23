import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import './ProjectsCards.css'
import navIcon2 from '../../assets/img/icons8-github.svg'


function ProjectCard({ title, description, imgUrl, url, git }) {
    return (




        <div class="card" style={{ width: '18rem' }}>
            <div class="card-details">
                <img className="imgcard" src={imgUrl} alt="image" />
                <p class="text-title">{title}</p>
                <p class="text-body">{description}</p>
            </div>
            <Row>

                {/* <div className="social-icon">
                    <a href="https://github.com/TeresaChaves"><img src={navIcon2} alt="github" /></a>
                </div> */}

                <div>
                    <a href={git}>
                        <button className="button2" >
                            <span> Code</span>
                        </button>
                    </a>
                    <a href={url}>
                        <button className="button2">
                            <span>Web</span>
                        </button>
                    </a>
                </div>

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