exports.buildPath =
function buildPath(route)
{
    if (process.env.NODE_ENV === 'production')
    {
    return 'https://large-project-15-5b32b151f581.herokuapp.com/' + route;  //RE PLACE WITH ACUTAL ROUTE
    }
    else
    {
    return 'http://localhost:5000/' + route;
    }
}
