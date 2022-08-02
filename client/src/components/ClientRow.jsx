import { useMutation } from '@apollo/client';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { DELETE_CLIENT } from '../mutations/clientMutations';
import { GET_CLIENTS } from '../queries/clientQueries';
import { GET_PROJECTS } from '../queries/projectQueries';
import EditClientModal from './EditClientModal';

export default function ClientRow({ client }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }, { query: GET_PROJECTS }],
  });

  return (
    <tr>
      <td className='text-center'>{client.name}</td>
      <td className='text-center'>{client.email}</td>
      <td className='text-center'>{client.phone}</td>
      <td className='d-flex gap-3 justify-content-center'>
        <EditClientModal client={client} />
        <button className='btn  btn-danger btn-sm' onClick={deleteClient}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
