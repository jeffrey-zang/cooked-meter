import './Dial.css'

const Dial = ({ rotateAmount }) => {
  return (
    <div>
      <div className="dial-container">
        <div
          className="dial"
          style={{
            transform: `translateX(-50%) rotate(${rotateAmount * 1.8 - 90}deg)`,
          }}
        ></div>
        <div
          className="line"
          style={{
            transform: "translateX(-50%) translateY(3rem) rotate(-60deg)",
          }}
        ></div>
        <div
          className="line"
          style={{
            transform: "translateX(-50%) translateY(3rem) rotate(-30deg)",
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
            transform: "translateX(-50%) translateY(3rem) rotate(30deg)",
          }}
        ></div>
        <div
          className="line"
          style={{
            transform: "translateX(-50%) translateY(3rem) rotate(60deg)",
          }}
        ></div>
        <div
          className="line"
          style={{
            transform: "translateX(-50%) translateY(3rem) rotate(90deg)",
          }}
        ></div>
        <div
          className="line"
          style={{
            transform: "translateX(-50%) translateY(3rem) rotate(-90deg)",
          }}
        ></div>
      </div>
      <div className='indicator'>
        <p>Not cooked</p>
        <p>Very cooked</p>      
      </div>
    </div>
  );
};

export default Dial;
