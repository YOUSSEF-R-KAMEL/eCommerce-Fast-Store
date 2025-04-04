import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { OrderService } from './services/order.service';
import { ErrorComponent } from '../../shared/error/error.component';
import { InputComponent } from '../../shared/input/input.component';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [ReactiveFormsModule, RouterModule, InputComponent, ErrorComponent, TranslateModule],
templateUrl: './order.component.html',
  styleUrl: './order.component.scss'
})
export class OrderComponent {
  orderForm! : FormGroup;
  cartId: string | null = null
  fb = inject(FormBuilder)
  private readonly _orderService = inject(OrderService)
  private readonly _activatedRoute = inject(ActivatedRoute)

  constructor() {
    this.orderForm = this.fb.group({
      details: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern(/^01[0-2,5]{1}[0-9]{8}$/)]],
      city: ['', Validators.required]
    });
    this.cartId = this._activatedRoute.snapshot.paramMap.get('id')
  }

  onSubmit() {
    if (this.orderForm.valid) {
      this._orderService.order(this.orderForm.value, this.cartId!).subscribe({
        next: (res:any) => {
          window.open(res.session.url, '_self')
        }
      })
    }
    else {
      this.orderForm.markAllAsTouched()
    }
  }
}
