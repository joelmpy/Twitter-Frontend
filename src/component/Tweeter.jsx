import "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Tweets from "../component/Tweets";
import { useForm } from "react-hook-form";

function Tweeter() {

  const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:3003/tweets', {
            method: 'POST',
            credentials: 'include', 
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                alert('You are tweet')
            })
    };

  return (
    <div className="col-5 pb-2">
      <div>
      <Card style={{ height: '10rem' }} className="bg-dark">
        <Card.Body>
          <Card.Title className="text-white text-start">Username</Card.Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Control type="text" placeholder="Quoi de neuf ?" {...register("text", { required: true })}/>
            </Form.Group>
            <Button className="primary" type="submit">Tweeter</Button>
          </Form>
        </Card.Body>
      </Card>
      </div>
      <Tweets />
    </div>
  );
}

export default Tweeter