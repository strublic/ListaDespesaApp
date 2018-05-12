/*Modulos*/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RoutingModule } from './routing/routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LocalStorageModule } from 'angular-2-local-storage';
import { MomentModule } from 'angular2-moment';
import 'moment/locale/pt-br';

/*Componentes*/
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { DespesaService } from 'src/app/despesa.service';
import { DecimalBrPipe } from './decimal-br.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AddComponent,
    DecimalBrPipe
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    MomentModule,
    NgbModule.forRoot(),
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'despesasApp',
      storageType: 'localStorage'
    })
  ],
  providers: [DespesaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
