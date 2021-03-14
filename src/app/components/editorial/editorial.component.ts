import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../library.service';
import { Editorial } from '../../dto/editorial';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {
  public editorials: Editorial[];
  title:String = 'EDITORIALES';
  constructor(private libraryService: LibraryService) { }

  ngOnInit(): void {
      this.libraryService.getEditorials().subscribe(
        (response) => {
          console.log(response)
          this.editorials = response;
        }
      );
  }

}
