import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonRessourceDetailComponent } from './son-ressource-detail.component';

describe('SonRessourceDetailComponent', () => {
  let component: SonRessourceDetailComponent;
  let fixture: ComponentFixture<SonRessourceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonRessourceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonRessourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
