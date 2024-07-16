'use client';
import { useFormStatus } from 'react-dom';
import { deleteTask } from '@/utils/actions';

const SubmitBtn=()=>{
  const {pending} = useFormStatus();

  return (
    <button></button>
  )
}

const DeleteForm = ({ id }) => {
  return (
    <form action={deleteTask}>
      <input type='hidden' name='id' value={id} />
      <button className='btn btn-error btn-xs'>delete</button>
    </form>
  );
};
export default DeleteForm;