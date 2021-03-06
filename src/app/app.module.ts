import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VendorsComponentComponent } from './vendors-component/vendors-component.component';
import { VendorsViewComponent } from './vendors-view/vendors-view.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { NavigationComponentComponent } from './navigation-component/navigation-component.component';
import { OptionListComponent } from './option-list/option-list.component';
import { FormsComponent } from './forms/forms.component';
import { SolutionsFormsComponentComponent } from './solutions/solutions-forms-component/solutions-forms-component.component';
import { PolicyComponentComponent } from './policy-component/policy-component.component';
import { PolicyViewComponentComponent } from './policy-view-component/policy-view-component.component';
import { ContactComponentComponent } from './solutions/solutions-forms-component/contact-component/contact-component.component';
import { PolicyViewFormsComponentComponent } from './policy-view-component/policy-view-forms-component/policy-view-forms-component.component';
import { ViewTableComponent } from './vendors-view/view-table/view-table.component';
import { LocalityComponentComponent } from './locality-component/locality-component.component';
import { LocalityAddComponentComponent } from './locality-component/locality-add-component/locality-add-component.component';
import { LocalityViewComponentComponent } from './locality-view-component/locality-view-component.component';
import { SolutionViewComponentComponent } from './solution-view-component/solution-view-component.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PolicyFormsComponent } from './policy-component/policy-forms/policy-forms.component';
import { RegisterComponent } from './services/register.component';
import { RegisterService } from './services/register.service';
import {HttpModule} from '@angular/http';
import { SolutionTableComponent } from './solution-view-component/solution-table/solution-table.component';
import { FormsModule } from '@angular/forms';
import { PolicyDetailsComponent } from './policy-view-component/policy-view-forms-component/policy-details/policy-details.component';
import { EditSolutionComponent } from './edit-solution/edit-solution.component';
import { EditSolutionFormComponent } from './edit-solution/edit-solution-form/edit-solution-form.component';
import { ReviewComponent } from './policy-view-component/policy-view-forms-component/review/review.component';
import { DocumentsComponent } from './policy-view-component/policy-view-forms-component/documents/documents.component';
import { ApplicationsComponent } from './policy-view-component/policy-view-forms-component/applications/applications.component';
import { DialogBoxComponent } from './policy-view-component/policy-view-forms-component/documents/dialog-box/dialog-box.component';
import { EditVendorComponent } from './edit-vendor/edit-vendor.component';



const appRoutes: Routes=[
    {path: '', component: DashboardComponent },
    {path: 'vendors', component: VendorsComponentComponent },
    {path: 'solutions', component: SolutionsComponent },
    {path: 'vendorsView', component: VendorsViewComponent },
    {path: 'policy', component: PolicyComponentComponent },
    {path: 'locality', component: LocalityComponentComponent },
    {path: 'localityView', component: LocalityViewComponentComponent },
    {path: 'solutionsView', component: SolutionViewComponentComponent },
    {path: 'editSolutions/:id', component: EditSolutionComponent },
    {path: 'editVendors/:id', component: EditVendorComponent },
    {path: ':edit/:id', component: EditVendorComponent }
//    {path: 'policyView', component: PolicyViewComponentComponent, children: [
//      {path: 'policyDetails', component: PolicyDetailsComponent },
//      {path: 'review', component: ReviewComponent },
//      {path: 'documents', component: DocumentsComponent },
//      {path: 'applications', component: ApplicationsComponent}] },
    
  ];
 

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    VendorsComponentComponent,
    VendorsViewComponent,
    SolutionsComponent,
    NavigationComponentComponent,
    OptionListComponent,
    FormsComponent,
    SolutionsFormsComponentComponent,
    PolicyComponentComponent,
    PolicyViewComponentComponent,
    ContactComponentComponent,
    PolicyViewFormsComponentComponent,
    ViewTableComponent,
    LocalityComponentComponent,
    LocalityAddComponentComponent,
    LocalityViewComponentComponent,
    SolutionViewComponentComponent,
    PolicyFormsComponent,
    RegisterComponent,
    SolutionTableComponent,
    PolicyDetailsComponent,
    EditSolutionComponent,
    EditSolutionFormComponent,
    ReviewComponent,
    DocumentsComponent,
    ApplicationsComponent,
    DialogBoxComponent,
    EditVendorComponent
  ],
  entryComponents: [
    DialogBoxComponent
  ],
  
 
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    RouterModule.forRoot(appRoutes),
    MyDatePickerModule,
    HttpModule,
    CoreModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
