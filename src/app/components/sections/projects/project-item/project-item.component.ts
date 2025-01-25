import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ProjectInterface } from '../../../../models/project.model';
import { SafeHtmlPipe } from '../../../../pipes/safe-html.pipe';
import { IconLinkComponent } from '../../../shared/icon-link/icon-link.component';

@Component({
  selector: 'app-project-item',
  standalone: true,
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss',
  imports: [SafeHtmlPipe, IconLinkComponent],
  encapsulation: ViewEncapsulation.None,
})
export class ProjectItemComponent {
  @Input() project!: ProjectInterface;
  @Input() index!: number;
}
