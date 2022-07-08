import { faker } from "@faker-js/faker";

export class Card {
  public value: string;
  public id: string;
  public src: string;
  constructor(value: string, src: string) {
    this.id = faker.datatype.uuid();
    this.value = value;
    this.src = src;
  }

  public createDuplicatedCard = () => {
    return { ...this, id: faker.datatype.uuid() };
  };
}
