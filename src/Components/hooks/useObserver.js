import React from "react";

export const useObserver = (ref, Loading, canLoad, callback) => {

    const observer = React.useRef()

    React.useEffect(() => {
        if (Loading) return;
        if (observer.current) observer.current.disconnect();
    
        var cb = function(entries) {
          if (entries[0].isIntersecting && canLoad) {

            callback()
          }
        };
        observer.current = new IntersectionObserver(cb);
        observer.current.observe(ref.current)
      }, [Loading])
}