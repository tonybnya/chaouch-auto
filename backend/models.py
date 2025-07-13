from flask_sqlalchemy import SQLAlchemy

# Create a SQLAlchemy instance to manage database operations
db = SQLAlchemy()


class AdminUser(db.Model):
    """Admin User model."""

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)


class Vehicle(db.Model):
    """
    Vehicle model representing vehicle listings in the database.

    Attributes:
        id (int): Primary key identifier for each vehicle.
        brand (str): Brand name of the vehicle (e.g., Toyota).
        model (str): Model of the vehicle (e.g., Corolla).
        year (int): Manufacturing year of the vehicle.
        color (str): Color of the vehicle.
        transmission (str): Type of transmission (e.g., Automatic, Manual).
        km (int): Number of kilometers the vehicle has been driven.
        seats (int): Number of seats in the vehicle.
        doors (int): Number of doors.
        sellery (str): Type of seat covering (e.g., leather/cuir).
        origin (str): Country of origin (e.g., Belgique).
        volant (str): Steering orientation (e.g., gauche for left-hand).
        clim (str): Description of the air conditioning system.
        city (str): City where the vehicle is available.
        engine (str): Engine description (e.g., 2.0L TDI).
        power (str): Vehicle power (e.g., 15CV).
        images (list): List of image paths or URLs related to the vehicle.
        desc (str): Full description of the vehicle.
        in_stock (bool): Indicates if the vehicle is currently available.
    """

    __tablename__ = "vehicles"

    id = db.Column(db.Integer, primary_key=True)
    brand = db.Column(db.String(100), nullable=False)
    model = db.Column(db.String(100), nullable=False)
    year = db.Column(db.Integer, nullable=False)
    color = db.Column(db.String(50))
    transmission = db.Column(db.String(50))
    km = db.Column(db.Integer)
    seats = db.Column(db.Integer)
    doors = db.Column(db.Integer)
    sellery = db.Column(db.String(50))
    origin = db.Column(db.String(100))
    volant = db.Column(db.String(20))
    clim = db.Column(db.String(100))
    city = db.Column(db.String(100))
    engine = db.Column(db.String(100))
    power = db.Column(db.String(20))
    images = db.Column(db.JSON)  # List of image paths or URLs
    desc = db.Column(db.Text)
    in_stock = db.Column(db.Boolean, default=True)

    def to_dict(self):
        """
        Serialize the vehicle object into a dictionary format.

        Returns:
            dict: Dictionary representation of the vehicle instance.
        """
        return {
            "id": self.id,
            "brand": self.brand,
            "model": self.model,
            "year": self.year,
            "color": self.color,
            "transmission": self.transmission,
            "km": self.km,
            "seats": self.seats,
            "doors": self.doors,
            "sellery": self.sellery,
            "origin": self.origin,
            "volant": self.volant,
            "clim": self.clim,
            "city": self.city,
            "engine": self.engine,
            "power": self.power,
            "images": self.images,
            "desc": self.desc,
            "in_stock": self.in_stock,
        }
