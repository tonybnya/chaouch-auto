from flask import Blueprint, abort, jsonify, request

from models import Vehicle, db

# Create a Blueprint for vehicle routes under the '/api' prefix
vehicle_bp = Blueprint("vehicle_bp", __name__, url_prefix="/api/vehicles")


@vehicle_bp.route("", methods=["POST"])
def create_vehicle():
    """
    Create a new vehicle entry in the database.
    Expects JSON data in the request body.
    """
    data = request.get_json()

    if not data:
        abort(400, description="No input data provided")

    try:
        vehicle = Vehicle(
            brand=data["brand"],
            model=data["model"],
            year=data["year"],
            color=data.get("color"),
            transmission=data.get("transmission"),
            km=data.get("km"),
            seats=data.get("seats"),
            doors=data.get("doors"),
            sellery=data.get("sellery"),
            origin=data.get("origin"),
            volant=data.get("volant"),
            clim=data.get("clim"),
            city=data.get("city"),
            engine=data.get("engine"),
            power=data.get("power"),
            images=data.get("images", []),
            desc=data.get("desc"),
            in_stock=data.get("in_stock", True),
        )

        db.session.add(vehicle)
        db.session.commit()

        return jsonify(vehicle.to_dict()), 201

    except KeyError as e:
        abort(400, description=f"Missing field: {e.args[0]}")


@vehicle_bp.route("", methods=["GET"])
def get_vehicles():
    """
    Retrieve a list of all vehicles in the database.
    """
    vehicles = Vehicle.query.all()
    return jsonify([v.to_dict() for v in vehicles]), 200


@vehicle_bp.route("/<int:vehicle_id>", methods=["GET"])
def get_vehicle(vehicle_id):
    """
    Retrieve a single vehicle by ID.
    """
    vehicle = Vehicle.query.get_or_404(vehicle_id)
    return jsonify(vehicle.to_dict()), 200


@vehicle_bp.route("/<int:vehicle_id>", methods=["PUT"])
def update_vehicle(vehicle_id):
    """
    Update an existing vehicle by ID.
    Expects JSON data in the request body.
    """
    vehicle = Vehicle.query.get_or_404(vehicle_id)
    data = request.get_json()

    if not data:
        abort(400, description="No input data provided")

    for key, value in data.items():
        if hasattr(vehicle, key):
            setattr(vehicle, key, value)

    db.session.commit()
    return jsonify(vehicle.to_dict()), 200


@vehicle_bp.route("/<int:vehicle_id>", methods=["DELETE"])
def delete_vehicle(vehicle_id):
    """
    Delete a vehicle by ID.
    """
    vehicle = Vehicle.query.get_or_404(vehicle_id)
    db.session.delete(vehicle)
    db.session.commit()
    return jsonify({"message": f"Vehicle {vehicle_id} deleted"}), 200


# Create a route to provide information about the API
@vehicle_bp.route("/api", methods=["GET"])
def api_info():
    """
    Provide information about the API.
    """
    api_info = {
        "version": "1.0",
        "description": "Vehicle Management API",
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
