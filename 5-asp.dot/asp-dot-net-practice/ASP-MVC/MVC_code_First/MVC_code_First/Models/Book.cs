using System.ComponentModel.DataAnnotations;

namespace MVC_code_First.Models
{
    public class Book
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        public string Description { get; set; }
        public string Author { get; set; }
        public string publication { get; set; }
    }
}
