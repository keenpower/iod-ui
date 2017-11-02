import { NgModule, Type } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CovalentHttpModule, IHttpInterceptor } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { CovalentChipsModule } from '@covalent/core';

import { AppComponent } from './app.component';
import { CovalentExpansionPanelModule } from '@covalent/core';

import { ConfirmDialogService } from './components/dialog/confirmDialog.service';
import { ConfirmDialogComponent } from './components/dialog/confirmDialog.component';

import { AlertDialogService } from './components/dialog/alertDialog.service';
import { AlertDialogComponent } from './components/dialog/alertDialog.component';

//引入md组件库  --include了MdGridListModule
import {
  MdButtonModule, MdListModule, MdIconModule, MdCardModule,
  MdCoreModule, MdMenuModule, MdTabsModule,
  MdToolbarModule, MdGridListModule, MdTooltipModule, MdDialogModule,MdRadioModule,
    MdAutocompleteModule
} from '@angular/material';

import {HashLocationStrategy , LocationStrategy} from '@angular/common';
const httpInterceptorProviders: Type<any>[] = [
];

@NgModule({
	providers:[ConfirmDialogService,AlertDialogService],
	declarations: [
		AppComponent,
		ConfirmDialogComponent,
		AlertDialogComponent
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CovalentHighlightModule,
		CovalentMarkdownModule,
		CovalentExpansionPanelModule,
		CovalentChipsModule,
		MdButtonModule,
		MdListModule, 
		MdIconModule,
		MdCardModule,
		MdCoreModule,
		MdMenuModule,
		MdTabsModule,
		MdToolbarModule,
		MdGridListModule,
		MdTooltipModule,
		MdDialogModule,
		MdRadioModule,
		MdAutocompleteModule
	],
	entryComponents: [ConfirmDialogComponent,AlertDialogComponent],
	bootstrap: [AppComponent],
})
export class AppModule { }
