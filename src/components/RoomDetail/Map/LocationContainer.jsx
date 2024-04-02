import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { size, weight } from "../../../styles/fonts";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";

const LocationContainer = () => {
  const [location, setLocation] = useState({ lat: 33.5563, lng: 126.79581 });
  useKakaoLoader();
  const { kakao } = window;

  const getLocationByAddress = async (address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    return await new Promise((resolve) => {
      geocoder.addressSearch(address, function (result) {
        resolve(new kakao.maps.LatLng(result[0].y, result[0].x));
      });
    });
  };

  useEffect(() => {
    const setMapCenterByAddress = async () => {
      const result = await getLocationByAddress(
        "경기 성남시 분당구 정자일로 95 " //네이버본사
      );
      setLocation({ lat: result.getLat(), lng: result.getLng() });
    };

    setMapCenterByAddress();
  }, []);

  return (
    <Container>
      <Subheading>위치</Subheading>
      <MapContainer>
        <Map
          center={location}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px",
          }}
          level={4}
        >
          <MapMarker position={location}></MapMarker>
        </Map>
      </MapContainer>
    </Container>
  );
};

export default LocationContainer;
const Container = styled.div`
  margin-bottom: 40px;
`;
const Subheading = styled.div`
  font-size: ${size.h4};
  font-weight: ${weight.semibold};
  margin-bottom: 16px;
`;

const MapContainer = styled.div`
  height: 300px;
`;
