import { Component, OnInit } from '@angular/core';

import { GeneralService } from '../../../core/service/general.service';

@Component({
  selector: 'app-recordings-my-body',
  templateUrl: '../all-recordings.component.html',
  styleUrls: ['../all-recordings.component.scss']
})

export class MyBodyComponent implements OnInit {
  recordingTitle: String = 'Moje telo';
  currentlyShownElement = null;
  recordings: any[] = [
    {
      "title": "Grajska pot",
      "description": "Ta kategorijitivne samopodobe. Ta kategorija zajema tehnike za večanje samozavesti, samozaupanja, pozitivne samopodobe. Ta kategorija zajema tehnike za večanje samozavesti, samozaupanja, pozitivne samopodobe.",
      "url": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fbrianskyze%2F008-prescriptive-grammar-radio-show%2F",
      "show": true
    },
    {
      "title": "Brez hrepenenj",
      "description": "Ta kategorija zajema tehnike za večanje samozavesti, samozaupanja, pozitivne samopodobe. Ta kategorija zajema tehnike za večanje samozavesti, samozaupanja, pozitivne samopodobe. Ta kategorija zajema tehnike za večanje samozavesti, samozaupanja, pozitivne samopodobe.",
      "url": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fbrianskyze%2F008-prescriptive-grammar-radio-show%2F",
      "show": false
    },
    {
      "title": "Prehranjevanje je umetnost",
      "description": "Ta kategorija zajema tehnike za večanje samozavestbe. Ta kategorija zajema tehnike za večanje samozavesti, samozaupanja, pozitivne samopodobe. Ta kategorija zajema tehnike za večanje samozavesti, samozaupanja, pozitivne samopodobe.",
      "url": "https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Fbrianskyze%2F008-prescriptive-grammar-radio-show%2F",
      "show": false
    }
  ]
  recordingDescription: any[] = [
    {
      "text": "Moje telo mopodobe, samospoštovanja, samostojnosti ter zmanjševanje tesnobe in skrbi. Krepitev samozavesti je del vsake dobre hipnoze, saj je močno orodje pri obravnavi širokega spektra težav. Nekateri avtorji navajajo, da je krepitev samozavesti primerna prav za vse ljudi, ne glede na njihove težave.  Gre za temeljni občutek jaz zmorem, pa naj bo to karkoli."
    }
  ]

  constructor(private generalService: GeneralService) { }

  ngOnInit() {
    this.generalService.currentLink = 'hypnosis';
    this.currentlyShownElement = this.recordings[0];
  }

  elementClicked(element) {
    //if any other recording was shown close it
    if (this.currentlyShownElement != element && this.currentlyShownElement != null) {
      this.currentlyShownElement.show = false;  
    }
    //show or hide this element
    element.show = !element.show;
    this.currentlyShownElement = element;
  }
}
