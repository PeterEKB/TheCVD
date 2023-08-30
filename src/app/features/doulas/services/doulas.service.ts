import { Injectable } from '@angular/core';
import { DoulaInfo } from 'src/app/core/models/doula-info';

@Injectable({
  providedIn: 'root',
})
export class DoulasService {
  private listOfDoulas!: DoulaInfo[];

  public get list(): DoulaInfo[] {
    this.getAllDoulas();
    return this.listOfDoulas;
  }

  constructor() {}

  private getAllDoulas(): void {
    this.listOfDoulas = [
      {
        id: '001',
        pronoun: 'She/Her',
        name: {
          first: 'laura',
          last: 'l',
        },
        email: ' laura.l@chicagovolunteerdoulas.org',
        withCVD: 'April 2023',
        moreInfo:
          'XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX',
        currentProgram: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        website: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        facebook: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        locations: ['central', 'north side', 'northwest side', 'west side'],
        image:
          'https://static.wixstatic.com/media/fe2ceb_5d441da52ed14259aeab72da2a38abc3~mv2.jpg/v1/crop/x_0,y_403,w_1474,h_1086/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Laura%20Lusson%20Aug%202023%20-%20Laura%20Lusson.jpg',
      },
      {
        id: '002',
        pronoun: 'She/Her',
        name: {
          first: 'rise',
          last: 'o',
        },
        email: ' laura.l@chicagovolunteerdoulas.org',
        withCVD: 'April 2023',
        moreInfo:
          'XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX',
        currentProgram: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        website: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        facebook: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        locations: [
          'central',
          'far north side',
          'northwest side',
          'south side',
          'far southwest side',
          'south side',
          'west side',
        ],
        image:
          'https://static.wixstatic.com/media/fe2ceb_202c1e05c3f749e68bad1d5e7500ed22~mv2.jpg/v1/crop/x_0,y_659,w_2208,h_1627/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/20230423_155451%20-%20Rise%20Nerissa%20Osby.jpg',
      },
      {
        id: '003',
        pronoun: 'She/Her',
        name: {
          prefix: 'dr',
          first: 'chanel',
          last: 'p',
        },
        email: ' laura.l@chicagovolunteerdoulas.org',
        withCVD: 'April 2023',
        moreInfo:
          'XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX',
        currentProgram: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        website: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        facebook: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        locations: [
          'central',
          'far south side',
          'southeast side',
          'far southwest side',
          'south side',
          'southwest side',
          'west side',
        ],
        image:
          'https://static.wixstatic.com/media/c286fe_11e02a2b50144f7fb20488c94c327b4d~mv2.jpg/v1/crop/x_0,y_63,w_2000,h_1474/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/DrChanelP.jpg',
      },
      {
        id: '004',
        pronoun: 'She/Her',
        name: {
          first: 'Rise',
          last: 'O',
        },
        email: ' laura.l@chicagovolunteerdoulas.org',
        withCVD: 'April 2023',
        moreInfo:
          'XXXXXXXX XXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXXXXXXXXX XXXXXXXXXXXXX XXXXXXXXX',
        currentProgram: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        website: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        facebook: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
        locations: [
          'central',
          'far north side',
          'north side',
          'northwest side',
          'west side',
        ],
        image:
          'https://static.wixstatic.com/media/fe2ceb_34dbb37af01347bfab2412f7b3de7b7d~mv2.jpg/v1/crop/x_0,y_1702,w_8000,h_5895/fill/w_684,h_504,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Bolocans%20(52%20of%20189)%20-%20Sarah%20Bolocan.jpg',
      },
    ];
  }
  public getByID(id: string): DoulaInfo | undefined {
    if (!this.listOfDoulas) this.getAllDoulas();

    return this.list.find((info) => info.id === id);
  }
}
