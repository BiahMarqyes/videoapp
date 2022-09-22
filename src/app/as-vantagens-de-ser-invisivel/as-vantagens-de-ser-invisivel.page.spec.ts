import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsVantagensDeSerInvisivelPage } from './as-vantagens-de-ser-invisivel.page';

describe('AsVantagensDeSerInvisivelPage', () => {
  let component: AsVantagensDeSerInvisivelPage;
  let fixture: ComponentFixture<AsVantagensDeSerInvisivelPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AsVantagensDeSerInvisivelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsVantagensDeSerInvisivelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
