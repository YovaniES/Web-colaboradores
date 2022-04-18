import { Component, OnInit } from '@angular/core';
import { BlockUI, NgBlockUI } from 'ng-block-ui';
import { Subscription } from 'rxjs';
import { changeResponse } from 'src/app/core/models/backend.models';
import { PermissionsService } from 'src/app/services/permissions.service';

export interface permissionRequest {
  module: string;
  users: number[];
  menus: string[];
  segments: string[];
  functions: roleSelector[];
}

export interface roleSelector {
  code: string;
  lvl: string;
}

export interface picklist {
  id?: number;
  code?: string;
  name: string;
  filter?: string;
}

export interface useritem{
  id:number,
  value:string
}

export interface moduleDetails{
  code:string,
  name:string,
  menus:picklist[]
 /*  segments:picklist[],
  functions:picklist[], */
}

export interface prMenus{
  code:string,
  name:string
  icon:string,
  selected:boolean
}


export interface prFunc{
  code:string,
  name:string,
  lvl:string
}
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
  }

  //--------- USERS
  searchtext = '';
  searchshowresult = false;
  searchresult: picklist[] = [];
  users: useritem[] = [];

  doSearchPerson() {
    /* const subs: Subscription = this.permissionsService
      .httpSearchUsers(this.searchtext)
      .subscribe((resp: picklist[]) => {
        this.searchresult = resp;
        this.searchshowresult = true;
        subs.unsubscribe();
      }); */
  }
  doCancelSearch() {
    this.searchresult = [];
    this.searchtext = '';
    this.searchshowresult = false;
  }
  doPickUser(element: picklist) {
    /* this.users.push({ id: element.id, value: element.name });
    this.doCancelSearch(); */
  }

  //---------- MODULES
  loadingModules = false;
  moduleList: moduleDetails[] = [];
  selectedModule: string = 'N/A';
  smoduledata: moduleDetails[]=[];

  mmenus: prMenus[] = [];
  mfunction: prFunc[] = [];
  msegment: prMenus[] = [];

  doPickModule(code: string) {
    /* this.smoduledata = { ...this.moduleList.find((p) => p.code == code) };
    this.mmenus = this.smoduledata.menus.map((m) => {
      return { code: m.code, name: m.name, icon: m.filter, selected: false };
    }); */


   /*  this.msegment = this.smoduledata.segments.map((m) => {
      return { code: m.code, name: m.name, icon: null, selected: false };
    });
    this.mfunction = this.smoduledata.functions.map((m) => {
      return { code: m.code, name: m.name, lvl: 'N/A' };
    }); */
  }

  doGetModules() {
    this.loadingModules = true;
    const subs: Subscription = this.permissionsService
      .getModules()
      .subscribe((r: moduleDetails[]) => {
        this.moduleList = r;
        this.loadingModules = false;
        subs.unsubscribe();
      });
  }

  //----------------- ASIGNACIÓN
  request: permissionRequest = {
    module: '',
    users: [],
    menus: [],
    segments: [],
    functions: [],
  };

  doRequestPermissions() {
    /* this.request.users = this.users.map((u) => u.id);
    this.request.module = this.smoduledata.code;
    this.request.menus = this.mmenus
      .filter((f) => f.selected)
      .map((m) => m.code);
    this.request.segments = this.msegment
      .filter((f) => f.selected)
      .map((m) => m.code);
    this.request.functions = this.mfunction.map((m) => {
      return { code: m.code, lvl: m.lvl };
    });
    this.blockUI.start('Guardando...');
    const subs: Subscription = this.permissionsService
      .httpAddPermissions(this.request)
      .subscribe((resp: changeResponse) => {
        this.blockUI.stop();
        if (resp.status) {
          Swal.fire({
            icon: 'success',
            text: 'Permisos asignados',
            title: 'Operación exitosa',
          });
        } else {
          this.permissionsService.showAlertError(resp.message);
        }
        subs.unsubscribe();
      }); */
  }
}
