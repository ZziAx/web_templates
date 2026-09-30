import { useContext } from 'react';
import { useForm } from 'react-hook-form'; // Import the hook


export function FormTextInput({id,label,placeholder,type = "text",error,register,validation})
{

    return <label class="flex text-body-1-bold  gap-2 flex-col items-end">
          <p class="text-body-2-bold">
           {label}
          </p>
          <div class="flex w-[300px] h-[45px] bg-neutral-100 rounded-[5px]">
            <input
            id={id}
            type={type}
              dir="rtl"
              class="px-3 text-body-3-bold relative w-full h-full border-none outline-none bg-transparent"
              placeholder={placeholder}
              {...register(id, validation)}
            />
          </div>

        {error && <p class="text-hint-text-error">{error.message}</p>}
        </label>

}