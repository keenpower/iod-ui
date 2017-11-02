import { Component, Inject } from "@angular/core";
import { MdDialog, MdDialogConfig } from '@angular/material';
import { ConfirmDialogComponent } from './confirmDialog.component';
import { Observable } from 'rxjs/Observable';

export class ConfirmDialogService {
    constructor(
        @Inject(MdDialog) public _confirmDialog: MdDialog,
    ) {
    }

    /**
     * 
     * @param tconfig 用户配置
     * @param title 标题
     */
    public confirm(tconfig:any): Observable<any>
    {
        // 设置dialog的属性，宽度，高度，内容等。
        let config = new MdDialogConfig();
        if(!(tconfig instanceof Object))
        {
            tconfig = {'content':tconfig,'type':'warn','title':'提示'};
        }
        config = {
            width: tconfig.width || "460px",
            height: tconfig.height || "188px",
            disableClose:true
        };
        config.data = tconfig;
        config['title'] = tconfig.title;

        if(tconfig.type)
            config.data['type']=tconfig.type;
        else
            config.data['type']="warn";
        return this._confirmDialog.open(ConfirmDialogComponent, config).afterClosed();
    }
}