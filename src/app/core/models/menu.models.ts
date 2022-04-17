
export interface Menu{
  code:string,
  text:string,
  order:number,
  icon:string,
  type:string,
  link:string,
  submenus:Menu[]
  enable:boolean,
  module:string,
  displayed?: boolean,
}
