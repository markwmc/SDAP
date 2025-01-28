import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSpinner,
} from "@ionic/react";
import { useState, useEffect } from "react";

interface Satellite {
  name: string;
  latitude: number;
  longitude: number;
  altitude: number;
}

const Home: React.FC = () => {
  const [satellites, setSatellites] = useState<Satellite[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSatellites = async () => {
      try {
        const response = await fetch("http://localhost:5001/satellites");
        if (!response.ok) {
          throw new Error(`HTTP ERROR STATUS: ${response.status}`);
        }
        const data = await response.json();
        setSatellites(data);
      } catch (err) {
        console.error("Error fetching satellites data: ", err);
        setError("Error fetching satellite data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSatellites();
  }, []);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Satellite Data</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {loading ? (
          <div className="loading-container">
            <IonSpinner name="crescent" />
            <p>Fetching satellite data...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
          </div>
        ) : satellites.length === 0 ? (
          <div className="empty-container">
            <p>No satellite data available.</p>
          </div>
        ) : (
          <IonList>
            {satellites.map((satellite, index) => (
              <IonCard key={index}>
                <IonCardHeader>
                  <IonCardTitle>{satellite.name}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <p><strong>Latitude:</strong> {satellite.latitude.toFixed(2)}</p>
                  <p><strong>Longitude:</strong> {satellite.longitude.toFixed(2)}</p>
                  <p><strong>Altitude:</strong> {satellite.altitude.toFixed(2)} km</p>
                </IonCardContent>
              </IonCard>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Home;
