import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonRessourceAddComponent } from './son-ressource-add.component';

describe('SonRessourceAddComponent', () => {
  let component: SonRessourceAddComponent;
  let fixture: ComponentFixture<SonRessourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonRessourceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonRessourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
