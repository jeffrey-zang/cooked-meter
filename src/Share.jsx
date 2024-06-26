import { useParams } from 'react-router-dom';

const Share = () => {

  let { id } = useParams();

  return (
    <div>{id}</div>
  )
}

export default Share