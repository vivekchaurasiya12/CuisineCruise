import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import "@testing-library/jest-dom";
import { MOCK_DATA } from "../mocks/resCardMock";
import { MemoryRouter } from "react-router-dom";
describe("ResturantCard Component", () => {
  test("should render the restaurant name", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    const name = screen.getByText("Domino's Pizza");
    expect(name).toBeInTheDocument();
  });

  test("should display the correct cuisines", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    const cuisines = screen.getByText("Pizzas, Italian, Pastas, Desserts");
    expect(cuisines).toBeInTheDocument();
  });

  test("should display the correct average rating", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    const rating = screen.getByText("⭐ 4.3");
    expect(rating).toBeInTheDocument();
  });

  test("should display the correct delivery time", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    const deliveryTime = screen.getByText("25 Min");
    expect(deliveryTime).toBeInTheDocument();
  });

  test("should display the correct cost for two", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    const costForTwo = screen.getByText("₹400 for two");
    expect(costForTwo).toBeInTheDocument();
  });
});
