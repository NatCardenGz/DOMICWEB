interface Props{
    title: string;
    sizeFont: FontSize;
    widthButtonPY: string 

}

type FontSize = 'text-sm'|'text-md'|'text-lg'|'text-xl';

export const MainButton = ({title, sizeFont, widthButtonPY}:Props) => {
  return (
    <button className={`relative ${widthButtonPY} tracking-wide py-2 rounded-lg font-medium ${sizeFont} bg-gradient-to-b from-[#190d2e] to-[#196185] shadow-[0px_0px_12px_#48b3bf]`}>
    <div className="absolute inset-0 ">
      <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
      <div className="border absolute inset-0 border-white/40 rounded-lg [mask-image:linear-gradient(to_top,black,transparent)]"></div>
      <div className="absolute inset-0 shadow-[0_0_10px_rgb(85,166,253,.7)_inset] rounded-lg"></div>
    </div>
    <span>{title}</span>
  </button>
  )
}
