import { Container, Row, Col } from "react-bootstrap";

const GameContainer = (props) => {

    return(
        <Container>
            <Row>
                <h2 className="text-center" style={{padding:"20px"}}>Memory Game</h2>
            </Row>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <CardBoard {...props} ></CardBoard>
                </Col>
            </Row>
        </Container>
    )

}

export default GameContainer ;