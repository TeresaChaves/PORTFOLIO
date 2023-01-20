
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import LottieComp from "../Lottie/Lottie"
import headerImg from "../../assets/img/header-img.svg"
import { useState, useEffect } from 'react'




function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Full Stack", "Frontend", "Backend"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }



    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">
                            Bienvenid@ a mi Porfolio
                        </span>
                        <h1>{`Soy Web Developer`} <span className="wrap">{text}</span></h1>
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