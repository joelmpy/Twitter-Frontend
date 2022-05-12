import "react-bootstrap"
import { useState } from "react"
import Modal from 'react-bootstrap/Modal'
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useForm } from "react-hook-form";


function Exemple() {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, formState: { errors }, getValues } = useForm();
  const onSubmit = data => {
    delete data.confirmPassword;
    fetch('http://localhost:3003/users/register', {
      method: 'POST',
      headers: new Headers({ 'content-type': 'application/json' }),
      body: JSON.stringify(data)
    })
      .then(response => response.json())
      .then(json => {
        console.log(json)
        alert('You are registered')
      })
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        S'inscrire
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
          <Modal.Title>Inscription</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>

            <div className="col-12">
              <label htmlFor="lastName" className="form-label">Username</label>
              <input type="text" name="username" className="form-control" id="username" placeholder="joel" {...register("username", { required: true })} required />
              {errors.username && <span>This field is required</span>}
            </div>

            <div className="col-12 mt-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name="password" className="form-control" id="password" placeholder="********" {...register("password", { required: true, minLength: 8 })} required />
              {errors.password?.type === 'required' && <span>This field is required</span>}
              {errors.password?.type === 'minLength' && <span>This field needs to be more than 8 characters </span>}
            </div>

            <div className="col-12 mt-3">
              <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
              <input type="password" name="confirmpassword" className="form-control" id="confirmpassword" placeholder="********" {...register("confirmPassword", { validate: value => getValues('password') === value })} required />
              {errors.confirmPassword && <span>This field needs to be the same as the password </span>}
            </div>

            <Button className="mt-3" variant="primary" type="submit"> Send </Button>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>Close</Button>
        </Modal.Footer>

      </Modal>
    </>
  );
}

export default Exemple