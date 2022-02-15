import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Creators as MemoryActions } from "../../store/ducks/memory";

import { Container, Row, Col } from "react-bootstrap";
import CardBoard from "../CardBoard";
import { Button } from "bootstrap";
import { useBlockchain } from '../../blockchain';

const GameContainer = (props) => {

    const {
        isLoged,
        account,
        balance,
        doLogin,
        doMint,
        myTokens,
    } = useBlockchain();

    const handleLogin = async () => {
        await doLogin();
    }

    const  handleOnWonCard = (cardId, cardUrl) => {
        console.log(cardId)
        console.log(cardUrl)
    }

    return(
        <Container>
            <Row>
                <h2 className="text-center" style={{padding:"20px"}}>Memory Game</h2>
            </Row>
            {!isLoged ?
                <Row><Button onClick={handleLogin}>Login</Button></Row> :
                <Row>
                    <Col md={{ span: 4, offset: 4 }}>
                        <CardBoard {...props} onWonCard={handleOnWonCard} ></CardBoard>
                    </Col>
                </Row>
            }
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <CardBoard {...props} onWonCard={handleOnWonCard}  ></CardBoard>
                </Col>
            </Row>
            <Row>
                <h2 className="text-center" style={{padding:"20px"}}>Tokens Collected: </h2>
            </Row>
        </Container>
    )

}

const mapStateToProps = state => ({
    memory: state.memory,
});

const mapDispatchToProps = dispatch =>
bindActionCreators(MemoryActions, dispatch);



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);