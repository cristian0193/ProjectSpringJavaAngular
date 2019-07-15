import { Injectable } from "@angular/core";
import { Producto } from './productos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ProductoService {

    private urlEndPoint:string = 'http://localhost:8080/api/producto'
    constructor(private http: HttpClient) {}

    getProductos(): Observable<Producto[]> {
        return this.http.get<Producto[]>(this.urlEndPoint);
    }
}



