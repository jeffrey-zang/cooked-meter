import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Dial from '../Dial'

const Share = () => {

  let { name } = useParams();
  let { cooked } = useParams();
  let { rotation } = useParams();
  let { color } = useParams();

  if (cooked.includes('give up bro')) {
    cooked = `${name}? ${cooked}`
  } else {
    cooked = `${name} is ${cooked.replace("you're", '')}`
  }

  return (
    // <div>{name}, {thing}, {cooked}, {color}</div>
    <div className='body' style={{ backgroundColor: color }}>
      <div>
        <h1 className='title center'>{cooked}</h1>
        <Link to='/'>wait but how cooked am i??</Link>
      </div>
      <div>
        <p className="desc">{cooked.replace("you're", '')}</p>
        <Dial rotateAmount={rotation} />
      </div>
    </div>
  )
}

export default Share