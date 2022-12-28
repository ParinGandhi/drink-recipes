interface IUser {
    created_at: string | null;
    email: string | null;
    first_name: string | null;
    id: number | null;
    last_name: string | null;
  }
  
  export class User implements IUser {
    created_at = null;
    email = null;
    first_name = null;
    id = null;
    last_name = null;
  
    constructor() {}
  }
  