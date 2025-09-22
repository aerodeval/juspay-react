import React, { useEffect, useState } from 'react';
import Card from '../../ui/Card';
import { cityData } from '../../../data/content';
import './LocationRevenue.css';

export default function LocationRevenue() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Card
      minWidth={200}
      height={"100%"}
      title="Revenue by Location"
      data={
        <div className="location-revenue-container">
          <div className="map">
            <img src="/assets/charts/Map.png" alt="Map" />
          </div>

          {cityData.map((item, index) => (
            <div className="location-revenue" key={index}>
              <div className="location-stat">
                <p>{item.city}</p>
                <span>{item.value}</span>
              </div>
              {/* Progress bar */}
              <div className="location-bar">
                <div
                  className="location-bar-fill"
                  style={{
                    width: loaded ? `${item.value}%` : 0,
                    transition: 'width 1s ease-in-out',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      }
    />
  );
}
