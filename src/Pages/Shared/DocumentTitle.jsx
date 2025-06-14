import React, { useEffect } from "react";

const DocumentTitle = (title) => {
  return useEffect(() => {
    document.title = title;
  }, [title]);
};

export default DocumentTitle;
