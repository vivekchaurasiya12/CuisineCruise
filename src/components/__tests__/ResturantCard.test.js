// Import necessary modules and components for testing
import { render, screen } from "@testing-library/react";
import ResturantCard from "../ResturantCard";
import "@testing-library/jest-dom"; // Extends Jest with custom matchers for better assertions
import { MOCK_DATA } from "../mocks/resCardMock"; // Mock data to simulate props for the component
import { MemoryRouter } from "react-router-dom"; // MemoryRouter is used to provide routing context for Link component

// Grouping all tests related to the ResturantCard component
describe("ResturantCard Component", () => {
  
  // Test to check if restaurant name is rendered correctly
  test("should render the restaurant name", () => {
    // MemoryRouter wraps the component because <Link> is used inside ResturantCard.
    // This prevents errors related to missing routing context in the tests.
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    
    // Using getByText to find the restaurant name in the document.
    // This checks if the name is being displayed as intended.
    const name = screen.getByText("Domino's Pizza");
    expect(name).toBeInTheDocument(); // Asserts that the name is present in the DOM
  });

  // Test to check if cuisines are displayed correctly
  test("should display the correct cuisines", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    
    // Matching the exact text of cuisines joined as a string.
    // This verifies if the array of cuisines is displayed correctly.
    const cuisines = screen.getByText("Pizzas, Italian, Pastas, Desserts");
    expect(cuisines).toBeInTheDocument(); // Asserts that the cuisines text is present
  });

  // Test to check if average rating is displayed correctly
  test("should display the correct average rating", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    
    // Using the exact format as it appears on the screen including the ⭐ symbol.
    // This ensures the rating is displayed in the correct format.
    const rating = screen.getByText("⭐ 4.3");
    expect(rating).toBeInTheDocument(); // Asserts that the rating is displayed
  });

  // Test to check if delivery time is displayed correctly
  test("should display the correct delivery time", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    
    // Verifies if the delivery time is shown as "25 Min" as expected
    const deliveryTime = screen.getByText("25 Min");
    expect(deliveryTime).toBeInTheDocument(); // Asserts delivery time is displayed
  });

  // Test to check if cost for two is displayed correctly
  test("should display the correct cost for two", () => {
    render(
      <MemoryRouter>
        <ResturantCard resData={MOCK_DATA} />
      </MemoryRouter>
    );
    
    // Checks the cost displayed in the format "₹400 for two"
    const costForTwo = screen.getByText("₹400 for two");
    expect(costForTwo).toBeInTheDocument(); // Asserts cost is displayed as expected
  });
});
