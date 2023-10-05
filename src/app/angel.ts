
export interface Angel {


    student_id:string;
    name:string;
    age:string;
    standard:string;
    school:string;
    

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
  