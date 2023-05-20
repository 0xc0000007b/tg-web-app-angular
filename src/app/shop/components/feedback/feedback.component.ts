import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import WebApp from '@twa-dev/sdk';
import { HeaderComponent } from '../home/header/header.component';
@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent {
  form = this.fb.group({
    city: ['', [Validators.required, Validators.minLength(2)]],
    street: ['', [Validators.required, Validators.minLength(2)]],
    organization: ['', [Validators.required]],
  });
  constructor(private fb: FormBuilder) {
    this.checkInputs();
  }
  sendCallback = () => {
    const data = {
      city: this.form.controls.city.value,
      street: this.form.controls.street.value,
      organization: this.form.controls.organization.value,
    };
    WebApp.sendData(JSON.stringify(data));
  };
  checkInputs(): void {
    const street = this.form.controls.street;
    const city = this.form.controls.city;

    if (street || city) {
      WebApp.MainButton.setParams({
        text: 'Отправить',
      });
      WebApp.MainButton.show();
      WebApp.offEvent('mainButtonClicked', this.sendCallback);
      WebApp.onEvent('mainButtonClicked', this.sendCallback);
    } else {
      WebApp.MainButton.hide();
      WebApp.offEvent('mainButtonClicked', this.sendCallback);
    }
  }
}
