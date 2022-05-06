import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-command',
  templateUrl: './add-edit-command.component.html',
  styleUrls: ['./add-edit-command.component.css']
})
export class AddEditCommandComponent implements OnInit {

  constructor(private service: SharedService) { }

  @Input() command: any;
  id: string = "";
  CommandText: string = "";

  ngOnInit(): void {
    this.id = this.command.id;
    this.CommandText = this.command.CommandText;
  }

  addCommand() {
    var val = {
      id: this.id,
      CommandText: this.CommandText
    };
    this.service.addCommand(val).subscribe(res => {
      alert(res.toString());
    });
  }

  updateCommand() {
    var val = {
      id: this.id,
      CommandText: this.CommandText
    };
    this.service.updateCommand(val).subscribe(res => {
      alert(res.toString());
    });
  }

}

