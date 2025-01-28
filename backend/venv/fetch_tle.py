import requests

def fetch_tle():
    url = "https://celestrak.com/NORAD/elements/gp.php?GROUP=active&FORMAT=tle"
    response = requests.get(url)

    if response.status_code == 200:
        tle_data = response.text
        with open("tle_data.txt", "w") as file:
            file.write(tle_data)
        print("TLE data saved to tle_data.txt")
    else:
        print("Failed to fetch TLE data")

if __name__ == "__main__":
    fetch_tle()