import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/core/models';
import { MenuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-menu-mobile',
  templateUrl: './menu-mobile.component.html'
})
export class MenuMobileComponent implements OnInit {

  menuList:Menu[]=[];
  subMenus:Menu[]=[];
  subMenuActive:boolean = false;
  subMenuTitle!:string;
  active:Boolean = false;
  headerLogo!:string;

  constructor(
    private menuService:MenuService,
    private router:Router
    ) { }

  ngOnInit(): void {
    // this.menuList = this.permissionService.getMenu();
    this.headerLogo = this.menuService.getVerticalLogo();
    this.menuService.activeMenuMobile.subscribe( (e) => this.active = e);
  }

  close(){
    this.menuService.activeMenuMobile.emit(false);
  }

  closeSubMenu(){
    this.subMenuActive = false;
    this.subMenuTitle = '';
    this.subMenus = [];
  }

  showSubMenu(item:Menu){
    this.subMenuActive = true;
    this.subMenus = item.submenus;
    this.subMenuTitle=item.text;
  }

  gotoPage(link:any){
    this.subMenuActive = false;
    this.active = false;
    this.router.navigateByUrl(link);
  }
}
