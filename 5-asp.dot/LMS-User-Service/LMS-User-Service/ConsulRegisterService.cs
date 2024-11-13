
//using Consul;

//namespace LMS_User_Service
//{
//    public class ConsulRegisterService : IHostedService
//    {
//        private readonly IConsulClient _consulClient;
//        private readonly IConfiguration _configuration;
//        private string _serviceID = string.Empty;

//      public   ConsulRegisterService(IConsulClient consulClient, IConfiguration configuration)
//        {
//            _consulClient = consulClient;
//            _configuration = configuration;
//        }

//        public async Task StartAsync(CancellationToken cancellationToken)
//        {
//            var serviceName = _configuration.GetValue<string>(key: "ServiceConfiguration:ServiceName");
//            var host = _configuration.GetValue<string>(key: "ServiceConfiguration:Host");
//            var port = _configuration.GetValue<int>(key: "ServiceConfiguration:Port");
//            var tagList = new string[]
//            {
//                serviceName
//            };
//            _serviceID = $"{serviceName}---{Guid.NewGuid}";
//                var register = new AgentServiceRegistration()
//                { 
//                    ID=_serviceID,
//                    Name=serviceName,
//                    Port=port,
//                    Address=host,
//                    Tags=tagList
//                };

//            await _consulClient.Agent.ServiceRegister(register, cancellationToken);

//;
//        }


//        public async Task StopAsync(CancellationToken cancellationToken)
//        {
//            await _consulClient.Agent.ServiceDeregister(_serviceID, cancellationToken);
//        }
//    }
////}
