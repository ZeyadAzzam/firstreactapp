import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

function CardComp(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // function to save into the local storage
  function saveToLocalStorage() {
    if (localStorage.getItem("favorites")) {
      let StringData = localStorage.getItem("favorites");
      let mealsArr = JSON.parse(StringData);
      mealsArr.push(props);

      let StringedData = JSON.stringify(mealsArr);
      localStorage.setItem("favorites", StringedData);
    } else {
      let mealsArr = [];
      mealsArr.push(props);
      let StringedData = JSON.stringify(mealsArr);
      localStorage.setItem("favorites", StringedData);
    }
  }

  function deleteFavorites() {
    let stringedLocalData = localStorage.getItem("favorites");
    let localData = JSON.parse(stringedLocalData);
    localData.splice(props.index, 1);
    let storeData = JSON.stringify(localData);
    localStorage.setItem("favorites", storeData);
  }

  return (
    <>
      {/* card */}

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title style={{ textAlign: "center", fontWeight: "bold" }}>
            {props.title}
          </Card.Title>

          <Button variant="primary" onClick={handleShow}>
            Show Recipe
          </Button>
          <Button
            variant="primary"
            onClick={props.FavoriteView ? saveToLocalStorage : deleteFavorites}
            style={{ margin: "0 0 0 1rem " }}
          >
            {props.FavoriteView ? "Add Meal" : "Delete Meal"}
          </Button>
        </Card.Body>
      </Card>

      {/* model show */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>{props.description}</Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Save Changes</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default CardComp;
