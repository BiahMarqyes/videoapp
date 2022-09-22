import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DeRepenteTrintaPage } from './de-repente-trinta.page';

describe('DeRepenteTrintaPage', () => {
  let component: DeRepenteTrintaPage;
  let fixture: ComponentFixture<DeRepenteTrintaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeRepenteTrintaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DeRepenteTrintaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
