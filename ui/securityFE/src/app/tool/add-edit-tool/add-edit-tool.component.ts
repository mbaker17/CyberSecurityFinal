import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-tool',
  templateUrl: './add-edit-tool.component.html',
  styleUrls: ['./add-edit-tool.component.css']
})
export class AddEditToolComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() tool: any;
  ToolId: any;
  ToolName: any;
  Category: any;
  ToolNote: any;
  ToolLink: any;

  CategoryList: any = [];

  ngOnInit(): void {
    this.loadCategoryList();
  }

  loadCategoryList() {
    this.service.getAllCategoryNames().subscribe((data: any) => {
      this.CategoryList = data;

      this.ToolId = this.tool.ToolId;
      this.ToolName = this.tool.ToolName;
      this.Category = this.tool.Category;
      this.ToolNote = this.tool.ToolNote;
      this.ToolLink = this.tool.ToolLink;
    });
  }

  addTool() {
    var val = {
      ToolId: this.ToolId,
      ToolName: this.ToolName,
      Category: this.Category,
      ToolNotes: this.ToolNote,
      ToolLink: this.ToolLink
    };

    this.service.addTool(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateTool() {
    var val = {
      ToolId: this.ToolId,
      ToolName: this.ToolName,
      Category: this.Category,
      ToolNotes: this.ToolNote,
      ToolLink: this.ToolLink
    };

    this.service.updateTool(val).subscribe(res => {
      alert(res.toString());
    });
  }


  // uploadPhoto(event){
  //   var file=event.target.files[0];
  //   const formData:FormData=new FormData();
  //   formData.append('uploadedFile',file,file.name);

  //   this.service.UploadPhoto(formData).subscribe((data:any)=>{
  //     this.PhotoFileName=data.toString();
  //     this.PhotoFilePath=this.service.PhotoUrl+this.PhotoFileName;
  //   })
  // }

}
