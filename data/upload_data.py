#! /usr/bin/python

from algoliasearch import algoliasearch
from sys import argv

import json

if len(argv) != 3:
    print("Usage: ./upload_data.py <app ID> <root API key> <index name> <records JSON>")
    exit(1)

client = algoliasearch.Client(argv[1], argv[2])
index = client.init_index(argv[3])

with open(argv[4], "r") as f:
    index.addObjects(json.load(f))

client.set_settings({
    "searchableAttributes" : ["name", "start_date", "end_date", "location"],
    "allowTyposOnNumericTokens" : False
})
