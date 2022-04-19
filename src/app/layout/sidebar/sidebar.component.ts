import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PermissionsService } from 'src/app/services/permissions.service';

export interface Menu {
  code: string;
  text: string;
  order: number;
  icon: string;
  type: string;
  link: string;
  submenus: Menu[];
  enable: boolean;
  module: string;
  displayed?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  @Output() generalfixedAside = new EventEmitter<Boolean>();

  fixedAside = false;
  menuList: Menu[] = [];
  /* menuList = [
    {
      icon: 'admin_panel_settings',
      link: 'administracion',
      name: 'Administración',
      info: 'Administración de usuarios',
      displayed: false,
      subMenuList: [
        {
          icon: 'menu_open',
          name: 'Config. Módulos',
          link: 'administracion/modulos',
          info: 'Config. de Módulos',
          displayed: false,
        },
        {
          icon: 'https',
          name: 'Permisos',
          link: 'administracion/permisos',
          info: 'Permisos al Usuario',
          displayed: false,
        },
      ],
    },
    {
      icon: 'brightness_7',
      name: 'Mantenimiento',
      link: '',
      info: 'Mantenimiento',
      displayed: false,
      subMenuList: [
        {
          icon: 'business',
          link: 'mantenimiento/company',
          name: 'Empresa',
          info: 'Lista empresas',
          displayed: false,
        },
        {
          icon: 'people',
          link: 'mantenimiento/usuarios',
          name: 'Usuarios',
          info: 'Lista de usuarios',
          displayed: false,
        },
      ],
    },
    {
      icon: 'person',
      name: 'Pase de colaborador',
      link: 'mnp',
      info: 'Retorno a oficina',
      displayed: false,
      subMenuList: [
        {
          icon: 'groups',
          link: 'terceros/encuesta',
          name: 'Pase de reunión',
          info: 'Confirmación de encuestas',
          displayed: false,
        },
        {
          icon: 'checklist_rtl',
          link: 'terceros/pases',
          name: 'Lista de pases',
          info: 'Pase de colaboradores',
          displayed: false,
        },
      ],
    },
  ];
 */
  constructor(private permissionService: PermissionsService) {}

  ngOnInit(): void {
    this.getMenu()

  }

  getMenu() {
    this.permissionService.getMenu().subscribe((resp) => {
      this.menuList = resp;

      console.log('DATA',resp)
    });
  }

  clickLinkMenu() {
    this.menuList.forEach((item) => {
      item.displayed = false;
    });
  }

  clickToggleMenu(item: any) {
    const final = !item.displayed;
    if (!(this.fixedAside == false && final == false)) {
      this.menuList.map((item) => {
        item.displayed = false;
      });
      item.displayed = final;
    }
    this.toggleAside(true);
  }

  toggleAside(e: boolean) {
    this.fixedAside = e;
    this.generalfixedAside.emit(this.fixedAside);
  }
}
