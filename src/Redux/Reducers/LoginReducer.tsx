import {api} from "../../api/api";

const CHANGE_LOGIN ='LOGIN'

const initialState={
    email:'',
    password:'',
    rememberMe:true
};

const loginReducer=(state=initialState,action:LoginActionsTypes)=> {
    switch (action.type) {
        case CHANGE_LOGIN:
            return{
                ...state,
                email:action.email,
                password:action.password,
                rememberMe:action.rememberMe
            }
    }
    return state
};

interface ILogin {
    type:typeof CHANGE_LOGIN,
    email:string,
    password:string,
    rememberMe:boolean
}
type LoginActionsTypes=ILogin





export const signInAC=(email:string,password:string,rememberMe:boolean)=> {
    return{type:CHANGE_LOGIN,email,password,rememberMe}
}

export const signIn=(email:string,password:string,rememberMe:boolean) => {
    debugger
    return (dispatch:any) => {
        api.signIn(email,password,rememberMe)
            .then(res => {
                // dispatch(signInAC(email,password,rememberMe));

            })
    }
};



export default loginReducer
