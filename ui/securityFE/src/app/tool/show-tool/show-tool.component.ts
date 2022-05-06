import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-tool',
  templateUrl: './show-tool.component.html',
  styleUrls: ['./show-tool.component.css']
})
export class ShowToolComponent implements OnInit {

  constructor(private service:SharedService) { }

  ToolList:any=[];

  ModalTitle:any;
  ActivateAddEditToolComp:boolean=false;
  tool:any;

  ToolIdFilter:string="";
  ToolNameFilter:string="";
  ToolListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshToolList();
  }

  addClick(){
    this.tool={
      ToolId:0,
      ToolName:"",
      Category:"",
      ToolNotes:"",
      ToolLink:""
    }
    this.ModalTitle="Add Tool";
    this.ActivateAddEditToolComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.tool=item;
    this.ModalTitle="Edit Tool";
    this.ActivateAddEditToolComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteTool(item.ToolId).subscribe(data=>{
        alert(data.toString());
        this.refreshToolList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditToolComp=false;
    this.refreshToolList();
  }


  refreshToolList(){
    this.service.getToolList().subscribe(data=>{
      this.ToolList=data;
    });
  }


  FilterFn(){
    var ToolIdFilter = this.ToolIdFilter;
    var ToolNameFilter = this.ToolNameFilter;

    this.ToolList = this.ToolListWithoutFilter.filter(function (el:any){
        return el.ToolId.toString().toLowerCase().includes(
          ToolIdFilter.toString().trim().toLowerCase()
        )&&
        el.ToolName.toString().toLowerCase().includes(
          ToolNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.ToolList = this.ToolListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
