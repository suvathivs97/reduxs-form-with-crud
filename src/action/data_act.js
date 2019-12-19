import Axios from 'axios';
import { DISPLAY_DATA,LOADING_DATA,} from '../action/type'
import axios from 'axios';

export const loginAction = ({obj}) => async dispatch => {
  console.log(obj,"obj in ation")
  const res=await axios.post('http://localhost:4000/business/add', {obj})
  console.log(res,"response")
           
            // dispatch({
            // type:DISPLAY_DATA,
            //  payload: res.data
            // })
        }

  export const DisplayData=() => async dispatch =>{
    console.log('rghfghf')
  const res = await axios.get('http://localhost:4000/business')
  console.log(res,"response")

          dispatch({
          type:DISPLAY_DATA,
          payload:res.data        }         
        )
        
  }

  export const UpdateAction=({obj,id}) => async dispatch =>{
    console.log(obj,'updated')
    const res = await  axios.put('http://localhost:4000/business/update/'+id,{obj})
    console.log(res,'updatedvalue')
    if(res.data == 'Update Complete'){
      alert("Updated Complete");}

  }
export const DeleteAction =({_id}) => async dispactch => {
  console.log (_id,"onj in delete")
    const res = await axios.delete('http://localhost:4000/business/delete/'+_id)
    console.log(res,"response")
    if(res.data == 'Successfully removed'){
      alert("Successfully removed");
    }
}