using System;


class ProductDetails
{
    ProductDetails() 
    {
        Console.WriteLine("------------------Product Details---------------------");
    }
   public ProductDetails(string Product_name, int Product_id,string Description,long price,DateTime ManufactureDate, string category)
    {
        this.ProductName = Product_name;
        this.Product_id = Product_id;
        this.Description = Description;
        this.Price = price;
        this.ManufactureDate = ManufactureDate;
        this.category = category;


    }
     public string ProductName { get; set; }
     public int Product_id { get; set; }
     public string Description { get; set; }   
     public long Price { get; set; }
     public DateTime ManufactureDate { get; set; }
     public string category { get; set; }
     

    public override string ToString()
    {
        return string.Format($"|----------------------------------------------|\n"+
                             $"| Product ID        |{Product_id,28}|\n"+
                             $"| Product Name:     |{ProductName,28}|\n" +
                             $"| Descrption:       |{Description,28}|\n" +
                             $"| mode of Learning: |{Price,28}|\n"+
                             $"| Manufacture Date: |{ManufactureDate,2877}|\n"+
                             $"| Category:         |{category,28}|\n")+
                             $"|----------------------------------------------|\n";                
      }
    }

    public class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Enter the number of the product");
            int NumberOfProduct=int.Parse(Console.ReadLine());
            while (NumberOfProduct-- > 0)
            {
                Console.WriteLine("Enter the Product as Product_name,Product_id,Description,price,ManufactureDate, category");
                string productStrArr = Console.ReadLine();
                string[] productsDeta = productStrArr.Split(",");
                ProductDetails product;
                product = new ProductDetails(productsDeta[0], Int32.Parse(productsDeta[1]), productsDeta[2],long.Parse(productsDeta[3]), 
                DateTime.Parse(productsDeta[4] ), productsDeta[5]);
                Console.WriteLine(product.ToString());


            }

        }

}




