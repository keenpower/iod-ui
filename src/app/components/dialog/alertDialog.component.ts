import { Component, OnInit, Inject } from "@angular/core";
import { MdDialogRef } from "@angular/material";
import { MD_DIALOG_DATA } from "@angular/material";

@Component({
    selector: "iod-alert-dialog",
    styleUrls: ["alertDialog.component.scss"],
    templateUrl: "alertDialog.component.html"
})
export class AlertDialogComponent {
    config: {};
    // 样式变量
    dialogType: string = "default";
    constructor(
        public mdDialogRef: MdDialogRef<AlertDialogComponent>,
        @Inject(MD_DIALOG_DATA) data: any
    ) {
        this.config = data;
        console.log(mdDialogRef);
        console.info(data);
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
