import { auth } from "../../Components/Register/RegisterAPI";

const REGISTER = 'LOGIN'

const initialState = {

};

const registerReducer = (state = initialState, action: LoginActionsTypes) => {
    switch (action.type) {
        case REGISTER:
            return {
                state
            }
    }
    return state
};

interface ILogin {
    type: typeof REGISTER
}
type LoginActionsTypes = ILogin

export const loginAC = () => {
    return { type: REGISTER }
}

export default registerReducer

export const register = (email: string, password: number) => {
    debugger
    return async (dispatch: any) => {
        try {
            await auth.register(email, password)
        } catch (error) {
            alert(error.response.data.error);
        }
    }
}
