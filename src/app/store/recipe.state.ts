export interface IUserState {
    created_at: string | null;
    email: string | null;
    first_name: string | null;
    id: number | null;
    last_name: string | null;
  }


export const initializeState = (): IUserState => {
    let saveState: string|null = window.sessionStorage.getItem('userInfo');
    
    if (saveState) {
        return JSON.parse(saveState)
    } else {
        return {
            created_at: null,
            email: null,
            first_name: null,
            id: null,
            last_name: null,
        }
    }

}