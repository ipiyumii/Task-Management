import { NgModule } from '@angular/core';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent] //telling angular that the card component should available to any another component
})

export class SharedModule {}
