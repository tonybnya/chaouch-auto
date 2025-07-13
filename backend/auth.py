from flask import Blueprint, jsonify, request
from flask_jwt_extended import (create_access_token)
from werkzeug.security import check_password_hash

from models import AdminUser

auth_bp = Blueprint("auth_bp", __name__, url_prefix="/api/auth")

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    user = AdminUser.query.filter_by(username=data["username"]).first()

    if user and check_password_hash(user.password, data["password"]):
        token = create_access_token(identity=user.username)
        return jsonify(access_token=token), 200
    return jsonify(msg="Invalid credentials"), 401
