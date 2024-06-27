export class Users {
    constructor(
        public myName:string,
        public myEmail:string,
        public myPhone:number,
        public gender:string,
        public shift:string,
        public agree:boolean,
        public skills:Array<string>,
        public address:object
    ){}
}
