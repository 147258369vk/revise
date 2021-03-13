import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './banner/banner.component';
import { ElementsComponent } from './elements/elements.component';
import { GenericComponent } from './generic/generic.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { TemplateFormComponent } from './template-form/template-form.component';
import { TestComponent } from './test/test.component';
import { ThemesComponent } from './themes/themes.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'generic',
    component:GenericComponent
  },
  {
    path:'elements',
    component:ElementsComponent,
    children:[
      {
        path:'themes',
        component:ThemesComponent
      },

    ]
  },
  {
    path:'test',
    component:TestComponent
  },
  {
    path:'templateForm',
    component:TemplateFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



