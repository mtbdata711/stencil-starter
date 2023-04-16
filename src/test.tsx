/* @jsx h */
import { h, Component, Host } from "@stencil/core";

@Component({
  tag: "my-test",
  styleUrl: "./global.scss",
  shadow: true,
})
export class Test {
  render() {
    return (
      <Host>
      <p>Hello world</p>
      </Host>
    );
  }
}
