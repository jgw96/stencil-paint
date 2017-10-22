import { Component, Prop, Element } from '@stencil/core';


@Component({
  tag: 'app-toast',
  styleUrl: 'app-toast.scss'
})
export class AppToast {
  
  @Prop() open: boolean;
  @Element() el: HTMLElement;

  ionViewWillUpdate() {
    console.log(this.open);

    if (this.open === false) {
      console.log('closed')
      this.el.className = '';
    } else {
      this.el.className = 'open';
      console.log('opening', this.el.classList);
    }
  }

  render() {
    return (
      <div>
        <slot></slot>
      </div>
    )
  }
}