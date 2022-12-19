import { Component, OnInit, ViewChild } from "@angular/core";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Oficina } from "src/app/model/oficina";
import { OficinaService } from "src/app/services/oficina.service";

@Component({
  selector: "app-oficina",
  templateUrl: "./oficina-list.component.html",
  styleUrls: ["./oficina-list.component.css"],
})
export class OficinaListComponent implements OnInit {

  ELEMENT_DATA: Oficina[] = [];

  displayedColumns: string[] = ['pecaId', 'nomeDapeca','custoPeca',]
  dataSource = new MatTableDataSource<Oficina>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private service: OficinaService) {}

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Oficina>(resposta);
      this.dataSource.paginator = this.paginator;

    });
  }

   applyFilter(event: Event){
     const filterValue = (event.target as HTMLInputElement).value;
     this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
   }
}


