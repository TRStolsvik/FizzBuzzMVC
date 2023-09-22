namespace FizzBuzzMVC.Models
{
    public class FizzBuzzModel
    {
        public string FizzValue { get; set; }
        public string BuzzValue { get; set; }
        public List<string> FBOutput { get; set; } = new();
    }
}
