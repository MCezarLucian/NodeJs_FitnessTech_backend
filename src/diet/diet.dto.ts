export class DietDTO {
  title: string;
  type: string[];
  imgSource: string;
  miniDescription: string;
  mainDescription: string;
  howWork: string;
  menuIdea: {
    breakfast: string[];
    launch: string[];
    dinner: [];
    snack: string;
    eatingOut: string;
  };
  shoppingIdeas: string[];
}
