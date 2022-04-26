import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Menu } from 'src/app/core/models/menu.models';
import { PermissionsService } from 'src/app/services/permissions.service';
import { ModalEditModuleComponent } from '../modal-edit-module/modal-edit-module.component';

@Component({
  selector: 'app-module-menus',
  templateUrl: './module-menus.component.html',
  styleUrls: ['./module-menus.component.scss'],
})
export class ModuleMenusComponent implements OnInit {
  loading = false;
  listmodules: Menu[] = [];
  showingidx = 0;

  constructor(
    private permissionService: PermissionsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refreshModules()
  }

  refreshModules() {
    this.loading = true;
    const subs: Subscription = this.permissionService
      .getAllModules()
      .subscribe((resp:Menu[]) => {
        console.log('DATAMENU', resp)

        this.listmodules = resp;
        this.loading = false;
        subs.unsubscribe();
      });
  }

  openEditDialog( idx: number, module:Menu, ismodule: boolean, isnew: boolean, modulename: string = '') {
    this.dialog
      .open(ModalEditModuleComponent, { data: { module, ismodule, isnew, modulename } })
      .afterClosed()
      .subscribe((resp) => {
        if (resp) {
          this.showingidx = idx;
          this.refreshModules();
        }
      });
  }
}

// (click)="openEditDialog(0, null, true, true, null)"
