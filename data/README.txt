Locations are given as sub-objects with the following form: 

{
    "city" : {
        "eng" : "<city name in English>",
        "fin" : "<city name in Finnish>",
        ...
    },
    "country" : {
        "eng" : "<country name in English>",
        "fin" : "<country name in Finnish>",
        ...
    },
    "latitude" : "<latitude as float>",
    "longitude" : "<longitude as float>"
}

[City and country codes are gone. Names are right there in the dataset.]

I haven't added latitudes and longitudes to the dataset yet, but plan on doing
so at some point. 


File of synonyms exists so that searches will still find cities by name. 


 - GCP Database

[We probably won't use this, but it's there if necessary.]

Database name is "junction_budapest_2018", instance is
"junction-budapest-2018". If you need the password, I (kechpaja) can give it to 
you through a more secure channel, but I'd rather not have it checked into
source control. 
