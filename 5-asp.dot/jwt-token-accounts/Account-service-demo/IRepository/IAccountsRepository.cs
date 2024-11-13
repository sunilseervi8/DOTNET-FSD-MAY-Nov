using Account_service_demo.Model;
using Account_service_demo.Model.DTO;

namespace Account_service_demo.IRepository
{
    public interface IAccountsRepository
    {
        Task<(int, string)> Registration(User newUser);
        Task<(int, string)> Login(LoginDTO loginDetails);
    }
}
