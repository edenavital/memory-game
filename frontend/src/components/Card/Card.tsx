import { useState } from "react";

import ReactCardFlip from "react-card-flip";
import { ReactComponent as CardSvg } from "../../assets/icons/card.svg";

export const Card = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
      <div onClick={() => setFlipped(!flipped)}>
        <CardSvg />
      </div>

      <div onClick={() => setFlipped(!flipped)}>
        <CardSvg />
      </div>
    </ReactCardFlip>
  );
};
