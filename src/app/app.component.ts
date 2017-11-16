import { PaginadorService } from "./paginador.service";
import { Component, OnInit } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";
import { DataService } from "app/data.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  totalRegistros: any[];
  pagina: any = {};
  items: any[];


  constructor(
    private paginadorService: PaginadorService,
    private dataService : DataService
  ) {  }


  ngOnInit(): void {
    this.dataService.getItems().subscribe((data : any) => {
        this.totalRegistros = data;
         this.setPage(1);
    });

  }

  setPage(page: number) {
    if (page < 1 || page > this.pagina.totalPaginas || page === this.pagina.paginaAtual) {
      return;
    }

    this.pagina = this.paginadorService
    .getPager(this.totalRegistros.length, page);

    this.items = this.totalRegistros.slice(
      this.pagina.primeiroItem, (this.pagina.ultimoItem + 1)
    );

    console.log(this.items);
  }
}
