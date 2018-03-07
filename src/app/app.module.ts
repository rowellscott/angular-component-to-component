import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MyPropertyBindingComponent } from './my-property-binding/my-property-binding.component';
import { MyEventBindingComponent } from './my-event-binding/my-event-binding.component';
import { MyMixedBindingComponent } from './my-mixed-binding/my-mixed-binding.component';
import { MyTwoWayBindingComponent } from './my-two-way-binding/my-two-way-binding.component';
import { MySignupFormComponent } from './my-signup-form/my-signup-form.component';
import { QuoteItemComponent } from './quote-item/quote-item.component';
import { QuoteListComponent } from './quote-list/quote-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MyPropertyBindingComponent,
    MyEventBindingComponent,
    MyMixedBindingComponent,
    MyTwoWayBindingComponent,
    MySignupFormComponent,
    QuoteItemComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
