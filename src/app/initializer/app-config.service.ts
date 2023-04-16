import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, filter} from "rxjs";
import {Product} from "../product";
import {error} from "@angular/compiler-cli/src/transformers/util";

@Injectable({
  providedIn: 'root'
})
export class AppConfigService {
  private productsUrl = 'api/products';
  private data = new BehaviorSubject<Product[] | null>(null);
  readonly dataAction$ = this.data.asObservable().pipe(filter(i => !!i))

  constructor(private http: HttpClient) {

  }

  fetchEndpoints() {
    this.http.get<Product[]>(this.productsUrl).subscribe({
        next: (products: Product[]) => this.data.next(products),
        error: (err) => console.log(err)
    }
    )
  }
}
