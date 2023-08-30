// {
//   pronoun: 'He/Him',
//   name: {
//     first: 'Laura',
//     last: 'Lauralet',
//   },
//   email: 'example@XXXXX.XXX',
//   withCVD: 'XXX XXXX',
//   moreInfo:
//     'XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX',
//   currentProgram: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//   website: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//   facebook: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
//   locations: ['central', 'north', 'south'],
// }
export interface DoulaInfo {
  id: string;
  pronoun: string;
  name: DoulaName;
  email: string;
  withCVD: string;
  moreInfo: string;
  currentProgram: string;
  website: string;
  facebook: string;
  locations: string[];
  image?: string;
}
export interface DoulaName {
  prefix?: string;
  first: string;
  last: string;
}