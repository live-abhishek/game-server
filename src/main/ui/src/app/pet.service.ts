import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PetService {
    constructor(private http: Http) { }

    private url: string = "http://localhost:8080/pets";

    getPets() {
        return this.http.get(this.url).map((response: Response) => response.json());
    }
}