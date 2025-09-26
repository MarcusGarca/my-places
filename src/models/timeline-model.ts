export interface DayPlan {
  day: string;
  itens: Itens[];
}

interface Itens {
  item?: string;
  time?: string;
  contact?: string;
  address?: string;
  reservation?: string;
}
