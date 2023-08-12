import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-new-book',
  templateUrl: './add-new-book.component.html',
  styleUrls: ['./add-new-book.component.css'],
})
export class AddNewBookComponent {
  addNewBookForm!: FormGroup;

  ngOnInit(): void {
    this.submitAddNewBook();
  }

  submitAddNewBook() {
    this.addNewBookForm = new FormGroup({
      title: new FormControl(null, [Validators.required, Validators.email]),
      author: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      description: new FormControl(null, [Validators.required]),
    });
    console.log('Add New Book : ', this.addNewBookForm);
  }
}
