import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import axios from "axios";
import MainSearch from "../components/MainPage/MainSearch";
import MainCategory from "../components/MainPage/MainCategory";
import Card from "../components/MainPage/MainContents/Card";
import { Link } from "react-router-dom";
// import useIntersect from "../hooks/useIntersect";

const MainPage = () => {
  // const dispatch = useDispatch();

  // const { apiData, isLoaded, pageCount } = useSelector((state) => ({
  //     apiData: state.apiData.data,
  //     isLoaded: state.apiData.isLoaded,
  //     pageCount: state.pageReducer.pageCount,
  // }));

  const [keywords, setKeywords] = useState([]);
  const [photos, setPhotos] = useState([]);
  // const [exp, setExp] = useState();

  // const page = useRef(0);

  // const [_, setRef] = useIntersect(
  //     async (entry, observer) => {
  //         observer.unobserve(entry.target);
  //         await setExp(photos[++page.current]);
  //         observer.observe(entry.target);
  //     },
  //     [exp]
  // );

  // // const [page, setPage] = useState(1);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchKeyword = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users/"
        );
        setKeywords(response.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchKeyword();
  }, [keywords]);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/photos/"
        );
        const data = await response.data
          .filter((_, idx) => idx < 42)
          .map((el) => el.thumbnailUrl);
        // const arrSize = (await data.length) / 100;

        // for (let i = 0; i < arrSize; i++) {
        //     await setPhotos((prev) => [
        //         ...prev,
        //         data.slice(i, (i + 1) * 100 + 1),
        //     ]);
        // }
        // await setExp(photos[page.current]);
        setPhotos(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPhotos();
  }, [photos]);
  return (
    <>
      {/* profile dropdown은 Link to */}
      <Container>
        <MainSearch></MainSearch>
        <MainCategory keywords={keywords}></MainCategory>
        {/* 카테고리 값과 , 검색 결과 변수 바뀔 때마다 Contents 내용 변경 */}
        <MainContents>
          {photos &&
            photos.map((photo, idx) => <Card key={idx} photo={photo}></Card>)}
          {/* {isLoading && <p>Loading</p>} */}
        </MainContents>
      </Container>
    </>
  );
};

export default MainPage;

const Container = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  height: calc(100vh-64px);
`;

const MainContents = styled.div`
  width: 92vw;
  display: flex;
  gap: 0px 3.6rem;
  flex-wrap: wrap;
  width: 92vw;
  display: flex;
  gap: 0px 3.6rem;
  flex-wrap: wrap;
`;
