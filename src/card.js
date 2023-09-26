import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


function CardComp(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
          {props.title}
        </Card.Title>
        <Card.Text>write a description</Card.Text>
        <Button variant="primary">View Recipe </Button>
      </Card.Body>
    </Card>
  );
}
export default CardComp;