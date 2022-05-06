import { Component, OnInit, Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-category',
  templateUrl: './add-edit-category.component.html',
  styleUrls: ['./add-edit-category.component.css']
})
export class AddEditCategoryComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() cat:any;
  CategoryId:string="";
  CategoryName:string="";

  ngOnInit(): void {
    this.CategoryId=this.cat.CategoryId;
    this.CategoryName=this.cat.CategoryName;
  }

  addCategory(){
    var val = {CategoryId:this.CategoryId,
                CategoryName:this.CategoryName};
    this.service.addCategory(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateCategory(){
    var val = {CategoryId:this.CategoryId,
      CategoryName:this.CategoryName};
    this.service.updateCategory(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
