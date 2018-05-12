import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { StoreModule } from "@ngrx/store";
import {StoreDevtools, StoreDevtoolsModule} from "@ngrx/store-devtools";

import { simpleReducer } from "./reducers/simple.reducer";
import { postReducer } from "./reducers/post.reducer";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      post: postReducer,
      message: simpleReducer
    }),
    StoreDevtoolsModule.instrument({
      maxAge:10
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
