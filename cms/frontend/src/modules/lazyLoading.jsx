import { useEffect, useMemo, useRef, useState } from "react";
import ListObserver from "./listObserver";

export function LazyLoading({
  onNextPageData,
  initialItems,
  children,
  className,
  page,
  setPage,
  setLastLength,
  lastLength,
  observeds,
  setObserveds,
  observer,
  setObserver,
  lazyLoading,
  setLazyLoading,
  listContainerRef,
  onLoadMore,
}) {
 

  //  {
  //   children
  //  }
  // </div>;
  // const listContainerRef = useRef(null);

  var [listObserver, _] = useState(null);

  useEffect(() => {
    listObserver = new ListObserver({
      observer: observer,
      rootRef: listContainerRef,

      onReachEnd: async () => {
        // console.log("reach end");
        return await onLoadMore();
      },
    });

    listObserver.start();
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
      className={className}
    >
      {children}
    </div>
  );
}
