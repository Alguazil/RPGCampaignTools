import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.scss']
})
export class CharacterSheetComponent implements OnInit {

  iconsSelect: Array<any>;

  constructor() { }

  ngOnInit() {
      this.iconsSelect = [
          { value: '1', label: 'Barbare', icon: '../../../assets/img/classe/icon/barbare_icon.png' },
          { value: '2', label: 'Option 2', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg' },
          { value: '3', label: 'Option 3', icon: 'https://mdbootstrap.com/img/Photos/Avatars/avatar-3.jpg' },
      ];
  }

}
