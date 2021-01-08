using CoffeeShop.Repositories;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CoffeeShop.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoffeeController : ControllerBase
    {
        private readonly ICoffeeRepository _coffeeRepository;
        private readonly IBeanVarietyRepository _beanVarietyRepository;
        public CoffeeController(IBeanVarietyRepository beanVarietyRepository, ICoffeeRepository coffeeRepository)
        {
            _beanVarietyRepository = beanVarietyRepository;
            _coffeeRepository = coffeeRepository;
        }
        // https://localhost:5001/api/coffee/
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_coffeeRepository.GetAll());
        }

        // GET api/<CoffeeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<CoffeeController>
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/<CoffeeController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<CoffeeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
