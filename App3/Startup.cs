using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(App3.Startup))]
namespace App3
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
