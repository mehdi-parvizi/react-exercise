import { useState } from "react";

interface Props {
  h2: string;
  h3: string;
}
function Card({ h2, h3 }: Props) {
  const [value, updater] = useState(0);
  return (
    <div className="container">
      <div className="row">
        <div
          className="card justify-content-center textCenter col"
          style={{
            width: `350px`,
            height: `350px`,
            margin: `20px 0 0 50px`,
            padding: `120px 20px 20px 20px`,
          }}
        >
          <h2>{h2}</h2>
          <h3>{h3}</h3>
          <div className="btn btn-primary" onClick={() => updater(value + 1)}>
            Add {value} to Cart
          </div>
          <div className="btn btn-warning" onClick={() => updater(value - 1)}>
            reduce {value} from Cart
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
