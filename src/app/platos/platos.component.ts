
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../servicios/menu.service';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  menu: any = {};
  defoultImage: string = "https://spoonacular.com/menuItemImages/pilaf.png"
  constructor(private menuService:MenuService, private route:Router) { }

  ngOnInit(): void {

    this.menuService.getMenu().subscribe(
      (data: any) => {
        this.menu = data.results
        console.log(data);
      },
      error => {
        console.log(error);
      }
      )
  }

  onItemDetail(id: number){
    this.menuService.getItemDetail(id).subscribe(
      (data: any) =>{
        console.log(data)
        this.route.navigate(['/detallePlato', { plato: JSON.stringify(data)}])
      }
    )
  }

  onSearch(){
    
    this.route.navigate(['/buscadorPlatos'])
    console.log("dsaads")
  }



}
