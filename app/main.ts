
import {Component} from "angular2/core"
import {StatusCard} from "./status-card.component"

@Component({
  selector: 'app',
  template: `<status-card></status-card>`,
  directives: [StatusCard],
  styleUrls: ['app/main.css']
})
export class App{}

import {bootstrap} from "angular2/bootstrap"

bootstrap(App)
