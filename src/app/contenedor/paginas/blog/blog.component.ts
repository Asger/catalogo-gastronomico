import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IBlog } from 'src/app/shared/models/blog.interface';
import { BlogService } from '../../componentes-dinamicos/blog-carp/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public blogs$!: Observable<IBlog[]>;
  constructor(private blogSvc: BlogService) {}

  ngOnInit(): void {
    this.blogs$ = this.blogSvc.getTodosBlogs();
  }

  mostrarFecha(){
    
  }
}
