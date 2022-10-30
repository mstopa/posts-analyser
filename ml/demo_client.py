import requests

# text = "What a crowd 🔥🔥🔥 Thank you Buenos Aires and everyone watching in cinemas around the world. More screenings on Saturday"
text = "I believe it could have been done better."

resp = requests.post("http://localhost:5000/classify",
                     data={"text": text})

print(resp.text)