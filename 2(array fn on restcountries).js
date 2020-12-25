let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all")
request.onload = function(){
    let data = JSON.parse(request.responseText);                            // Extract data from rescountries

    //2.1 (Get all the countries from Asia continent /region using Filter function)
    let asiaCountries = data.filter(val=>val.region=="Asia");
    console.log(asiaCountries,"\n");

    //2.2 (Get all the countries with population of less than 2 lacs using Filter function)
    let countriesLess2l = data.filter(val=>val.population<200000);
    console.log(countriesLess2l,"\n");

    //2.3 (Print the following details name, capital, flag using forEach function)
    data.forEach(val=>console.log(val.name,val.capital,val.flag));
  
    //2.4 (Print the total population of countries using reduce function)
    let totalPopulation = data.reduce((tot,val)=>{return tot+val.population},0);
    console.log("\n",totalPopulation,"\n");

    //2.5 (Print the country which use US Dollars as currency.)
    let countriesUsDollar = data.filter((val)=>{
        let currArr = val.currencies;
        for (let i=0;i<currArr.length;i++)
            if (currArr[i].name == "United States dollar")
             return true;
        return false;
    });
    countriesUsDollar.forEach(val=>console.log(val.name));
}  
request.send()

request.onerror = function(){
    alert("Network error has occured");
}
