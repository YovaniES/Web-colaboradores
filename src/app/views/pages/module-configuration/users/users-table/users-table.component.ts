import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UsuarioDTO } from 'src/app/core/models';
import { PermissionsService } from 'src/app/services/permissions.service';

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss'],
})
export class UsersTableComponent implements OnInit {
  // data!: UserDTO[];
  data!:UsuarioDTO[]
  // {id:number,nombre:string, correo:string, pais:string[], genero:string[],cargo:string,rol:string, empresa:string[]}

  table_settings = {
    page: 1,
    size: 10,
  };
  loadingItem = false;
  searcher = '';

  constructor(private permissionsService: PermissionsService) {}

  ngOnInit(): void {
    this.callItemApi('', '');
  }

  doUpdateRow(idx: number) {}

  doPageChange(i: number) {
    this.table_settings.page = this.table_settings.page + i;
    this.callItemApi('', '');
  }

  callItemApi(location: string, status: string) {
    this.loadingItem = true;
    const subs: Subscription = this.permissionsService
      .getAllUsers(
        this.table_settings.page - 1,
        this.table_settings.size,
        this.searcher
      )
      .subscribe((resp: any) => {
        this.data = resp;
        this.loadingItem = false;
        subs.unsubscribe();
      });
  }
}
