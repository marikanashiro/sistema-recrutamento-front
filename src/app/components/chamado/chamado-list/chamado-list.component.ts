import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Chamado } from 'src/app/models/chamado';

@Component({
  selector: 'app-chamado-list',
  templateUrl: './chamado-list.component.html',
  styleUrls: ['./chamado-list.component.css']
})
export class ChamadoListComponent implements OnInit {

  ELEMENT_DATA: Chamado[] = [
      {
        id: 1,
        dataAbertura: '21/06/2021',
        dataFechamento: '15/02/2022',
        prioridade: 'ALTA',
        status: 'ANDAMENTO',
        titulo: 'chamado 1',
        descricao: 'chamado 1 ein',
        tecnico: 1,
        cliente: 2,
        nomeCliente: 'Mariana Kanashiro',
        nomeTecnico: 'Valdir'
      }
    ]

    displayedColumns: string[] = ['id', 'titulo', 'cliente', 'tecnico', 'dataAbertura', 'prioridade', 'status', 'acoes'];
    dataSource = new MatTableDataSource<Chamado>(this.ELEMENT_DATA);
  
    @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
