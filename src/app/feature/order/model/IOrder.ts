export interface IOrder {
  shippingAddress: ShippingAddress;
}

interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}
