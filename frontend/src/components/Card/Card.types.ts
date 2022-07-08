export interface ICard {
  id: string;
  src: string;
  flipped?: boolean;
  isGuessedCorrect?: boolean;
}

export interface ICardProps extends ICard {
  setCardsHandler: (card: ICard) => void;
}

export interface CardsObject {
  [key: string]: ICard | null;
}
