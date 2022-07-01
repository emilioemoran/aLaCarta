import { Component, OnInit } from '@angular/core';
import { MenuService } from '../servicios/menu.service';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-buscador-platos',
  templateUrl: './buscador-platos.component.html',
  styleUrls: ['./buscador-platos.component.css']
})
export class BuscadorPlatosComponent implements OnInit {

  platos:any;
  defoultImage: string = "https://spoonacular.com/menuItemImages/pilaf.png"
  
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    const cocina =  document.getElementById('cocina')
    if(cocina != null){
      const keyup = fromEvent(cocina, 'keyup');
      keyup.pipe(
        map((e: any)=> e.currentTarget.value),
       debounceTime(500)
      ).subscribe(
        e => this.onSearch(e));
    }

  }

  onSearch(cocina: string){
    if(cocina.length > 2){
    this.menuService.getItemsByType(cocina).subscribe(
      (data => this.platos = data.results)
    )}
  }

  onAddMenu(item: object){
    let menu = JSON.parse(sessionStorage.getItem('menu')!)
    menu.push(item)
    sessionStorage.setItem('menu',JSON.stringify(menu))
    console.log(menu)
  }
}
