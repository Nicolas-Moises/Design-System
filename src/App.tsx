import Logo from "./components/Logo";

import { Heading } from "./components/Heading";
import { Text } from "./components/Text";
import { TextInput } from "./components/TextInput";
import { Checkbox } from "./components/Checkbox";
import { Button } from "./components/Button";

import { Envelope, Lock } from "phosphor-react";

import "./styles/global.css";
import { SignIn } from "./pages/Signin";

export function App() {

  return (
    <SignIn />
  )
}

