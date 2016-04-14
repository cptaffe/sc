
import {Component} from "angular2/core"
import {MdButton} from '@angular2-material/button/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card/card';

@Component({
  selector: 'status-card',
  template: `
  <md-card>
    <md-card-title>Status</md-card-title>
    <md-card-content>
      <p> nothing much </p>
    </md-card-content>
  </md-card>`,
  directives: [MD_CARD_DIRECTIVES, MdButton]
})
export class StatusCard{}
