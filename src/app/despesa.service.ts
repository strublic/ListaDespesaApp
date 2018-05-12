import { Injectable } from '@angular/core';
import { Despesa } from './despesa';
import { LocalStorageModule } from 'angular-2-local-storage';
import { LocalStorageService } from 'angular-2-local-storage/dist/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class DespesaService {

  private despesas: Despesa[] = new Array();

  constructor(private lss: LocalStorageService) { }

  getDb(): void{
    this.despesas = [];
    if(this.lss.get("despesas") != null){
      this.despesas = <Despesa[]> JSON.parse(<string>this.lss.get("despesas"));
    }
  }

  public getall(): Despesa[]{
    this.getDb();
    return this.despesas
  }

  save(despesa: Despesa): void {
    this.getDb();
    this.despesas.push(despesa);
    this.lss.set("despesas", JSON.stringify(this.despesas));
  }

  delete(despesaId: number){
    for(var i=0; i<this.despesas.length; i++)
    {
      if(this.despesas[i].id == despesaId){
        this.despesas.splice(i, 1);
      }
    }
    this.lss.set("despesas", JSON.stringify(this.despesas));
  }
}
