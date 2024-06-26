import { useParams } from 'react-router-dom';

const Share = () => {

  let { name } = useParams();
  let { cooked } = useParams();
  let { color } = useParams();

  return (
    // <div>{name}, {thing}, {cooked}, {color}</div>
    <div>
      <h1 className='title'>{cooked.replace("you're", `${name} is`)}</h1>
    </div>
  )
}

export default Share