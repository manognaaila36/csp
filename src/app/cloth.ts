export interface Cloth {

        s_no:String;
        name: String;
        contact_no: String;
        charity_name:String;
        total_clothes:String;
        dd:String;
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
