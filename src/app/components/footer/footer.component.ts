import { Input } from '@angular/core';
import { AfterContentChecked,
         AfterContentInit,
         AfterViewChecked,
         AfterViewInit,
         Component,
         DoCheck,
         OnChanges,
         OnDestroy,
         OnInit,
         SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent{

  order = 1;
  @Input() numberOfItems!: number;
  constructor() {
    console.log('I am from constructor()!! and my order::::' + this.order);
    this.order++;
  }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('I am from ngOnChanges()!! and my order::::' + this.order);
  //   this.order++;
  // }

  // ngOnInit() {
  //   console.log('I am from ngOnInit() and my order::::' + this.order);
  //   this.order++;
  // }

  // ngDoCheck() {
  //   console.log('I am from ngDoCheck() and my order::::' + this.order);
  //   this.order++;
  // }

  // ngAfterContentInit() {
  //   console.log('I am from ngAfterContentInit() and my order::::' + this.order);
  //   this.order++;
  // }

  // ngAfterContentChecked() {
  //   console.log('I am from ngAfterContentChecked() and my order::::' + this.order);
  //   this.order++;
  // }

  // ngAfterViewInit() {
  //   console.log('I am from ngAfterViewInit() and my order::::' + this.order);
  //   this.order++;
  // }

  // ngAfterViewChecked() {
  //   console.log('I am from ngAfterViewChecked() and my order::::' + this.order);
  //   this.order++;
  // }

  // ngOnDestroy() {
  //   console.log('I am from ngOnDestroy() and my order::::' + this.order);
  //   this.order++;
  // }

}
