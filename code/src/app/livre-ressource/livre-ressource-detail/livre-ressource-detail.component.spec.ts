import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivreRessourceDetailComponent } from './livre-ressource-detail.component';

describe('LivreRessourceDetailComponent', () => {
  let component: LivreRessourceDetailComponent;
  let fixture: ComponentFixture<LivreRessourceDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivreRessourceDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivreRessourceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
