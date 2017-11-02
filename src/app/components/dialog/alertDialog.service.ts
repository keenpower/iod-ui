import { Component, Inject } from "@angular/core";
import { MdDialog, MdDialogConfig } from '@angular/material';
import { AlertDialogComponent } from './alertDialog.component';
import { Observable } from 'rxjs/Observable';

export class AlertDialogService {
    constructor(
        @Inject(MdDialog) public _alertDialog: MdDialog,
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
            tconfig = {'content':tconfig,'type':'info','title':'提示'};
        }

        config = {
            width: tconfig.width || "460px",
            height: tconfig.height || "188px",
        };
        config['title'] = tconfig.title;
        config.data = tconfig;
        if(tconfig.type)
            config.data['type']=tconfig.type;
        
        if(!config['type'])
            config.data['type']="info";
        return this._alertDialog.open(AlertDialogComponent, config).afterClosed();
    }
}