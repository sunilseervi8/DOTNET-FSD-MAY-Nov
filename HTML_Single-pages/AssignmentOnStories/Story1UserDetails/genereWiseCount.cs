using System;
using System.Text.RegularExpressions;
using System.Collections.Generic;
using System.Linq;


class Program
{
    String name;
    String authorName;
    String genre;
    int noOfChapters;
    int noOfLikes;
    int noOfReads;

    public Program()
    {
    }

    public Program(string name, string authorName, string genre, int noOfChapters, int noOfLikes, int noOfReads)
    {
        this.Name = name;
        this.AuthorName = authorName;
        this.Genre = genre;
        this.NoOfChapters = noOfChapters;
        this.NoOfLikes = noOfLikes;
        this.NoOfReads = noOfReads;
    }

    public string Name { get => name; set => name = value; }
    public string AuthorName { get => authorName; set => authorName = value; }
    public string Genre { get => genre; set => genre = value; }
    public int NoOfChapters { get => noOfChapters; set => noOfChapters = value; }
    public int NoOfLikes { get => noOfLikes; set => noOfLikes = value; }
    public int NoOfReads { get => noOfReads; set => noOfReads = value; }

    // }
  public static Dictionary<String,int> genreWiseCount(List<Program> libraray){
      
    var res = libraray.GroupBy(g => g.Genre)
        .Select(g => new
        {
            genre = g.Key,
            genreCount = g.Count()
        })
        .ToDictionary(x => x.genre, x => x.genreCount);
      return res;
  }

    public static void Main(string[] args)
    {
        Program p1 = new Program();
        //creating a list of stories
        List<Program> library = new List<Program>();
        Console.WriteLine("Enter the no of Stories");
        int stories = Convert.ToInt32(Console.ReadLine());
        for (int i = 0; i < stories; i++)
        {
            String Authordetails = Console.ReadLine();
            string[] details = Authordetails.Split(',');
            //Adding the details of the story to the list
            library.Add(new Program(details[0], details[1],
              details[2], Convert.ToInt32(details[3]), Convert.ToInt32(details[4]), Convert.ToInt32(details[5])));
        }
      Dictionary<String,int> dict = new Dictionary<String,int>();
      //passing list as an argument into the function
      dict=genreWiseCount(library);

    
      //printing the dictionary
      foreach(var item in dict){
        Console.WriteLine($"{"Genre | Count"}\n{item}");
       
      }

    }


}
