import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-commands',
  templateUrl: './show-commands.component.html',
  styleUrls: ['./show-commands.component.css']
})
export class ShowCommandsComponent implements OnInit {

  constructor(private service:SharedService) { }

  CommandList:any=[];

  ModalTitle:string="";
  ActivateAddEditCommandComp:boolean=false;
  command:any;

  CommandIdFilter:string="";
  CommandNameFilter:string="";
  CommandListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCommandList();
  }

  addClick() {
    this.command={
      id:0,
      CommandText:""
    }
    this.ModalTitle="Add Command";
    this.ActivateAddEditCommandComp=true;
  }

  editClick(item:any){
    this.command=item;
    this.ModalTitle="Edit Command";
    this.ActivateAddEditCommandComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      console.log('delete click '+item.id);
      var test = {id:6}
      this.service.deleteCommand(item.id).subscribe(data=>{
        alert(data.toString());
        this.refreshCommandList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCommandComp=false;
    this.refreshCommandList();
  }


  refreshCommandList(){
    this.service.getCommandList().subscribe(data=>{
      this.CommandList=data;
      this.CommandListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CommandIdFilter = this.CommandIdFilter;
    var CommandNameFilter = this.CommandNameFilter;

    this.CommandList = this.CommandListWithoutFilter.filter(function (el:any){
        return el.CommandId.toString().toLowerCase().includes(
          CommandIdFilter.toString().trim().toLowerCase()
        )&&
        el.CommandText.toString().toLowerCase().includes(
          CommandNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.CommandList = this.CommandListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}

