using FizzBuzzMVC.Models;

namespace FizzBuzzMVC.Logic
{
    public static class FizzBuzzGenerator
    {
        public static List<string> GetValues(FizzBuzzModel model)
        {
            int fValue = int.Parse(model.FizzValue);
            int bValue = int.Parse(model.BuzzValue);

            List<string> fbValues = TestFizzBuzz(fValue, bValue);

            return DisplayFizzBuzz(fbValues);
        }

        public static List<string> TestFizzBuzz(int fValue, int bValue)
        {
            List<string> output = new();

            for (int i = 1; i <= 100; i++)
            {
                if (i % fValue == 0 && i % bValue == 0)
                {
                    output.Add("FizzBuzz");
                }
                else if (i % bValue == 0)
                {
                    output.Add("Buzz");
                }
                else if (i % fValue == 0)
                {
                    output.Add("Fizz");
                }
                else
                {
                    output.Add(i.ToString());
                }
            }

            return output;
        }

        public static List<string> DisplayFizzBuzz(List<string> input)
        {
            return input;
        }
    }
}
