/* eslint-disable @typescript-eslint/no-unsafe-call */

// import "@testing-library/jest-dom/extend-expect";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../_components/Button";

describe("Buttonコンポーネントのテスト", () => {
  it("クリック時にonClickイベントハンドラがトリガーされる", () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Click me</Button>);

    const buttonElement = screen.getByText("Click me");
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalled();
  });
});
