import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSuccessDialogComponent } from './email-success-dialog.component';

describe('EmailSuccessDialogComponent', () => {
  let component: EmailSuccessDialogComponent;
  let fixture: ComponentFixture<EmailSuccessDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailSuccessDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmailSuccessDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
