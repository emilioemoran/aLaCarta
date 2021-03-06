
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../servicios/auth.service';
import { MenuService } from '../servicios/menu.service';


@Component({
  selector: 'app-platos',
  templateUrl: './platos.component.html',
  styleUrls: ['./platos.component.css']
})
export class PlatosComponent implements OnInit {

  menu: any = JSON.parse(sessionStorage.getItem('menu')!) || {};
  defoultImage: string = "https://spoonacular.com/menuItemImages/pilaf.png"
  constructor(private menuService:MenuService, private route:Router, private auth:AuthService) { }

  ngOnInit(): void {
    
    
    if(JSON.stringify(this.menu)=='{}'){
      
      this.menuService.getMenu().subscribe(
        (data: any) => {
          sessionStorage.setItem('menu',JSON.stringify(data.results))
          this.menu = JSON.parse(sessionStorage.getItem('menu')!)
          console.log(data);
        },
        error => {
          console.log(error);
        }
        )
    }
    this.menu = JSON.parse(sessionStorage.getItem('menu')!)
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

  onDelete(id :number){
    const menu = this.menu.filter((plato: { id: number; }) => plato.id != id);
    sessionStorage.setItem('menu',JSON.stringify(menu))
  }

  onLogOut(){
    this.auth.logOut()
    this.route.navigate(['/'])
  }



}
