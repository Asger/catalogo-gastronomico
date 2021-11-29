import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { IBlog } from 'src/app/shared/models/blog.interface';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-tabla-blogs',
  templateUrl: './tabla-blogs.component.html',
  styleUrls: ['./tabla-blogs.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class TablaBlogsComponent implements OnInit {
  productDialog!: boolean;
  cargado!: boolean;
  blogs!: IBlog[];

  constructor(
    private blogSvc: BlogService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
    this.blogSvc.getTodosBlogs().subscribe((res) => {
      this.blogs = res;
      this.cargado = true;
    });
  }

  /* 
    Este método me permitira eliminar un blog en específico, llamando al servicio y mandando el blog, el cual
    brindara su id para eliminarlo. 
  */
  deleteBlog(blog: IBlog) {
    this.confirmationService.confirm({
      message:
        'Estas seguro que quieres eliminar el blog llamado: ' +
        blog.titulo +
        '?',
      header: 'Confirmar',
      icon: 'pi pi-exclamation-triangle text-pink-500',
      accept: () => {
        this.blogSvc
          .eliminarBlogById(blog)
          .then(() => {
            this.messageService.add({
              severity: 'success',
              summary: 'Eliminado',
              detail: 'El blog fue eliminado con éxito',
              life: 3500,
            });
          })
          .catch((error) => {
            console.log(error);
          });
      },
    });
  }
}
