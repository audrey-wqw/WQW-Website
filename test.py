import requests
import json
import config

# Getting access token to authorize myself to the APIs
url = "https://login.salesforce.com/services/oauth2/token"
params = {
    "grant_type": "password",
    "client_id": config.consumer_key,
    "client_secret": config.consumer_secret,
    "password": config.password,
    "username": config.email
}
response = requests.post(url, params=params)
print(response.content)
access_token = response.json()['access_token']
headers = {'Authorization': f"Bearer {access_token}"}

instance_domain = "https://AP24.salesforce.com/services/data"

def get_services():
    # Request list of services and write to JSON file
    response = requests.get(instance_domain, headers=headers)
    with open('services.json', 'w') as json_file:
        json.dump(response.json(), json_file)

def get_resources():
    # Request list of resources and write to JSON file
    response = requests.get(f"{instance_domain}/v52.0/", headers=headers)
    with open('resources.json', 'w') as json_file:
        json.dump(response.json(), json_file)

def get_objects():
    # Getting list of objects
    response = requests.get(f"{instance_domain}/v52.0/sobjects", headers=headers)
    with open('objects.json', 'w') as json_file:
        json.dump(response.json(), json_file)

# Getting metadata of object (Field, URL, Child Relationship)
def get_object_details(object_name):
    response = requests.get(f"{instance_domain}/v52.0/sobjects/{object_name}/describe", headers=headers)
    with open(f"objects/{object_name}.json", 'w') as json_file:
        json.dump(response.json(), json_file)

# get_object_details("Players__c")

# Create a record in an object: POST
def create_object_record(object_name, data={}):
    headers['Content-type'] = 'application/json'
    response = requests.post(f"{instance_domain}/v52.0/sobjects/{object_name}/", headers=headers, json=data)
    print(response.json())

# Executing query data from Salesforce: GET
def query_object_record(query):
    params = {"q": query}
    response = requests.get(f"{instance_domain}/v52.0/query", params=params, headers=headers)
    with open("objects/Metadata/Account.json", 'w') as json_file:
        json.dump(response.json(), json_file)
    return response.json()

# Update data in object Salesforce: PATCH
def update_object_record(object_name, object_id, data={}):
    headers['Content-Type'] = 'application/json'
    response = requests.patch(f"{instance_domain}/v52.0/sobjects/{object_name}/{object_id}", headers=headers, json=data)
    print(response.content)

def delete_object_record(object_name, object_id):
    response = requests.delete(f"{instance_domain}/v52.0/sobjects/{object_name}/{object_id}", headers=headers)
    print(response.content)

userId = query_object_record("select name, id from User where id='0055g00000BP3AQAA1'")

print(query_object_record('select LastModifiedById, CreatedById, OwnerId, Name, Email__c from Warriors__c'))

data = {
    'OwnerId': '0055g00000BP3AQAA1',
    'Name': 'Nam Dao Vip Pro 2',
    'Email__c': 'nhd36@drexel.edu 2'
}

create_object_record('Warriors__c', data)
print(query_object_record('select LastModifiedById, CreatedById, OwnerId, Name, Email__c from Warriors__c'))
# update_object_record('Warriors__c', 'a035g000001X2kYAAS', data)
# delete_object_record('Warriors__c', 'a035g000001X2kYAAS')
# print(query_object_record('select LastModifiedById, CreatedById, OwnerId, Name, Email__c from Warriors__c'))
