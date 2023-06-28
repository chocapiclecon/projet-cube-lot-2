import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreRessourceAddComponent } from './livre-ressource-add.component';

describe('LivreRessourceAddComponent', () => {
  let component: LivreRessourceAddComponent;
  let fixture: ComponentFixture<LivreRessourceAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreRessourceAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreRessourceAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
