import { Injectable } from "@angular/core";

@Injectable()
export class PaginadorService {
  getPager(qtdRegistros: number, paginaAtual: number = 1, qtdPagina: number = 10) {
    //Calcula o total de paginas
    let totalPaginas: number = Math.ceil((qtdRegistros / qtdPagina));
    let primeiraPagina: number;
    let ultimaPagina: number;

    //Se tiver menos de 10 páginas ao todo, então mostre tudo
    if (totalPaginas <= 10) {
      primeiraPagina = 1;
      ultimaPagina = totalPaginas;
    } else {
      //Caso tenha mais de 10 páginas, então calcule as páginas de início e fim
      if (paginaAtual <= 6) {
        primeiraPagina = 1;
        ultimaPagina = 10;
      } else if ((paginaAtual + 4) >= totalPaginas) {
        primeiraPagina = (totalPaginas - 9);
        ultimaPagina = totalPaginas;
      } else {
        primeiraPagina = (paginaAtual - 5);
        ultimaPagina = (paginaAtual + 4);
      }
    }

    //Calcula o indice inicial e final
    let primeiroItem = (paginaAtual - 1) * qtdPagina;
    let ultimoItem = Math.min(primeiroItem + (qtdPagina - 1),(qtdRegistros - 1));

    //Cria um array de paginas
    let paginas = Array.from(Array(ultimaPagina + 1 - primeiraPagina), (_,i) => (primeiraPagina + i));

    return {
      totalRegistros: qtdRegistros,
      paginaAtual: paginaAtual,
      itemsPorPagina: qtdPagina,
      totalPaginas: totalPaginas,
      primeiraPagina: primeiraPagina,
      ultimaPagina: ultimaPagina,
      primeiroItem: primeiroItem,
      ultimoItem: ultimoItem,
      paginas: paginas
    };
  }
}
