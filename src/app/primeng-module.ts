import { NgModule } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { GalleriaModule } from 'primeng/galleria';
import { SidebarModule } from 'primeng/sidebar';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { TableModule } from 'primeng/table';
import { TabMenuModule } from 'primeng/tabmenu';
import { GMapModule } from 'primeng/gmap';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { AvatarModule } from 'primeng/avatar';
import { ScrollTopModule } from 'primeng/scrolltop';
import { EditorModule } from 'primeng/editor';
import { CalendarModule } from 'primeng/calendar';
import { MegaMenuModule } from 'primeng/megamenu';
import {CarouselModule} from 'primeng/carousel';
import {DataViewModule} from 'primeng/dataview';
import {RatingModule} from 'primeng/rating';
import {RippleModule} from 'primeng/ripple';

@NgModule({
  exports: [
    DropdownModule,
    MenubarModule,
    ButtonModule,
    GalleriaModule,
    SidebarModule,
    CardModule,
    AccordionModule,
    TableModule,
    TabMenuModule,
    GMapModule,
    InputMaskModule,
    InputTextareaModule,
    ToastModule,
    MessagesModule,
    MessageModule,
    ConfirmDialogModule,
    InputTextModule,
    ToolbarModule,
    RadioButtonModule,
    ProgressSpinnerModule,
    AvatarModule,
    ScrollTopModule,
    EditorModule,
    CalendarModule,
    MegaMenuModule,
    CarouselModule,
    DataViewModule,
    RatingModule,
    RippleModule
  ],
})
export class PrimengModule {}
