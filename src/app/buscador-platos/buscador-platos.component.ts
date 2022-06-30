import { Component, OnInit } from '@angular/core';
import { MenuService } from '../servicios/menu.service';

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
  }

  onSearch(cocina: string){
    console.log(cocina)
    this.menuService.getItemsByType(cocina).subscribe(
      (data => this.platos = data.results)
    )
  }
}
