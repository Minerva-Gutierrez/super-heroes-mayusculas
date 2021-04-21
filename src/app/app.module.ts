import { HeroeComponent } from "./heroes/heroe/heroe.component";
import { ListadoComponent } from "./heroes/listado/listado.com";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent, HeroeComponent, ListadoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
