import { FC, useEffect, useState } from "react";
import * as Styled from "./GameScreen.styles";
import { Wrapper } from "../../components/Wrapper";
import { Typography } from "../../components/Typography";
import { Button } from "../../components/Button";
// import { useAppDispatch } from "../../redux/hooks";
// import { useNavigate } from "react-router-dom";
import { Card, ICard, CardsObject } from "../../components/Card";
import { httpClient } from "../../api/axios";
import { BASE_ROUTES, GAME_ROUTES } from "../../consts";
import { useAppSelector } from "../../redux/hooks";

export const GameScreen: FC = () => {
  const [cards, setCards] = useState<CardsObject | null>(null);
  const level = useAppSelector((state) => state.global.level);
  const [disableClicks, setDisableClicks] = useState(false);
  const [selectedCards, setSelectedCards] = useState<CardsObject>({});

  // const navigate = useNavigate();
  // const dispatch = useAppDispatch();

  const setCardsHandler = (card: ICard) => {
    const updatedCards = { ...cards };
    const { id } = card;
    // Incase we are clicking on guessed cards
    if (updatedCards[id]!.isGuessedCorrect) {
      return;
    }

    const updatedSelectedCards = { ...selectedCards };

    const selectedCard = updatedCards[id]!;
    // Card is already flipped - unflip it and remove from selectedCards
    if (selectedCard.flipped) {
      selectedCard.flipped = false;
      delete updatedSelectedCards[id];
      // Card is not flipped - flip it and store in selectedCards
    } else {
      selectedCard.flipped = true;
      updatedSelectedCards[id] = card;
    }

    setSelectedCards(updatedSelectedCards);
  };

  useEffect(() => {
    const selectedCardsArray = Object.values(selectedCards);

    if (selectedCardsArray.length === 2) {
      // Disable any clicks on the cards
      setDisableClicks(true);

      // Add delay for clicks
      setTimeout(() => {
        // extracting both of the selected cards
        const [cardOne, cardTwo] = selectedCardsArray;

        const updatedCards = { ...cards };

        // If both of the cards have the same src - always dispaly them as flipped with a boolean (scored a point)
        if (cardOne!.src === cardTwo!.src) {
          updatedCards[cardOne!.id]!.isGuessedCorrect = true;
          updatedCards[cardTwo!.id]!.isGuessedCorrect = true;
          // If not - unflip the cards
        } else {
          updatedCards[cardOne!.id]!.flipped = false;
          updatedCards[cardTwo!.id]!.flipped = false;
        }

        setCards(updatedCards);
        setSelectedCards({});

        setDisableClicks(false);
      }, 1000);
    }
  }, [selectedCards]);

  useEffect(() => {
    const fetchCardsArray = async () => {
      const endpoint = `${BASE_ROUTES.API}${BASE_ROUTES.GAME}${GAME_ROUTES.START_GAME}`;
      try {
        const res = await httpClient.post(endpoint, { level });
        const {
          data: { data: cards },
        } = res;
        console.log("cards", cards);
        setCards(cards);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCardsArray();
  }, []);

  const renderCards = () => {
    if (cards) {
      return Object.keys(cards).map((cardId: string) => {
        const { id, src, flipped, isGuessedCorrect } = cards[cardId]!;
        const isFlipped = isGuessedCorrect ?? flipped;
        return (
          <Card
            key={id}
            id={id}
            src={src}
            setCardsHandler={(card: ICard) => {
              if (disableClicks) {
                return;
              }
              setCardsHandler(card);
            }}
            flipped={isFlipped}
          />
        );
      });
    }
  };

  return (
    <Wrapper withHeader>
      <Styled.Header>
        <Styled.LeftSideWrapper>
          <Styled.LeftSideText>
            <Typography>Score: BLA</Typography>
            <Typography>Time: BLA</Typography>
            <Typography>Moves: BLA</Typography>
          </Styled.LeftSideText>
          <div>
            <Button>bla</Button>
          </div>
        </Styled.LeftSideWrapper>
      </Styled.Header>

      <Styled.GameContentWrapper>{renderCards()}</Styled.GameContentWrapper>
    </Wrapper>
  );
};
