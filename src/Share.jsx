import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const Share = () => {

  let { name } = useParams();
  let { cooked } = useParams();
  let { selected } = useParams();
  let { color } = useParams();

  return (
    // <div>{name}, {thing}, {cooked}, {color}</div>
    <div>
      <h1 className='title center'>{cooked.replace("you're", `${name} is`)}</h1>
      <div className="center">
        <p className="desc"></p>
        <div className="semi-circle">
          <div
            className="dial"
            style={{
              transform: `translateX(-50%) translateY(3rem) rotate(${cooked[0] * 1.8 - 90}deg)`,
              bottom: 0
            }}
          ></div>
          <div
            className="line"
            style={{
              transform:
                "translateX(-50%) translateY(3rem) rotate(-60deg)",
            }}
          ></div>
          <div
            className="line"
            style={{
              transform:
                "translateX(-50%) translateY(3rem) rotate(-30deg)",
            }}
          ></div>
          <div
            className="line"
            style={{
              transform: "translateX(-50%) translateY(3rem) rotate(0deg)",
            }}
          ></div>
          <div
            className="line"
            style={{
              transform:
                "translateX(-50%) translateY(3rem) rotate(30deg)",
            }}
          ></div>
          <div
            className="line"
            style={{
              transform:
                "translateX(-50%) translateY(3rem) rotate(60deg)",
            }}
          ></div>
          <div
            className="line"
            style={{
              transform:
                "translateX(-50%) translateY(3rem) rotate(90deg)",
            }}
          ></div>
          <div
            className="line"
            style={{
              transform:
                "translateX(-50%) translateY(3rem) rotate(-90deg)",
            }}
          ></div>
        </div>
      </div>
      <Link to='/'>how cooked am i?</Link>
    </div>
  )
}

export default Share