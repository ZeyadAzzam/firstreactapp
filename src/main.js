import CardComp from "./card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";

function Main() {
  let [items, setItems] = useState([]);

  async function getData() {
    const url = "https://www.themealdb.com/api/json/v1/1/search.php?f=t";

    try {
      const response = await fetch(url);
      const result = await response.json();
      setItems(result.meals);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(function () {
    getData();
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    let searchedValue = event.target.search.value;
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchedValue}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

       if (data.meals) {
         let filteredValue = data.meals.filter(function (item) {
           return item.strMeal
             .toLowerCase()
             .includes(searchedValue.toLowerCase());
         });

         setItems(filteredValue);
       } else {
        setItems([]);
       }

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Form
        className="d-flex form-flex"
        onSubmit={handleSubmit}
        style={{ width: "90%", margin: "1rem 0 1rem 1rem" }}
      >
        <Form.Control
          type="search"
          placeholder="Search here.."
          className="me-2"
          aria-label="Search"
          name="search"
          required
        />
        <Button variant="outline-success" type="submit">
          Search
        </Button>
      </Form>

      <div
        className="container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          margin: "1rem 0 0 1rem",
        }}
      >
        {items.length !== 0 ? (
          items.map(function (item) {
            return (
              <CardComp
                key={item.idMeal}
                image={item.strMealThumb}
                title={item.strMeal}
                description={item.strInstructions}
              />
            );
          })
        ) : (
          <h3 style={{marginTop:"2rem",color:"red"}}>Meal not found</h3>
        )}
      </div>
    </>
  );
}

export default Main;