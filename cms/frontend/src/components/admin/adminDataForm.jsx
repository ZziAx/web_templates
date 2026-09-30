export function AdminDataForm(props) {
  const { backgroundColor = "white", title, children, headerActions,dir = "ltr",className="h-full w-full" } = props;
  return (
    <div
      style={{
     
        backgroundColor: backgroundColor
      }}
      dir={dir}
      //  primary-shadow
      class={`flex   p-5 shadow-sm rounded-xl ${className}`}
    >
      <div class="flex flex-1  h-full flex-col gap-5 justify-start items-end ">
        <div class="flex flex-row-reverse w-full justify-between items-center">
          <h3 >{title}</h3>
          <div>{headerActions}</div>
        </div>

        {children}
      </div>
    </div>
  );
}

