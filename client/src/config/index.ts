import { FormControl } from "@/components/common/CommonForm";

export const registerFormControls: FormControl[] = [
  {
    name: "userName",
    label: "Username",
    placeholder: "Enter your username",
    componentType: "input", // Ensure this matches "input" | "select" | "textarea"
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];