# Chaouch Auto Backend

A Flask-based CRUD API for managing vehicle inventory.

## Features

- Complete CRUD operations for vehicles
- Input validation using Marshmallow
- PostgreSQL database with SQLAlchemy
- Error handling
- Filtering options for vehicles

## Setup

1. Create a virtual environment:
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

3. Create a `.env` file based on the `.env.example` template.

4. Initialize the database:
   ```
   flask db init
   flask db migrate -m "Initial migration"
   flask db upgrade
   ```

5. Run the application:
   ```
   flask run
   ```

## API Endpoints

### Vehicles

- `GET /api/vehicles` - Get all vehicles (with optional filtering)
- `GET /api/vehicles/<id>` - Get a specific vehicle
- `POST /api/vehicles` - Create a new vehicle
- `PUT /api/vehicles/<id>` - Update a vehicle
- `DELETE /api/vehicles/<id>` - Delete a vehicle

## Vehicle Model Attributes

- origin (str)
- model (str)
- volant (str)
- seats (int)
- city (str)
- year (int)
- engine (str)
- power (str)
- transmission (str)
- km (int)
- color (str)
- sellery (str)
- brand (str)
- air_cond (str)
- doors (int)
- desc (str)
- in_stock (bool)
- images (list[str])

