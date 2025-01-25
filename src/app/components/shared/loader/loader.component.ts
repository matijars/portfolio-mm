import { Component, ViewEncapsulation } from '@angular/core';
import { SafeHtmlPipe } from '../../../pipes/safe-html.pipe';
import { LOADER } from '../../../../assets/svg/svg-icons';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [SafeHtmlPipe],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoaderComponent {
  loader = LOADER;
}
