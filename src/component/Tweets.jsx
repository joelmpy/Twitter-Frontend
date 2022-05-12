import "react-bootstrap"
import Card from "react-bootstrap/Card"


function Tweets() {

    return (
        <div className="col-8 pb-2">
            <Card style={{ height: '10rem' }} className="bg-dark">
                <Card.Body>
                    <Card.Title className="text-white text-start" >Username</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted text-start">Post date</Card.Subtitle>
                    <Card.Text className="text-white">
                        contenue du tweet par l'utlisateur
                    </Card.Text>
                    <Card.Link href="#">like</Card.Link>
                    <Card.Link href="#">comment</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
}

export default Tweets