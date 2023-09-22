namespace FizzBuzzMVC.Models
{
    public class FizzBuzzModel
    {
        public int FizzValue { get; set; } = 3;
        public int BuzzValue { get; set; } = 5;
        public List<string> FBOutput { get; set; } = new();
    }
}
