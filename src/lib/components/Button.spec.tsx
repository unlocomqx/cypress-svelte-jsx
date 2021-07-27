import Button from "./Button.svelte";
import { render } from "@testing-library/svelte";

it("should prefetch local link", () => {
  render(<Button>ABCD</Button>)

  cy
  .get('button')
});
