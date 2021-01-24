/* --- STATE --- */

export interface ICartResponse {
  subTotal: number;
  _id: string;
  userId: string;
  items: {
    _id: string;
    bookID: number;
    price: number;
    quantity: number;
    total: number;
    Image: string;
    title: string;
    authors: string;
    createdAt: string;
    updatedAt: string;
  }[];
}

export interface IAddCartRequest {
  bookId: number;
}

export interface ICartItem {
  bookID: number;
  price: number;
  quantity: number;
  total: number;
  Image: string;
  title: string;
  authors: string;
}

export interface ICartInfo {
  subTotal: number;
  userId: string;
  items: ICartItem[];
}

export interface CartState {
  cartInfo?: ICartInfo;
  loading: boolean;
  error: any;
}
export type ContainerState = CartState;
