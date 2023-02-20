import { Component, OnInit, Input } from '@angular/core';
import { ISimpleComboSelectionChangingEventArgs } from 'igniteui-angular';
import { ToDo } from './models/ToDo';
import { ServicesTodoService } from './services/services-todo.service';
import { ToastrService } from 'ngx-toastr';
import { Login } from './models/login';
import { Response } from './models/Response'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Iris_Front';
  titleToDo  ="";
  public lData : string[] = ['All','Favorite'];
  completed: boolean = false;
  favorite: boolean = false;
  @Input()
  todoInput!: ToDo;
  public login : Login = {name : "user1", password : "password1"}
    public todoListType: string  = this.lData[0];
    constructor(public todoService: ServicesTodoService, private toasterService : ToastrService) { 
    }

    ngOnInit(): void {
      this.todoListType = this.lData[0];
      this.getToDoList();
      this.todoService.GetAuthToken("user1","password1").subscribe((data: Response) => {
        localStorage.setItem('jwt', data.token);
      });
      
    }
    
    onSubmit(){
      if(this.titleToDo !== "")
      {
        let toDoAdd : ToDo = {title:this.titleToDo, isCompleted:false, isFavorite:false, id:0};
        this.todoService.AddToDo(toDoAdd).subscribe((respose: boolean) => {
          this.getToDoList();
          this.titleToDo = ""
        });
      }
      
      
    }
  
    selectChanging(e: ISimpleComboSelectionChangingEventArgs){
      
      this.todoListType = e.newSelection;
      
      if (e.newSelection === "Favorite")
      {
        this.favorite = true;
      }
      else{
        this.favorite = false;
      }
      this.todoService.GetToDoList(this.favorite)
    }

    getToDoList()
    {
      this.todoService.GetToDoList(false);

    }

    onChange(id : any){
      this.todoService.FavoriteToDo(id).subscribe((respose: boolean) => {
        this.getToDoList();
      });
    };

    isFavorite(id: any)
    {
      this.todoService.FavoriteToDo(id).subscribe((respose: boolean) => {
        this.getToDoList();
      });
    }
    deleteTodo(id: any)
  {
    this.todoService.DeleteToDo(id).subscribe((respose: boolean) => {
      this.getToDoList();
    });
  }

  
}
