import { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import { size, weight } from "../../../styles/fonts";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import { colors } from "../../../styles/colors";

const LocationContainer = ({ data }) => {
  const [location, setLocation] = useState(null);
  useKakaoLoader();
  const { kakao, loading } = window;

  let partyRoomAddress =
    data?.partyRoomLocationDto?.roadAddress ||
    data?.partyRoomLocationDto?.jibunAddress ||
    `${data?.partyRoomLocationDto?.sido} ${data?.partyRoomLocationDto?.sigungu}`;

  const getLocationByAddress = async (address) => {
    const geocoder = new kakao.maps.services.Geocoder();
    return await new Promise((resolve) => {
      geocoder.addressSearch(address, function (result) {
        resolve(
          result?.[0]?.y &&
            new kakao.maps.LatLng(result?.[0]?.y && result[0].y, result[0].x)
        );
      });
    });
  };

  useEffect(() => {
    if (data) {
      const setMapCenterByAddress = async () => {
        if (!loading && kakao) {
          const result = await getLocationByAddress(
            partyRoomAddress //네이버본사
          );
          result && setLocation({ lat: result.getLat(), lng: result.getLng() });
        }
      };
      setMapCenterByAddress();
    }
  }, [loading, kakao, data]);

  return (
    <Container>
      <Subheading>위치</Subheading>
      <MapContainer>
        {location ? (
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
        ) : (
          <Text>지도에 위치를 표시할 수 없습니다.</Text>
        )}
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
  background-color: ${colors.gray10};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  color: ${colors.gray80};
`;
