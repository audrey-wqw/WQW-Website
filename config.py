from dotenv import load_dotenv
import os

load_dotenv(".env")
consumer_key = os.environ.get("CONSUMER_KEY")
consumer_secret = os.environ.get("CONSUMER_SECRET")
email = os.environ.get("EMAIL")
password = os.environ.get("PASSWORD")