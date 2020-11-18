import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./button";

export function Welcome() {
  return (
    <>
      <h1>Welcome to the quiz</h1>

      <p>This is an example quiz built using React&hellip;</p>

      <Button as={Link} to="/p/0">
        Get Started
      </Button>
    </>
  );
}
