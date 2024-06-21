export interface Product {
    ProductId?: number; 
    CategoryId: number;
    CanSeeRole: number;
    stock: number;
    DepartmentId: number;
    DiscountPercentage: number;
    DisplayPriority: number;
    ImageWidth: string;
    ImageHeight: string;
    IsActive: number;
    ModelName: string;
    SellerDetail: number;
    SubCategoryId: number;
    Tags: string;
    WarrantyInDays: number;
    alternate_name: string;
    description: string;
    dhc_category: number;
    image: string; 
    landing_rate: number;
    max_quantity: number;
    min_quantity: number;
    name: string;
    newprice: number;
    newstock: number;
    price: number;
    product_code: string;
    videolink: string;
  }
  