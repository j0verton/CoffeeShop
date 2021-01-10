using CoffeeShop.Models;
using System.Collections.Generic;

namespace CoffeeShop.Repositories
{
    public interface IBeanVarietyRepository
    {
        BeanVariety Add(BeanVariety variety);
        void Delete(int id);
        BeanVariety Get(int id);
        List<BeanVariety> GetAll();
        void Update(BeanVariety variety);
    }
}