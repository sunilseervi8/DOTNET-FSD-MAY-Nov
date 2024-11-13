using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace LMS_Course_Service.Model
{
    public class Course
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string? CourseName { get; set; }
        public int? duration { get; set; }
        public int? price { get; set; }
        public DateTime date { get; set; }
        public string? url { get; set; }
    }
}
