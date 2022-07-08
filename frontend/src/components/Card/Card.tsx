import { FC, useState } from "react";
import { ICard, ICardProps } from "./Card.types";

import ReactCardFlip from "react-card-flip";
import { ReactComponent as CardSvg } from "../../assets/icons/card.svg";
import * as Styled from "./Card.styles";

export const Card: FC<ICardProps> = ({ flipped, id, src, setCardsHandler }) => {
  const cardData = { src, id };
  return (
    <Styled.CardWrapper id={id}>
      <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
        {/* front */}

        {/* <div id="daOne" onClick={() => setFlipped(!flipped)}> */}
        <CardSvg onClick={() => setCardsHandler(cardData)} />
        {/* </div> */}

        {/* back */}

        {/* <div id="daTwo" onClick={() => setFlipped(!flipped)}> */}
        <img
          onClick={() => setCardsHandler(cardData)}
          alt="image"
          src={src}
          style={{ width: "100%", height: "100%" }}
        />
        {/* </div> */}
      </ReactCardFlip>
    </Styled.CardWrapper>
  );
};
