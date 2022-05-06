import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { ShowCategoryComponent } from './category/show-category/show-category.component';
import { AddEditCategoryComponent } from './category/add-edit-category/add-edit-category.component';
import { ToolComponent } from './tool/tool.component';
import { ShowToolComponent } from './tool/show-tool/show-tool.component';
import { AddEditToolComponent } from './tool/add-edit-tool/add-edit-tool.component';

import { SharedService } from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CommandsComponent } from './tool/commands/commands.component';
import { ShowCommandsComponent } from './tool/commands/show-commands/show-commands.component';
import { AddEditCommandComponent } from './tool/commands/add-edit-command/add-edit-command.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ShowCategoryComponent,
    AddEditCategoryComponent,
    ToolComponent,
    ShowToolComponent,
    AddEditToolComponent,
    HomeComponent,
    CommandsComponent,
    ShowCommandsComponent,
    AddEditCommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
