import { useParams } from 'react-router-dom';

const Share = () => {

  let { name } = useParams();
  let { cooked } = useParams();
  let { color } = useParams();
  // id = decodeURIComponent(id);

  console.log('wenis')

  return (
    <div>{name}, {cooked}, {color}</div>
  )
}

export default Share