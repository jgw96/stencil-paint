import { Component, Element, State } from '@stencil/core';


@Component({
  tag: 'paint-container',
  styleUrl: 'container.scss',
  shadow: true
})
export class PaintContainer {

  @Element() el: HTMLElement;
  @State() colorValue: string;
  @State() widthValue: number;

  constructor() {
    this.colorValue = '#ff0000';
    this.widthValue = 15;
  }

  handleColorChange(ev: any) {
    console.log(ev.target.value);
    this.colorValue = ev.target.value;
  }

  handleRangeChange(ev: any) {
    console.log(ev.target.value);
    this.widthValue = ev.target.value;
  }

  render() {
    if (this.colorValue && this.widthValue) {
      return [
        <header>
          <span>StencilPaint</span>
        </header>,

        <paint-canvas color={this.colorValue} width={this.widthValue}></paint-canvas>,

        <footer>
          <input id='colorInput' type='color' value={this.colorValue} onChange={() => this.handleColorChange(event)}></input>
          <input id='rangeInput' type='range' value={this.widthValue} onChange={() => this.handleRangeChange(event)}></input>
        </footer>
      ]
    } else {
      return [
      <header>
        <span>StencilPaint</span>
      </header>,

      <footer>
        <input id='colorInput' type='color' value={this.colorValue} onChange={() => this.handleColorChange(event)}></input>
        <input id='rangeInput' type='range' value={this.widthValue} onChange={() => this.handleRangeChange(event)}></input>
      </footer>
    ]
    }
  }
}