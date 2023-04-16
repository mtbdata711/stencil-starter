/* @jsx h */
import { h } from "@stencil/core";
import "../src/index.tsx";
import "../src/test.tsx";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => <my-counter><my-test></my-test></my-counter>;
