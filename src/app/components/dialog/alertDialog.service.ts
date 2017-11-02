import { Component, Inject, Injectable, OnInit } from "@angular/core";
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';
import { AlertDialogComponent } from './alertDialog.component';
import { Observable } from 'rxjs/Observable';
import { Dictionary } from "lodash";

export class AlertDialogService {
    constructor(
        @Inject(MdDialog) public _alertDialog: MdDialog,
        @Inject(DOCUMENT) doc: any
    ) {
    }

    /**
     * 
     * @param contentOrConfig 用户配置
     * @param title 标题
     */
    public confirm(tconfig:any): Observable<any> {
        // 设置dialog的属性，宽度，高度，内容等。
        let config = new MdDialogConfig();
        if (tconfig instanceof Object)
        {
            config = {
                width: tconfig.width || "460px",
                height: tconfig.height || "240px",
            };
            config['title'] = tconfig.title;
            config.data = tconfig;
            if(tconfig.type)
                config.data['type']=tconfig.type;
            
            if(!config['type'])
                config.data['type']="info";
        }
        return this._alertDialog.open(AlertDialogComponent, config).afterClosed();
    }
}