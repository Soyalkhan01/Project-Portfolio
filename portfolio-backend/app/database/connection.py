import os
from dotenv import load_dotenv
from pymongo import MongoClient

load_dotenv()

MONGO_URI = os.getenv("MONGODB_URI")

client = MongoClient(MONGO_URI)

db = client["portfolio_db"]

contacts_collection = db["contacts"]

try:
    client.admin.command("ping")
    print("Mongodb connect Succesfully")
    
except Exception as e:
    print("mongodb Conection:",e)