import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/core/models/menu.models';

@Component({
  selector: 'app-module-menus',
  templateUrl: './module-menus.component.html',
  styleUrls: ['./module-menus.component.scss']
})
export class ModuleMenusComponent implements OnInit {
  loading = false;
  listmodules:Menu[] = [];
  showingidx = 0;


  constructor() { }

  ngOnInit(): void {
  }





  openEditDialog(idx:number,module:Menu,ismodule:boolean,isnew:boolean,modulename:string = ''){
    /* this.dialog.open(EditmoduleComponent, {data: {module, ismodule,isnew,modulename} })
      .afterClosed().subscribe(resp=>{
        if (resp){
          this.showingidx = idx;
          this.refreshModules();
        }
      }) */
  }

}
