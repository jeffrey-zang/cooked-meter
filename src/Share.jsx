import { useParams } from 'react-router-dom';

const Share = () => {

  let { id } = useParams();
  id = decodeURIComponent(id);

  return (
    <div>{id}</div>
  )
}

export default Share