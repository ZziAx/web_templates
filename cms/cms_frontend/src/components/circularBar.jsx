import { Row } from "../layout/row";
import { Column } from "../layout/column";
export function CircularBar() {
  const items = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div class="flex justify-center items-center w-full">
      <div class="flex flex-1 justify-center  items-center w-full">
        <div class="flex flex-row gap-3 w-full">
          {items.map((item, index) => (
            <div class="flex  w-full  justify-center items-center ">
              <div class="flex flex-col  justify-center items-center cursor-pointer w-full">

                <div class="flex w-full max-w-[50px] aspect-[1.0] bg-red-500 rounded-full" />

                
                <div>
                  <h4>{item}</h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
