﻿import {Component, Inject} from '@angular/core';
import {MdDialog, MdDialogRef, MD_DIALOG_DATA} from '@angular/material';

/**
 * @title Dialog Overview
 */
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialogue.component.html'
})
export class DialogOverviewExample {

  animal: string;
  name: string;

  constructor(public dialog: MdDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }

}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogue-modal.component.html'
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MdDialogRef<DialogOverviewExampleDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


/**  Copyright 2017 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */