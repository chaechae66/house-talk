"use client";

import useDidMountEffect from "@/hooks/useDidMountEffect";
import { AddrContext, AddrContextType } from "@/hooks/useAddrContext";
import {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

const KakaoMap = () => {
  const container = useRef(null);
  const [map, setMap] = useState<any>();
  const [marker, setMarker] = useState<any>();
  const { addr, setAddr }: AddrContextType = useContext(AddrContext);

  useEffect(() => {
    window.kakao.maps.load(() => {
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
      };

      setMap(new window.kakao.maps.Map(container.current, options));
      setMarker(new window.kakao.maps.Marker());
    });
  }, []);

  useDidMountEffect(() => {
    map &&
      marker &&
      window.kakao.maps.event?.addListener(
        map,
        "click",
        function (mouseEvent: any) {
          var geocoder = new window.kakao.maps.services.Geocoder();

          geocoder.coord2Address(
            mouseEvent.latLng.getLng(),
            mouseEvent.latLng.getLat(),
            (result: any, status: any) => {
              if (status === window.kakao.maps.services.Status.OK) {
                var addr = !!result[0].road_address
                  ? result[0].road_address.address_name
                  : result[0].address.address_name;

                setAddr(addr);

                marker.setMap(null);
                marker.setPosition(mouseEvent.latLng);
                marker.setMap(map);
              }
            },
          );
        },
      );
  }, [map]);

  const handleInputAdrr: ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    setAddr(e.target.value);
    var geocoder = new window.kakao.maps.services.Geocoder();

    geocoder.addressSearch(addr, function (result: any, status: any) {
      if (status === window.kakao.maps.services.Status.OK) {
        var coords = new window.kakao.maps.LatLng(result[0].y, result[0].x);

        marker.setMap(null);
        marker.setPosition(coords);
        marker.setMap(map);

        map.setCenter(coords);
      }
    });
  };

  return (
    <>
      <div className="mb-2 h-72 w-full">
        <div ref={container} style={{ width: "100%", height: "100%" }} />
      </div>
      <label>
        주소
        <br />
        <textarea
          value={addr}
          onChange={handleInputAdrr}
          className="border-standard mt-2 h-16 w-full resize-none rounded p-2"
        />
      </label>
      <br />
      <label>
        상세주소
        <br />
        <input type="text" className="border-standard mt-2 w-full grow p-2" />
      </label>
    </>
  );
};

export default KakaoMap;
