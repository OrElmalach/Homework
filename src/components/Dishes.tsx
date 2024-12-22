
import { FunctionComponent,} from "react";

interface DishesProps {}

const Dishes: FunctionComponent<DishesProps> = () => {
  interface Dish {
    id: string;
    name: string;
    price: number;
  }

  const dishesArr: Dish[] = [
    {
      id: "01",
      name: "Pizza",
      price: 45,
    },
    {
      id: "02",
      name: "Hamburger",
      price: 50,
    },
    {
      id: "03",
      name: "Sushi",
      price: 65,
    },
    {
      id: "04",
      name: "Pasta",
      price: 40,
    },
    {
      id: "05",
      name: "Salad",
      price: 430,
    },
    {
      id: "06",
      name: "Steak",
      price: 90,
    },
    {
      id: "07",
      name: "Soup",
      price: 25,
    },
    {
      id: "08",
      name: "Dessert",
      price: 35,
    },
  ];

  return (
    <>
      <h5 className="display-5">Dishes</h5>
      {dishesArr.length ? (
        dishesArr.map((selectedDish) => (
          <div key={selectedDish.id} className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">{selectedDish.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                ${selectedDish.price}
              </h6>
              <button
                className="btn btn-success"
                onClick={() => alert ( `Dish: ${selectedDish.name}`)}
              >
                Click me
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>No dishes found</p>
      )}
    </>
  );
};

export default Dishes;
