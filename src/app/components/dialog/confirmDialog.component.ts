import { Component, OnInit, Inject } from "@angular/core";
import { MdDialogRef } from "@angular/material";
import { MD_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "iod-confirm-dialog",
    styleUrls: ["confirmDialog.component.scss"],
    templateUrl: "confirmDialog.component.html"
})
export class ConfirmDialogComponent {
    config: {};
    // 样式变量
    dialogType: string = "default";
    constructor(
        public mdDialogRef: MdDialogRef<ConfirmDialogComponent>,
        @Inject(MD_DIALOG_DATA) data: any
    ) {
        this.config = data;
    }

    cancel():void
    {
        this.mdDialogRef.close(false)
    }

    ok():void
    {
        this.mdDialogRef.close(true);
    }
}
