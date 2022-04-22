import { picklist } from "src/app/models"

export interface permissionRequest{
    module:string,
    users:number[],
    menus:string[],
    segments:string[],
    functions:roleSelector[],
}

export interface roleSelector{
    code:string,
    lvl:string
}

export interface useritem{
    id:number,
    value:string
  }

export interface moduleDetails{
    code:string,
    name:string,
    segments:picklist[],
    functions:picklist[],
    menus:picklist[]
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

