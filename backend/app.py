#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
import os
os.environ["OPENAI_API_KEY"] = "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"
import openai
from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_restful import Api

app = Flask(__name__)
CORS(app)
api = Api(app)

@app.route('/api', methods=['POST'])

def api():
    user_data = request.form.get('user_data')
    data = '1 Jacket, 2 Pants, 3 Sweaters, 4 Shorts, 5 Hoodies, 6 Suit, 7 T-Shirts: ' + user_data #request.get_json()["prompt"]
    prompt = "Given the following clothing items and their respective number, return the numbers of the clothing items that best fit the given characteristics: " + data 
    #response = prompt
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",
        messages=[
            {"role": "system", "content": prompt},
        ]
    )
    print(response["choices"])
    return jsonify({"response": response["choices"][0]["message"]["content"]})