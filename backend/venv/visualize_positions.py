import plotly.express as px
from calculate_positions import calculate_positions

def visualize_positions():
    positions = calculate_positions()

    import pandas as pd
    df = pd.DataFrame(positions)

    fig = px.scatter_geo(
        df,
        lat="latitude",
        lon="longitude",
        text="name",
        title="Satellite Positions",
        projection="orthographic"
    )
    fig.show()

if __name__ == "__main__":
    visualize_positions()
