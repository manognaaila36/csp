export interface CharityDetails {
    s_no:String;
    name:String;
    contact_no:String;
    no_of_people:String;
    head:String;
    location:String;
    mail:String;

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
