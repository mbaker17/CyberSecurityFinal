import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-category',
  templateUrl: './show-category.component.html',
  styleUrls: ['./show-category.component.css']
})
export class ShowCategoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  CategoryList:any=[];

  ModalTitle:string="";
  ActivateAddEditCatComp:boolean=false;
  cat:any;

  CategoryIdFilter:string="";
  CategoryNameFilter:string="";
  CategoryListWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshCatList();
  }

  addClick() {
    this.cat={
      CategoryId:0,
      CategoryName:""
    }
    this.ModalTitle="Add Category";
    this.ActivateAddEditCatComp=true;
  }

  editClick(item:any){
    this.cat=item;
    this.ModalTitle="Edit Category";
    this.ActivateAddEditCatComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      console.log('delete click '+item.CategoryId);
      var test = {CategoryId:6}
      this.service.deleteCategory(item.CategoryId).subscribe(data=>{
        alert(data.toString());
        this.refreshCatList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditCatComp=false;
    this.refreshCatList();
  }


  refreshCatList(){
    this.service.getCategoryList().subscribe(data=>{
      this.CategoryList=data;
      this.CategoryListWithoutFilter=data;
    });
  }

  FilterFn(){
    var CategoryIdFilter = this.CategoryIdFilter;
    var CategoryNameFilter = this.CategoryNameFilter;

    this.CategoryList = this.CategoryListWithoutFilter.filter(function (el:any){
        return el.CategoryId.toString().toLowerCase().includes(
          CategoryIdFilter.toString().trim().toLowerCase()
        )&&
        el.CategoryName.toString().toLowerCase().includes(
          CategoryNameFilter.toString().trim().toLowerCase()
        )
    });
  }

  sortResult(prop:any,asc:any){
    this.CategoryList = this.CategoryListWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
