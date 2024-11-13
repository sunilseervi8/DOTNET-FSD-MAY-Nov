using MongoDB.Bson.Serialization.Attributes;
namespace EduHub_Content_Service.Models
{
    public class Course
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string Id { get; set; }

        public string CourseName { get; set; }

        public string Description { get; set; }

        public string Author { get; set; }
        public DateTime PublishedDate { get; set; }
    }
}
