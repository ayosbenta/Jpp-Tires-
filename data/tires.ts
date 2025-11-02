
export interface Tire {
  id: number;
  name: string;
  type: string;
  imageUrl: string;
}

export const tires: Tire[] = [
  {
    id: 1,
    name: 'JP-SPORT X1',
    type: 'ALL-SEASON HIGH PERFORMANCE TIRE',
    imageUrl: 'https://www.daliantyre.com/data/upload/portal/20230109/63bbc71a7b202.png',
  },
  {
    id: 2,
    name: 'JP-ROADSTER V2',
    type: 'ULTRA-HIGH PERFORMANCE SUMMER TIRE',
    imageUrl: 'https://www.daliantyre.com/data/upload/portal/20230109/63bbc71a7b202.png',
  },
  {
    id: 3,
    name: 'JP-WINTERGRIP Z3',
    type: 'STUDLESS WINTER TIRE',
    imageUrl: 'https://www.daliantyre.com/data/upload/portal/20230109/63bbc71a7b202.png',
  },
  {
    id: 4,
    name: 'JP-OFFROAD M/T',
    type: 'MAXIMUM TRACTION MUD-TERRAIN TIRE',
    imageUrl: 'https://www.daliantyre.com/data/upload/portal/20230109/63bbc71a7b202.png',
  },
  {
    id: 5,
    name: 'JP-ECO SAVER',
    type: 'FUEL EFFICIENT TOURING TIRE',
    imageUrl: 'https://www.daliantyre.com/data/upload/portal/20230109/63bbc71a7b202.png',
  },
  {
    id: 6,
    name: 'JP-HIGHWAY H/T',
    type: 'ALL-SEASON HIGHWAY TRUCK TIRE',
    imageUrl: 'https://www.daliantyre.com/data/upload/portal/20230109/63bbc71a7b202.png',
  },
];
