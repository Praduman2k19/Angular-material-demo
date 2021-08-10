import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {

  logChange(index:any)
  {
    alert(index);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
