import {DISPLAY_DATA,LOADING_DATA} from '../action/type'
const initialState = {
    alldata: [], loadingdata:true,allCustomer:[]
}


export default function async(state=initialState, action){

    switch(action.type){
        case DISPLAY_DATA:
            return  { alldata:action.payload, loadingdata:false } 
        case LOADING_DATA:
                return {...state, loadingdata:true,}   
               
        default : 
            return {...state}
    }
}