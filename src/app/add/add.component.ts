import { Output, EventEmitter, Component, OnDestroy, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Bug } from "../@shared/models/bug";
import { BugService } from "../@shared/services/bug.service";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit{

  @Output() newItemEvent = new EventEmitter<Partial<Bug>>();

  addBugForm : FormGroup;

  constructor( 
    private formBuilder: FormBuilder,
    private bugService: BugService
    
    ) {
    this.createForm();
   }

  ngOnInit(): void {
  }


  create() {
    const title = this.addBugForm.get("titre").value;
    const description = this.addBugForm.get("description").value;
    this.addNewItem({title : title, description: description});
  }

  private createForm(){
    this.addBugForm = this.formBuilder.group({
      titre: ['', [Validators.required, Validators.minLength(3)]],
      description: ['']
    });
  }

  addNewItem(value: Partial<Bug>) {
    this.bugService.addItem(value);
  }

}

