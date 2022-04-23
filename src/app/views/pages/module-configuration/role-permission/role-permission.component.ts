import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { changeResponse, picklist } from 'src/app/models';
import { PermissionsService } from 'src/app/services/permissions.service';
import Swal from 'sweetalert2';
import {
  useritem,
  moduleDetails,
  prMenus,
  prFunc,
  permissionRequest,
} from '../module-config.models';

@Component({
  selector: 'app-role-permission',
  templateUrl: './role-permission.component.html',
  styleUrls: ['./role-permission.component.scss'],
})
export class RolePermissionComponent implements OnInit {
  @BlockUI() blockUI!: NgBlockUI;

  constructor(private permissionsService: PermissionsService) {}

  ngOnInit(): void {
    this.doGetModules();
    console.log('PERM', this.doGetModules());
  }

  //--------- USERS
  searchtext = '';
  searchshowresult = false;
  searchresult: picklist[] = [];
  users: useritem[] = [];

  //---------- MODULES
  loadingModules = false;
  moduleList: moduleDetails[] = [];
  selectedModule: string = 'N/A';
  smoduledata: moduleDetails[] = [];

  modMenusList: prMenus[] = [];
  mfunction: prFunc[] = [];
  msegment: prMenus[] = [];

  /*  ELIMINAR ----
  export interface prFunc {
    code: string;
    name: string;
    lvl: string;
  }

  export interface prMenus {
    code: string;
    name: string;
    icon: string;
    selected: boolean;
  }
  export interface picklist {
    id?: number;
    code?: string;
    name: string;
    filter?: string;
  }

  export interface moduleDetails{
    code:string,
    name:string,
    menus:picklist[]
    /* segments:picklist[],
    functions:picklist[],
}

  "listPases": [
    {
      "id": 1,
      "date": "20-03-2022",
      "enable": false
    }
  ],


  "appmods":[
    { "code":"a",
      "name": "adminisTracion",
      "menus":[{"name":"ADM"}]
    },
    { "code":"b",
      "name": "talento",
      "menus":[{"name":"tal"},{"name":"mal"} ]
    },
    { "code":"c",
      "name": "empresa",
      "menus":[{"name":"emp"},{"name":"rio"} ]
    }
  ]

  } */

  //----------------- ASIGNACIÓN
  request: permissionRequest = {
    module: '',
    users: [],
    menus: [],
    // segments: [],
    // functions: [],
  };

  doSearchPerson() {
    /* const subs: Subscription = this.permissionsService
      .httpSearchUsers(this.searchtext)
      .subscribe((resp: picklist[]) => {
        this.searchresult = resp;
        this.searchshowresult = true;
        subs.unsubscribe();
      }); */
  }

  doGetModules() {
    this.loadingModules = true;
    const subs: Subscription = this.permissionsService
      .getModules()
      .subscribe((resp: moduleDetails[]) => {
        this.moduleList = resp;
        this.loadingModules = false;
        subs.unsubscribe();
      });
  }

  doCancelSearch() {
    this.searchresult = [];
    this.searchtext = '';
    this.searchshowresult = false;
  }

  doPickUser(element: any) {
    this.users.push({ id: element.id, value: element.name });
    this.doCancelSearch();
  }

  doPickModule(code: string) {
    // this.smoduledata = { ...this.moduleList.find((p) => p.code == code) };

    // this.modMenusList = this.smoduledata.menus.map((m) => { return { code: m.code, name: m.name, icon: m.filter, selected: false }});
    // this.msegment = this.smoduledata.segments.map((m) => { return { code: m.code, name: m.name, icon: null, selected: false }});
    // this.mfunction = this.smoduledata.functions.map((m) => { return { code: m.code, name: m.name, lvl: 'N/A' }});
  }

  doRequestPermissions(){
    this.request.users = this.users.map(u=>u.id);
    // this.request.module = this.smoduledata.code;
    // this.request.menus = this.mmenus.filter(f=>f.selected).map(m=>m.code);
    // this.request.segments = this.msegment.filter(f=>f.selected).map(m=>m.code);
    // this.request.functions = this.mfunction.map(m=>{return{code:m.code, lvl:m.lvl}});
    this.blockUI.start("Guardando...");
    const subs:Subscription = this.permissionsService.addPermissions(this.request).subscribe( (resp:any) =>{
      this.blockUI.stop();
      if (resp.status){
        Swal.fire({
          icon:"success",
          text:"Permisos asignados",
          title:"Operación exitosa"
        })
      }else{
        // this.serv.showAlertError(resp.message);
      }
      subs.unsubscribe();
    });
  }
}
