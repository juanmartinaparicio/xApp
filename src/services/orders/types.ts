export interface cartProduct {
  id: string;
  quantity: number;
}

export interface Cart {
  products: cartProduct[];
}

export interface Detail {
  id: string;
  description: string;
  quantity: string;
  subTotal: string;
  createdAt: string;
}

export interface Order {
  id: string;
  code: string;
  status: string;
  isExpired: boolean;
  isDelivered: boolean;
  createAt: string;
  updateAt: string;
  detail: Detail[];
}
