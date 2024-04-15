import { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { size, weight } from "../../../styles/fonts";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";

const LocationContainer = ({ data }) => {
  const [location, setLocation] = useState({ lat: 33.5563, lng: 126.79581 });
  useKakaoLoader();
  const { kakao, loading } = window;

  let partyRoomAddress;

  if (
    data?.partyRoomLocationDto?.roadAddress ||
    data?.partyRoomLocationDto?.jibunAddress
  ) {
    partyRoomAddress =
      data?.partyRoomLocationDto?.roadAddress ||
      data?.partyRoomLocationDto?.jibunAddress;
  } else {
    partyRoomAddress =
      data?.partyRoomLocationDto?.sido + data?.partyRoomLocationDto?.sigungu;
  }

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
      if (!loading && kakao) {
        const result = await getLocationByAddress(
          partyRoomAddress //네이버본사
        );
        setLocation({ lat: result.getLat(), lng: result.getLng() });
      }
    };

    setMapCenterByAddress();
  }, [loading, kakao]);

  return (
    <Container>
      <Subheading>위치</Subheading>
      <MapContainer>
        <Map
          id="map"
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
