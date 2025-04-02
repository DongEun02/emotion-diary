import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // DOM 요소를 저장하는 변수를 만들 때는 $를 붙임
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
