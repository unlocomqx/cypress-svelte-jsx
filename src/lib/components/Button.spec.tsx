import { render } from "@testing-library/svelte";
import Button from "./Button.svelte";

it("should prefetch local link", () => {
  render(<Button>ABCD</Button>);

  cy.get("button").should("have.length", 1);
});
