import {
  Component,
  ViewEncapsulation,
  ViewChild,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BuilderService } from './services/builder-service';
import { NavComponent } from './layout/nav/nav.component';


@Component({
  selector: 'sf-app',
  templateUrl: './app.component.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ["./app.component.scss"],
  providers: [BuilderService]
})
export class AppComponent {
  @ViewChild('nav') navRef: NavComponent;
  constructor(private router: Router, private titleService: Title, private builderService: BuilderService) {
    builderService.builderChanged.subscribe(value => {
      this.navRef._builder_type = value || 'bootstrap';
    })
  }
  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) { // 当导航成功结束时执行
          let title=event.url.substr(1);
          this.titleService.setTitle(`${title} builder`);
          this.builderService.builderChanged.next(title);
        }
      });
  }
}
