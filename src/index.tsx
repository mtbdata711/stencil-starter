/* @jsx h */
import { h, Component, State, Host } from "@stencil/core";
@Component({
  tag: "my-counter",
  styleUrl: "./index.scss",
  shadow: false,
})
export class MyCounter {
  @State() count: number = 0;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  render() {
    return (
      <Host>
        <button onClick={this.dec.bind(this)}>-</button>
        <span>{this.count} clicks</span>
        <button onClick={this.inc.bind(this)}>+</button>
        <p>There is a slot below</p>
        <slot></slot>
      </Host>
    );
  }
}
