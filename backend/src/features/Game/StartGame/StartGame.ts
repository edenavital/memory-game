import { Photo } from "pexels";
import { pexelsClient } from "../../../utils/pexels";
import { Card } from "../../Card";
import { BaseGame } from "../BaseGame";
import { AmountOfCards, Level } from "./StartGame.types";
import { AppError } from "../../AppError";

export class StartGame extends BaseGame {
  private _imageAmount: number;

  constructor(level: Level) {
    super(level);
    this._imageAmount = AmountOfCards[level] / 2;
  }

  public generateGame = async () => {
    // return {
    //   "0bfb0bdc-5421-47a7-ac85-3e7df2cd236b": {
    //     id: "0bfb0bdc-5421-47a7-ac85-3e7df2cd236b",
    //     // value: "11423493",
    //     src: "https://images.pexels.com/photos/11423493/pexels-photo-11423493.jpeg",
    //     flipped: false,
    //   },
    //   "ec738d2e-b638-4c61-abde-938d1f024b52": {
    //     id: "ec738d2e-b638-4c61-abde-938d1f024b52",
    //     // value: "11299778",
    //     src: "https://images.pexels.com/photos/11299778/pexels-photo-11299778.jpeg",
    //     flipped: false,
    //   },
    //   "1eb0f7a8-2c98-4691-803c-411034c32b9a": {
    //     id: "1eb0f7a8-2c98-4691-803c-411034c32b9a",
    //     // value: "11423493",
    //     src: "https://images.pexels.com/photos/11423493/pexels-photo-11423493.jpeg",
    //     flipped: false,
    //   },
    //   "e20cd46a-f0a2-47f9-b8e4-85c8344968db": {
    //     id: "e20cd46a-f0a2-47f9-b8e4-85c8344968db",
    //     // value: "11299778",
    //     src: "https://images.pexels.com/photos/11299778/pexels-photo-11299778.jpeg",
    //     flipped: false,
    //   },
    // };

    const promiseCollection: any[] = [];

    [...Array(this._imageAmount)].forEach(() => {
      // adding promise to collection array - run in parallel
      promiseCollection.push(this.generateSingleCard());
    });

    //TODO: Think about a better approach... maybe we can make it more efficient
    const cards = await Promise.all(promiseCollection);
    const shuffledArr = this.shuffleCardsArr(cards.flat());
    const cardsObject = this.reduceToObjectForamt(shuffledArr);
    return cardsObject;
  };

  private reduceToObjectForamt = (shuffledArr: any) => {
    const obj = shuffledArr.reduce((acc: any, curr: any) => {
      const { id } = curr;
      return { ...acc, [id]: curr };
    }, {});

    return obj;
  };

  private generateSingleCard = async () => {
    try {
      const photo = (await pexelsClient?.photos.random()) as Photo;

      const {
        id: value,
        src: { tiny = "", original = "" },
      } = photo;

      const card = new Card(`${value}`, original);
      const dupCard = card.createDuplicatedCard();
      return [card, dupCard];
    } catch (err: unknown) {
      throw new AppError(
        "Pexels API is unavailable at this momement" + err,
        500
      );
    }
  };

  private shuffleCardsArr = (array: any) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };
}
