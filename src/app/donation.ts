export interface Donation {

    s_no:string;
    name:string;
    contact_no:string;
    charity_name:string;
    amount:string;
    dd:string;

}
export interface Food{
  s_no : String;
  name: String;
  contact_no: String;
  charity_name:String;
  dd:String;
}
export interface Sign{
  
  name: String;
  ph: String;
  email:String;
  p:String;
  cp:String;

}
  export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
    Result: [];
  }
  