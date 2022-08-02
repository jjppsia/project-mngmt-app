import { useQuery } from '@apollo/client';
import ClientRow from './ClientRow';
import { GET_CLIENTS } from '../queries/clientQueries';
import Spinner from './Spinner';

export default function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className='table table-hover mt-3'>
          <thead className='table-light'>
            <tr>
              <th className='text-center' style={{ width: '25%' }}>
                Name
              </th>
              <th className='text-center' style={{ width: '25%' }}>
                Email
              </th>
              <th className='text-center' style={{ width: '25%' }}>
                Phone
              </th>
              <th className='text-center' style={{ width: '25%' }}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
