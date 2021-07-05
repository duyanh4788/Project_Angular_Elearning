import { ChangeDetectorRef, Component } from '@angular/core';
import { LoadingService } from '@service/loading/loading.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'elearning';
  constructor(public loadingService: LoadingService, private changeDetectorRef: ChangeDetectorRef) { }

  public loading: Boolean = false // define html
  private subscription = new Subscription()

  ngOnInit(): void {
  }

  // get data boolean => service/loading/loading.service
  ngAfterViewInit() {
    this.subscription.add(this.loadingService.loadingService.subscribe(data => {
      this.loading = data
      this.changeDetectorRef.detectChanges() // khai báo angular sự thay đổi
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }


}
