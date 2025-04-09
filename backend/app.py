from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

from models import db
from routes import vehicle_bp

# Initialize the Flask app
app = Flask(__name__)

# Enable CORS for the entire app (allow requests from any origin)
CORS(app)

# Configure the SQLAlchemy database URI
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///vehicles.db"  # SQLite database
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = (
    False  # Disable Flask-SQLAlchemy modification tracking
)

# Initialize the database
db.init_app(app)

# Create the tables in the database
with app.app_context():
    db.create_all()

# Register the blueprint for vehicle routes
app.register_blueprint(vehicle_bp)


# Route for testing the server
@app.route("/")
def root():
    """
    Basic route to check if the server is running.
    """
    return "Welcome to the Chaouch Auto API!"


# Create a route to provide information about the API (this will now be in app.py)
@app.route("/api", methods=["GET"])
def api_info():
    """
    Provide information about the API.
    """
    api_info = {
        "version": "1.0",
        "description": "Chaouch Auto API",
        "endpoints": [
            {
                "method": "POST",
                "url": "/api/vehicles",
                "description": "Create a new vehicle",
            },
            {
                "method": "GET",
                "url": "/api/vehicles",
                "description": "Get all vehicles",
            },
            {
                "method": "GET",
                "url": "/api/vehicles/<id>",
                "description": "Get a single vehicle by ID",
            },
            {
                "method": "PUT",
                "url": "/api/vehicles/<id>",
                "description": "Update a vehicle by ID",
            },
            {
                "method": "DELETE",
                "url": "/api/vehicles/<id>",
                "description": "Delete a vehicle by ID",
            },
        ],
    }
    return jsonify(api_info), 200


# Run the application
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
