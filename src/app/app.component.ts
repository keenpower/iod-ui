import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MdIconRegistry } from '@angular/material';
import { ConfirmDialogService } from './components/dialog/confirmDialog.service';
import { AlertDialogService } from './components/dialog/alertDialog.service';
@Component({
  selector: 'iod-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private _confirmDialogService:ConfirmDialogService,private _alertDialogService:AlertDialogService) {

  }

  openConfigDialog(): void {
    let dialogConfig = {
        content: "确认删除吗？",
        cancelText: "取消",
        showCancelBtn: true,
        submitText: "确认",
        showSubmitBtn: true,
        width: "460px",
        height: "188px",
        title:"提示"
    };

    this._confirmDialogService.confirm("确认删除吗？")
            .subscribe(res => 
            {
                // 返回结果
                if (res) {
                    console.info("删除成功");
                } else {
                    console.info("取消");
                    return;
                }
            });
  }

  openAlertDialog(): void {
    let dialogConfig = {
        content: "确认删除吗？",
        showCancelBtn: true,
        showSubmitBtn: true,
        width: "460px",
        height: "188px",
        title:"提示"
    };

    this._alertDialogService.confirm(dialogConfig)
            .subscribe(res => 
            {
                // 返回结果
                if (res) {
                    console.info("删除成功");
                } else {
                    console.info("取消");
                    return;
                }
            });
  }
}
