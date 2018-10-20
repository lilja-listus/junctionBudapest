Locations are given as sub-objects with the following form: 

{
    "city" : "<city code>",
    "country" : "<country code>",
    "latitude" : "<latitude as float>",
    "longitude" : "<longitude as float>"
}

City and country codes follow the UN standard:
https://www.unece.org/cefact/locode/service/location.htmlhttps://www.unece.org/cefact/locode/service/location.html

You will need to click on each country name to get a list of cities and their
codes. I will be setting up a database mapping the codes that we are using
(both for cities and countries) to human-readable names, which will aid in
future localization. It will also be a good use for an SQL database hosted
through Google Cloud Services. 

Codes should be considered case-insensitive, but I'll be using capital letters
for them, since that appears to be the norm. Endpoint URLs for fetching city 
names given codes are forthcoming (it might be okay to just display the codes
in the search results, since there will be limited space in each row, but it
would be nice to see at least the city name in human-readable format). 


I haven't added latitudes and longitudes to the dataset yet, but plan on doing
so at some point. 



 - GCP Database

Database name is "junction_budapest_2018", instance is
"junction-budapest-2018". If you need the password, I (kechpaja) can give it to 
you through a more secure channel, but I'd rather not have it checked into
source control. 
