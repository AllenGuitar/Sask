export class Pets{
    constructor(_id: string,name:string,type:string,years:string,vaccinated:boolean){
        this._id = _id;
        this.name=name;
        this.type=type;
        this.years=years
        this.vaccinated=vaccinated
    }

    _id?: string;
    name:string
    type:string
    years:string
    vaccinated:boolean

}


export class Users{
    constructor(_id: string,name:string,email:string,password:string,address:string,pets:boolean){
        this._id = _id;
        this.name=name;
        this.email=email;
        this.password=password
        this.address=address
        this.pets=pets
    }

    _id?: string;
    name:string
    email:string
    password:string
    address:string
    pets:boolean

}

