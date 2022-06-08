
export
interface Order {
  price: number;
  volume: number;
}

export
interface OrderBook {
  ask: Order[],
  bid: Order[],
}
