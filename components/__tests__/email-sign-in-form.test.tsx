import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { EmailSignInForm } from "@/components/auth/email-sign-in-form";

describe("EmailSignInForm (preview-only behavior)", () => {
  it("renders the email field and request button", () => {
    render(<EmailSignInForm />);
    expect(
      screen.getByRole("textbox", { name: /email/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /continue with email/i }),
    ).toBeInTheDocument();
  });

  it("shows a validation error for an invalid address", async () => {
    const user = userEvent.setup();
    render(<EmailSignInForm />);
    await user.type(screen.getByRole("textbox", { name: /email/i }), "not-an-email");
    await user.click(screen.getByRole("button", { name: /continue with email/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent(/valid email/i);
  });

  it("never renders a password input", () => {
    render(<EmailSignInForm />);
    expect(document.querySelector('input[type="password"]')).toBeNull();
  });
});
