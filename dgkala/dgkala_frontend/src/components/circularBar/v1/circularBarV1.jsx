import { Row } from "../../../layout/row";
import { Column } from "../../../layout/column";
import { UPLOAD_URL } from "../../../core/axios";
export function CircularBar() {
  const items = [
    "/uploads/static/14f351ad0cbaeb78a40a39c3be187a7aa643f23c_1776060158.jpg",
    "/uploads/static/f0909d6eae7ee548665693cfbe823b078cf70ede_1774984328.png",
    "/uploads/static/a6c150ebb721bf118a7b3d80351d59c8243891aa_1757851405.png",
    "/uploads/static/856d2daf9782a77d34755204955c745d401582f2_1772457881.png",
    "/uploads/static/74a5ac2c42df40e2b9e9a1f7ef2fbb87a8f13cad_1775901074.png",
    "/uploads/static/801e57b6509b98b93164f4927dbf59191f0464de_1771935020.png",
  ];
  return (
    <div class="flex justify-center items-center w-full overflow-x-auto hideScroll">
      <div class="flex flex-1 justify-center   items-center">
        <div class="flex flex-row gap-3 w-full  justify-start">
          {items.map((item, index) => (
            <div class="flex  base:w-full laptop:w-full  justify-center items-center  laptop:flex-shrink-1 ">
              <a href="">
              <div class="flex flex-col  justify-center items-center cursor-pointer w-full">
                
                <div class="flex w-[50px] max-w-[50px] aspect-[1.0] bg-red-500 rounded-full overflow-hidden">
                  <img src={UPLOAD_URL + item} />
                </div>

                {/* <div>
                  <h4>{item}</h4>
                </div> */}
              </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
