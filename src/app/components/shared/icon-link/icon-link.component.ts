import { Component, Input, ViewEncapsulation } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';
import { EYE_ICON, GITHUB_ICON } from '../../../../assets/svg/svg-icons';

@Component({
  selector: 'app-icon-link',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './icon-link.component.html',
  styleUrl: './icon-link.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class IconLinkComponent {
  @Input() iconName: keyof typeof this.icons = 'github';
  @Input() url: string = '';

  private icons = {
    github: GITHUB_ICON,
    eye: EYE_ICON,
  };

  get icon(): string {
    return this.icons[this.iconName] || '';
  }
}
