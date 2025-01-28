from flask import Flask, jsonify
from calculate_positions import calculate_positions
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable Cross-Origin Resource Sharing (CORS) to allow frontend to access the API


@app.route("/satellites", methods=["GET"])
def get_satellites():
    try:
        positions = calculate_positions() 
        return jsonify(positions)  
    except Exception as e:
        app.logger.error(f"Error calculating positions: {e}")
        return jsonify({"error": "Internal server error"}), 500  

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5001)  # Run the Flask app on port 5000
