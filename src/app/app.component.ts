import {
    Component,
    ViewChild,
    ViewEncapsulation,
    OnDestroy
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavComponent } from './layout/nav/nav.component';
import { BuilderService } from './services/builder-service';
import { StartUpService } from './services/startup.service';

@Component({
    selector: 'sf-app',
    templateUrl: './app.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./app.component.scss'],
    providers: [BuilderService]
})
export class AppComponent implements OnDestroy {
    @ViewChild('nav', { static: false }) navRef: NavComponent;

    subject: Subscription;
    constructor(
        private router: Router,
        private titleService: Title,
        private startUpService: StartUpService,
        private builderService: BuilderService
    ) {
        this.subject = builderService.builderChanged.subscribe(value => {
            this.navRef._builder_type = value || 'zorro';
        });
        this.startUpService.initData().then(() => {
            this.startUpService.mockChanged.next('mock chaged');
        });
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                // 当导航成功结束时执行
                let title = event.url.substr(1);
                this.titleService.setTitle(`${title} builder`);
                this.builderService.builderChanged.next(title);
                this.startUpService.mockChanged.next('route mock chaged');
            }
        });
    }

    ngOnDestroy() {
        this.subject.unsubscribe();
    }
}
