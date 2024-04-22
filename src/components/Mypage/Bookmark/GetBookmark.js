import { useEffect, useState } from "react";
import { getBookmarkList } from "../../../api/api";

const GetBookmark = ({ setLoading }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const getReview = async () => {
      try {
        const res = await getBookmarkList();
        setData(res.data);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    };
    getReview();
  }, []);
  return data;
};

export default GetBookmark;
