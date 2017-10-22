import { Component, State, Prop, Element } from '@stencil/core';


@Component({
  tag: 'paint-canvas',
  styleUrl: 'canvas.scss',
  shadow: true
})
export class PaintCanvas {

  @Element() el: HTMLElement;

  @State() canvas: HTMLCanvasElement;
  @State() context: CanvasRenderingContext2D;
  @State() drawing: boolean;
  @State() lastPos: any;
  @State() mousePos: any;
  @State() oldWidth: number;
  @State() oldColor: string;

  @Prop() color: string;
  @Prop() width: number;

  ionViewWillUpdate() {
    console.log(this.width);
    console.log(this.color);
    if (this.oldWidth && this.width !== undefined) {
      this.context.lineWidth = this.width;
    }

    if (this.oldColor && this.color !== undefined) {
      this.context.strokeStyle = this.color;
    }
  }

  ionViewDidLoad() {
    window.setTimeout(() => {
      this.canvas = this.el.shadowRoot.querySelector('canvas');
      this.context = this.canvas.getContext('2d');

      // setup canvas
      this.canvas.height = window.innerHeight;
      this.canvas.width = window.innerWidth;

      this.context.lineCap = 'round';
      this.context.lineJoin = 'round';
      this.context.globalCompositeOperation = 'hard-light';
      this.context.globalAlpha = 0.3;

      this.context.strokeStyle = this.color;
      this.oldColor = this.color;
      this.context.lineWidth = this.width;
      this.oldWidth = this.width;


      console.log(this.color);
      console.log(this.width);

      // setup for drawing
      this.setupMouseEvents();
      this.setupTouchEvents();

      requestAnimationFrame(() => this.renderCanvas());

    }, 10);
  }

  setupMouseEvents() {
    this.drawing = false;

    this.mousePos = { x: 0, y: 0 };
    this.lastPos = this.mousePos;

    // handle mouse events
    this.canvas.addEventListener("mousedown", (e) => {
      this.drawing = true;
      this.lastPos = this.getMousePos(this.canvas, e);
    }, false);

    this.canvas.addEventListener("mouseup", () => {
      this.drawing = false;
    }, false);

    this.canvas.addEventListener("mousemove", (e) => {
      this.mousePos = this.getMousePos(this.canvas, e);
    }, false);
  }

  setupTouchEvents() {
    this.canvas.addEventListener("touchstart", (e) => {
      this.mousePos = this.getTouchPos(this.canvas, e);
      const touch = e.touches[0];

      const mouseEvent = new MouseEvent("mousedown", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });

      this.canvas.dispatchEvent(mouseEvent);
    }, false);

    this.canvas.addEventListener("touchend", () => {
      const mouseEvent = new MouseEvent("mouseup", {});
      this.canvas.dispatchEvent(mouseEvent);
    }, false);

    this.canvas.addEventListener("touchmove", (e) => {
      const touch = e.touches[0];

      const mouseEvent = new MouseEvent("mousemove", {
        clientX: touch.clientX,
        clientY: touch.clientY
      });

      this.canvas.dispatchEvent(mouseEvent);
    }, false);
  }

  getMousePos(canvasDom, mouseEvent) {
    const rect = canvasDom.getBoundingClientRect();

    return {
      x: mouseEvent.clientX - rect.left,
      y: mouseEvent.clientY - rect.top
    };
  }

  getTouchPos(canvasDom, touchEvent) {
    const rect = canvasDom.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].clientX - rect.left,
      y: touchEvent.touches[0].clientY - rect.top
    };
  }

  renderCanvas(): any {
    if (this.drawing) {
      this.context.beginPath();
      this.context.moveTo(this.lastPos.x, this.lastPos.y);
      this.context.lineTo(this.mousePos.x, this.mousePos.y);
      this.context.stroke();
      this.context.closePath();
      this.lastPos = this.mousePos;
    }

    requestAnimationFrame(() => this.renderCanvas());
  }

  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  render() {
    return [
      <canvas></canvas>,
      <div id='clearDiv'>
        <button onClick={() => this.clear()}>Clear</button>
      </div>
    ]
  }
}