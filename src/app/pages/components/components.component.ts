import { Component, ElementRef, OnInit , ViewChild} from '@angular/core';
import { TextboxComponent } from 'src/app/components/atomic/textbox/textbox.component';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss']
})
export class ComponentsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
