export function TextHeader(props) {
  return (
    <h className="relative z-20 w-fit text-darkBlue mobile:font-bold font-poppins mobile:text-[30px] laptop:text-[40px] leading-[125%]">
      {props.children}
    </h>
  )
}

export function GreyTag(props) {
  return (
    <span className="bg-grey006 text-grey w-fit px-[5px] pt-1 pb-[3px] rounded-sm">
      {props.tagName}
    </span>
  )
}

export function FooterTitle(props) {
  return (
    <h1 className="text-darkBlue font-poppins font-bold text-[20px] leading-[30px]">
      {props.title}
    </h1>
  )
}

export function FooterContent(props) {
  return (
    <span className="text-grey001 font-dmSans text-[16px] leading-[20.83px]">
      {props.content}
    </span>
  )
}
