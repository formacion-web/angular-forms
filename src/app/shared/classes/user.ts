export class User {
  private _id: string;
  private _username: string;
  private _password: string;
  public hide:boolean;
constructor() {
    this._id = this.uniqueId();
    this._username = '';
    this._password = '';
    this.hide = true;
  }
  public get id() {
    return this._id;
  }
  public setUsername(name:string) {
    this._username = name;
  }
  public getUsername() {
    return this._username;
  }
  public getPassword() {
    return this._password;
  }

  public setPassword(password:string) {
    this._password = password;
  }
  uniqueId() {
    const thisMS: number = Date.now();
    const shake = Math.random();
    let unique: string = Math.pow(thisMS, shake).toString();
    return unique.replace('.', thisMS.toString());
  }
}
