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

    public override string ToString()
    {
      return string.Format($"{Name,-10}|{AuthorName,-10}|{Genre,-10}|{NoOfChapters,-10}|{NoOfLikes,-10}|{NoOfReads,-10}");
      //return string.Format($"Name: {Name}\nAuthor: {AuthorName}\nGenre: {Genre}");
        
    }
  

    public static void Main(string[] args)
    {
      //Program p1=new Program();
        List<Program> list = new List<Program>();
      Console.WriteLine("Enter the number of Stories: ");
      int noOfStories=Convert.ToInt32(Console.ReadLine());
      Console.WriteLine("Enter the details of the Stories: Name,AuthorName,Genre,NoOfChapters,NoOfLikes,NoOfReads");
      for(int i=0;i<noOfStories;i++){
          string StoryDetails=Console.ReadLine();
          string[] details=StoryDetails.Split(',');
          list.Add(new Program(details[0],details[1],details[2],Convert.ToInt32(details[3]),
            Convert.ToInt32(details[4]),Convert.ToInt32(details[5]))); 
        
      }

      Console.WriteLine("**********************");


      
      StoryBO storyBO=new StoryBO();
      
      Console.WriteLine("Enter a Search Type:\n 1.AuthorName\n 2.NoOfLikes");  
      int choice=Convert.ToInt32(Console.ReadLine());

      
      
      switch(choice){
        case 1:Console.WriteLine("Enter the Author Name:");
          string authorName=Console.ReadLine();
          List<Program> authorList=new List<Program>();
          authorList=storyBO.findStory(list,authorName);
          if(authorList==null){
            Console.WriteLine("No such Story is Present");
          }
          else{
            
            foreach(Program p in authorList){
              Console.WriteLine(p);
            }
          }
          break;
          
        case 2:Console.WriteLine("Enter the NoOfLikes:");
          int noOfLikes=Convert.ToInt32(Console.ReadLine());
          List<Program> noOfLikesList=new List<Program>();
          noOfLikesList=storyBO.findStory(list,noOfLikes);
          if(noOfLikesList==null){
            Console.WriteLine("No such Story is Present");
          }
          else{
            foreach(Program p in noOfLikesList){
              Console.WriteLine(p);
            }
          }
          break;
        default:Console.WriteLine("Invalid Choice");
          break;
      }

    }

  class StoryBO{
    
    public List<Program> findStory(List<Program> storyList,String authorName){
      var NamewiseList= storyList.FindAll(ele=>ele.AuthorName.Equals(authorName)).ToList();
      if(NamewiseList.Count==0){
        return null;
      }
      else{
        return NamewiseList;
      }
    }

    public List<Program> findStory(List<Program> storyList,int noOfLikes){
      var LikesList= storyList.FindAll(ele=>ele.NoOfLikes > noOfLikes).ToList();
      if(LikesList.Count==0){
        return null;
      }
      else{
        return LikesList;
      }
    }
    
  }
}

