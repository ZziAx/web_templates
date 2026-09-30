import { UPLOAD_URL } from "../../core/axios";
import './bannerGrid.css'

function _BannerGridItem({ aspect = 4 / 3, src ,bannerClassName = "rounded-2xl"}) {
  return (
     <a href="">
    <div
      style={{ aspectRatio: aspect }}
      class={`flex  h-full ${bannerClassName} overflow-hidden`}
    >
      <img src={UPLOAD_URL + src} />
    </div>
    </a>
  );
}

export function BannerGrid({
  cols = 4,
  colClassName,
  aspect = 4 / 3,
  items = [1, 2, 3, 4],
  bannerClassName= "rounded-2xl "
}) {
  return (
    <div
      style={{
        height: "auto",
      }}
      class={`flex grid ${colClassName ?? `grid-cols-${cols}`} flex-row-reverse justify-center   w-full gap-3`}
    >
      {items.map((item, _) => (
        <_BannerGridItem aspect={aspect} src={ item} bannerClassName={bannerClassName}/>
      ))}
    </div>
  );
}
