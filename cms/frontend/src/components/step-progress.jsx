import { useState } from "react";

export function StepProgress(props) {
  const [ currentStep, setCurrentStep ] = useState(0);

  const steps = props.steps;

  return (
    <div class="row h-[80px] w-full  justify-center items-center gap-1">
        
      {steps.map((v, i) => {
        return (
          <div class="col-3 font-[400] text-[13px] h-full  justify-start items-start">
            <div
              class={`flex w-full h-[2px] ${currentStep > i ? "bg-primary-400" : "bg-neutral-200"}`}
            />

            <div class="col gap-[1px] items-start">
              <h5 class={`font-bold text-[11px] ${currentStep == i ?"opacity-[0.8] font-extrabold":"opacity-[0.8] font-bold"} text-primary-400`}>{`مرحله ${i + 1}`}</h5>

              <h5 class={`font-regular  text-[15px] text-black ${currentStep == i ?"opacity-[0.8] font-bold":"opacity-[0.5] font-bold"}`}>{v}</h5>
            </div>
          </div>
        );
      })}


    </div>
  );
}
