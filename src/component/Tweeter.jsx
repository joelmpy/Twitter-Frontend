import "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Tweets from "../component/Tweets";

function Tweeter() {

  return (
    <div className="content col-md-5 col-10">
      <div id="tweeter">
        <div id="tittle-tweeter">
        <p>Username</p>
        </div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Control type="text" placeholder="Quoi de neuf ?" />
          </Form.Group>
          <div id="div-button-tweeter">
            <Button id="button-tweeter" className="primary" type="submit">Tweeter</Button>
          </div>
        </Form>
      </div>
      <Tweets />
    </div>
  );
}

export default Tweeter