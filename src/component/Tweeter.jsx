import "react-bootstrap"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
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
    <div className="content col-md-5 col-10">
      <div id="tweeter">
        <div id="tittle-tweeter">
        <p>Username</p>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-3">
            <Form.Control id="input-tweeter" type="text" placeholder="Quoi de neuf ?" {...register("text", { required: true })}/>
          </Form.Group>
          <div id="div-button-tweeter">
            <Button id="button-tweeter" className="primary mb-2" type="submit">Tweeter</Button>
          </div>
        </Form>
      </div>
      <Tweets />
    </div>
  );
}

export default Tweeter
