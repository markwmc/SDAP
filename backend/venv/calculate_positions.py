from skyfield.api import load, EarthSatellite

def calculate_positions():
    with open("tle_data.txt", "r") as file:
        lines = file.readlines()
    
    satellites = []
    for i in range(0, len(lines), 3):
        name = lines[i].strip()
        line1 = lines[i +1].strip()
        line2 = lines[i +2].strip()
        satellite = EarthSatellite(line1, line2, name)
        satellites.append(satellite)

    ts = load.timescale()
    now = ts.now()

    positions = []
    for satellite in satellites:
        geocentric = satellite.at(now)
        subpoint = geocentric.subpoint()
        positions.append({
            "name": satellite.name,
            "latitude": subpoint.latitude.degrees,
            "longitude": subpoint.longitude.degrees,
            "altitude": subpoint.elevation.km
        })

    return positions

if __name__ == "__main__":
    positions = calculate_positions()
    for pos in positions[:5]:
        print(pos)