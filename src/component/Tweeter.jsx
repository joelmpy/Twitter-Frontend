import "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"

function Tweeter() {

  return (
    <div className="col-12 pb-2">
      <Card style={{ height: '10rem' }} className="bg-dark">
        <Card.Body>
          <Card.Title className="text-white text-start">Username</Card.Title>
          <Form>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Quoi de neuf ?" />
            </Form.Group>
            <Button className="primary" type="submit">Tweeter</Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Tweeter