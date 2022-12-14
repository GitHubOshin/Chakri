export function TextHeader(props) {
  return (
    <h1 className="relative z-0 w-fit text-darkBlue mobile:font-bold font-poppins mobile:text-[30px] laptop:text-[40px] leading-[125%]">
      {props.children}
    </h1>
  )
}

export function GreyTag(props) {
  return (
    <span className="bg-grey006 text-grey w-fit px-[5px] pt-1 pb-[3px] rounded-sm">
      {props.tagName}
    </span>
  )
}
