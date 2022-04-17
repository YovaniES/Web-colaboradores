import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {
  showing = 1;


  constructor() { }

  ngOnInit(): void {
  }

}
