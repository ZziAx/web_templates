import * as Iconsax from "iconsax-reactjs";

export default function ArrowBackTitle({ onClick, title }) {
  return (
    <div   class="row items-center gap-2">
      <h1>{title}</h1>

      <div
        onClick={onClick}
        class="rounded-full hover:bg-neutral-200 cursor-pointer"
      >
        <Iconsax.ArrowRight />
      </div>
    </div>
  );
}
