using System;
using System.Collections.Generic;

namespace workingwithcollections
{
    public class Program : IComparable
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
            return string.Format($"{Name,-15}|{AuthorName,-15}|{Genre,-10}|{NoOfChapters,-10}|{NoOfLikes,-10}|{NoOfReads,-10}");
        }

        public int CompareTo(object obj)
        {
            if (obj is Program other)
            {
                return this.Name.CompareTo(other.Name);
            }
            throw new ArgumentException("Object is not a Program");
        }

        public static Program CreateStory(string line)
        {
            string[] parts = line.Split(',');
            return new Program(parts[0], parts[1], parts[2], int.Parse(parts[3]), int.Parse(parts[4]), int.Parse(parts[5]));
        }

        public static void Main(string[] args)
        {
            Console.WriteLine("Enter the number of Stories: ");
            int noOfStories = Convert.ToInt32(Console.ReadLine());
            Program[] list = new Program[noOfStories];
            Console.WriteLine("Enter the details of the Stories: Name,AuthorName,Genre,NoOfChapters,NoOfLikes,NoOfReads");

            for (int i = 0; i < noOfStories; i++)
            {
                string storyDetails = Console.ReadLine();
                list[i] = CreateStory(storyDetails);
            }

            Console.WriteLine("**********************");
           
           
            Console.WriteLine("Enter a Sort Type:\n 1.Name\n 2.NoOfReads");
            int choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    Array.Sort(list);
                    break;

                case 2:
                    NoOfReadsComparator noOfReadsComparator = new NoOfReadsComparator();
                    Array.Sort(list, noOfReadsComparator);
                    break;

                default:
                    Console.WriteLine("Invalid Choice");
                    break;
            }

            foreach (Program story in list)
            {
                Console.WriteLine(story);
            }
        }

        class NoOfReadsComparator : IComparer<Program>
        {
            public int Compare(Program x, Program y)
            {
                return x.NoOfReads.CompareTo(y.NoOfReads);
            }
        }
    }
}