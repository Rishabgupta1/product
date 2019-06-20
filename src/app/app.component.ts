import { Component,ViewEncapsulation, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit
{
 
  title = 'Rishab guptas social page';

name='Rishu';
lastname='Gupta';
@Input() background = '571x450img';  
bkUrl = {};   
ngOnInit() {
    this.bkUrl = this.getBkUrl();
  }
getBkUrl() {
    const styles = {
      'background-image': 'url(src/assets/images/' + this.background + '.jpg)'
    };
    console.log(styles);
    return styles;
  }
flag=false;

show() : void {


this.flag=!this.flag;

}

persons: any[]= [

{name: 'Rishab',age: 20 ,country: 'India'},
{name: 'Abhishek',age: 20 ,country: 'India'},
{name: 'Melissa',age: 21 ,country: 'America'},
{name: 'Prateek',age: 18 ,country: 'Pakistan'},
{name: 'Brad',age: 30 ,country: 'England'}
];
}




