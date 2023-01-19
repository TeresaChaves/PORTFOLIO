
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import LottieComp from "../Lottie/Lottie"
import headerImg from "../../assets/img/header-img.svg"

function Banner() {

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Bienvenid@ a mi Porfolio
                        </span>
                        <h1>{`Soy Web developer`} <span className="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia natus est eveniet atque, dolore aliquid inventore eum enim sed laborum aspernatur asperiores veritatis officiis impedit, obcaecati corrupti, blanditiis nulla possimus.
                        </p>
                        <button onClick={() => console.log('conect')}>Conecta<ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        {/* <img src={headerImg} alt="Header"></img> */}
                        <LottieComp></LottieComp>

                    </Col>
                </Row>
            </Container>

        </section>
    )


}
export default Banner