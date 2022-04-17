/* export interface Employee{
    code:string,
    name:string,
    mail:string,
    position:string,
    area:string,
    departament:string,
    local:string,
    chief:string,
    competition_lvl:string,
    conduct_lvl:string,
    talent_lvl:string,
    bsc:boolean,
}

export interface PersonalInformation{
    idssff:string,
	names:string,
	position:string,
	email:string,
	nationalId:string,
	nationality:string,
	location:string,
	bu:string,
	legalEntity:string,
	department:string,
	leader:string,
    gender:string,
    age:number,
	oldness:number
}

export interface RequestChange{
    code:string,
	value?:string,
	status?:boolean,
	param?:string
} */
export interface changeResponse{
	message:string,
	status:boolean,
	previous?:string
}
/* export interface picklist{
	id?:number,
	code?:string,
    name:string,
    filter?:string
}

export interface UserDTO{
    id:number,
	username:string,
	displayname:string,
	subtitle:string,
	gender:string,
	bu:string,
	idssff:string,
	enable:boolean,
	location:string,
} */
