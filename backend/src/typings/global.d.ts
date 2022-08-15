export {};

declare global {
  interface Products {
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean;
    sold_quantity?: number;
    description?: string;
  }

  interface Author {
    name: string;
    lastname: string;
  }

  interface Items {
    author: Author;
    categories?: string[];
    items: Products[];
  }

  interface Price {
    currency: string;
    amount: number;
    decimals: number;
  }

  export type ResponseGetItems = {
    status: number;
    response: DataEntity[] | null;
  };

  export interface DataEntity {
    id: string;
    site_id: string;
    title: string;
    seller: Seller;
    price: number;
    prices: Prices;
    sale_price?: null;
    currency_id: string;
    available_quantity: number;
    sold_quantity: number;
    buying_mode: string;
    listing_type_id: string;
    stop_time: string;
    condition: string;
    permalink: string;
    thumbnail: string;
    thumbnail_id: string;
    accepts_mercadopago: boolean;
    installments: Installments;
    address: Address;
    shipping: Shipping;
    seller_address: SellerAddress;
    attributes?: AttributesEntity[] | null;
    original_price?: number | null;
    category_id: string;
    official_store_id?: number | null;
    domain_id: string;
    catalog_product_id?: string | null;
    tags?: string[] | null;
    catalog_listing?: boolean | null;
    use_thumbnail_id: boolean;
    offer_score?: null;
    offer_share?: null;
    match_score?: null;
    winner_item_id?: null;
    melicoin?: null;
    discounts?: null;
    order_backend: number;
    differential_pricing?: DifferentialPricing | null;
  }
  export interface Seller {
    id: number;
    permalink: string;
    registration_date: string;
    car_dealer: boolean;
    real_estate_agency: boolean;
    tags?: string[] | null;
    eshop?: Eshop | null;
    seller_reputation: SellerReputation;
  }
  export interface Eshop {
    seller: number;
    eshop_rubro?: null;
    eshop_id: number;
    nick_name: string;
    site_id: string;
    eshop_logo_url: string;
    eshop_status_id: number;
    eshop_experience: number;
    eshop_locations?: null[] | null;
  }
  export interface SellerReputation {
    power_seller_status: string;
    level_id: string;
    metrics: Metrics;
    transactions: Transactions;
  }
  export interface Metrics {
    cancellations: CancellationsOrClaimsOrDelayedHandlingTime;
    claims: CancellationsOrClaimsOrDelayedHandlingTime;
    delayed_handling_time: CancellationsOrClaimsOrDelayedHandlingTime;
    sales: Sales;
  }
  export interface CancellationsOrClaimsOrDelayedHandlingTime {
    period: string;
    rate: number;
    value: number;
  }
  export interface Sales {
    period: string;
    completed: number;
  }
  export interface Transactions {
    canceled: number;
    period: string;
    total: number;
    ratings: Ratings;
    completed: number;
  }
  export interface Ratings {
    negative: number;
    neutral: number;
    positive: number;
  }
  export interface Prices {
    id: string;
    prices?: PricesEntity[] | null;
    presentation: Presentation;
    payment_method_prices?: null[] | null;
    reference_prices?: ReferencePricesEntity[] | null;
    purchase_discounts?: null[] | null;
  }
  export interface PricesEntity {
    id: string;
    type: string;
    amount: number;
    regular_amount?: number | null;
    currency_id: string;
    last_updated: string;
    conditions: Conditions;
    exchange_rate_context: string;
    metadata: Metadata;
  }
  export interface Conditions {
    context_restrictions?: (string | null)[] | null;
    start_time?: string | null;
    end_time?: string | null;
    eligible: boolean;
  }
  export interface Metadata {
    campaign_id?: string | null;
    promotion_id?: string | null;
    promotion_type?: string | null;
  }
  export interface Presentation {
    display_currency: string;
  }
  export interface ReferencePricesEntity {
    id: string;
    type: string;
    conditions: Conditions1;
    amount: number;
    currency_id: string;
    exchange_rate_context: string;
    tags?: null[] | null;
    last_updated: string;
  }
  export interface Conditions1 {
    context_restrictions?: string[] | null;
    start_time?: null;
    end_time?: null;
    eligible: boolean;
  }
  export interface Installments {
    quantity: number;
    amount: number;
    rate: number;
    currency_id: string;
  }
  export interface Address {
    state_id: string;
    state_name: string;
    city_id?: string | null;
    city_name: string;
  }
  export interface Shipping {
    free_shipping: boolean;
    mode: string;
    tags?: string[] | null;
    logistic_type: string;
    store_pick_up: boolean;
  }
  export interface SellerAddress {
    id: string;
    comment: string;
    address_line: string;
    zip_code: string;
    country: Category;
    state: Category;
    city: City;
    latitude: string;
    longitude: string;
  }
  export interface Category {
    id: string;
    name: string;
  }
  export interface City {
    id?: string | null;
    name: string;
  }
  export interface AttributesEntity {
    name: string;
    value_struct?: StructOrValueStruct | null;
    values?: ValuesEntity[] | null;
    attribute_group_name: string;
    source: number;
    id: string;
    value_id?: string | null;
    value_name: string;
    attribute_group_id: string;
  }
  export interface StructOrValueStruct {
    number: number;
    unit: string;
  }
  export interface ValuesEntity {
    id?: string | null;
    name: string;
    struct?: StructOrValueStruct1 | null;
    source: number;
  }
  export interface StructOrValueStruct1 {
    number: number;
    unit: string;
  }
  export interface DifferentialPricing {
    id: number;
  }
}
