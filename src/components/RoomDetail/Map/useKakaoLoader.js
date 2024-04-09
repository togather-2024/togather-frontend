import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk";

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({
    appkey: "0c82923749ffed5a5e3db93b96106f20",
    libraries: ["clusterer", "drawing", "services"],
  });
}
