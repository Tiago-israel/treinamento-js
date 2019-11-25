import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
    providedIn: 'root'
})
export class ApiService {
    constructor(private httpClient: HttpClient) {

    }

    //GET (Consulta)
    public buscarTodos(url: string) {
        return this.httpClient.get(url);
    }
    //GET (Consulta)
    public buscarPorId(url: string, id: number) {
        return this.httpClient.get(`${url}/${id}`);
    }
    //POST (Novo recurso)
    public salvar(url: string, body: any) {
        return this.httpClient.post(url, body)
    }

    //PUT (Edição de recurso)
    public editar(url: string, id: number, body:any) {
       return  this.httpClient.put(`${url}/${id}`,body);
    }

    //DELETE (Exclusão de recurso)
    public excluir(url: string, id: number) {
        return this.httpClient.delete(`${url}/${id}`);
    }
}