// Asset URLs - These will need to be downloaded from the Figma plugin server
// For now, using placeholder paths
const imgClientImageOne = "/assets/client-1.png";
const imgClientImageTwo = "/assets/client-2.png";
const imgClientImageThree = "/assets/client-3.png";
const imgImageBlockImageBuilding = "/assets/building.png";
const imgGroup = "/assets/star-mask-1.svg";
const imgGroup1 = "/assets/star-mask-2.svg";
const imgGroup2 = "/assets/star-content.svg";
const imgHwcWmEsAslmXx2S3Fpw22VFzq5KSvg = "/assets/plus-icon.svg";
const imgYiMrHJlwikn3LzDrF5JDyGnRe8Svg = "/assets/arrow-down.svg";
const imgSvg = "/assets/arrow-diagonal.svg";
const imgFmfUPpgFemm7Le8JZm8P2Rj8GMeSvg = "/assets/shape-icon.svg";

export default function HeroSection() {
  return (
    <div className="bg-white relative w-full h-screen min-h-[700px]" data-name="Hero Section">
      {/* Background */}
      <div className="absolute bg-[#fbf0ea] bottom-0 h-[487px] left-0 right-0" data-name="Background" />
      
      {/* Container */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1230px] h-[645px] px-8" data-name="Container">
        
        {/* Decorative Star Icon (top-left) */}
        <div className="absolute -left-2 -top-14 w-[234px] h-[234px] rotate-[114deg] opacity-80">
          <div className="relative w-full h-full overflow-clip">
            <img alt="" className="block w-full h-full" src={imgGroup2} />
          </div>
        </div>

        {/* Hero Content Wrapper */}
        <div className="absolute bottom-0 h-[645px] left-[30px] right-[30px]">
          
          {/* Hero Content Stack */}
          <div className="absolute bottom-0 h-[645px] left-0 right-0">
            
            {/* Clients Rating Wrapper (Left Side) */}
            <div className="absolute left-0 w-[16%] min-w-[200px]">
              
              {/* Clients Rating Block */}
              <div className="absolute bottom-[207px] h-[104px] w-full">
                
                {/* Clients Image Group */}
                <div className="absolute h-[52px] left-0 right-0 top-0">
                  {/* Image One */}
                  <div className="absolute left-0 w-[52px] h-[52px] rounded-full top-1/2 -translate-y-1/2">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <img alt="Client 1" className="w-full h-full object-cover" src={imgClientImageOne} />
                    </div>
                    <div className="absolute border-4 border-[#fbf0ea] inset-0 rounded-full" />
                  </div>
                  
                  {/* Image Two */}
                  <div className="absolute left-[37px] w-[52px] h-[52px] rounded-full top-0">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <img alt="Client 2" className="w-full h-full object-cover" src={imgClientImageTwo} />
                    </div>
                    <div className="absolute border-2 border-[#fbf0ea] left-0 rounded-full w-[52px] h-[52px] top-0" />
                  </div>
                  
                  {/* Image Three */}
                  <div className="absolute left-[74px] w-[52px] h-[52px] rounded-full top-0">
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <img alt="Client 3" className="w-full h-full object-cover" src={imgClientImageThree} />
                    </div>
                    <div className="absolute border-2 border-[#fbf0ea] w-[52px] h-[52px] rounded-full" />
                  </div>
                  
                  {/* Plus Icon Wrap */}
                  <div className="absolute bg-[#ff5a28] left-[111px] w-[52px] h-[52px] rounded-full top-0 flex items-center justify-center">
                    <div className="w-4 h-4">
                      <img alt="Plus" className="w-full h-full" src={imgHwcWmEsAslmXx2S3Fpw22VFzq5KSvg} />
                    </div>
                    <div className="absolute border-2 border-[#fbf0ea] left-0 rounded-full w-[52px] h-[52px] top-0" />
                  </div>
                </div>
                
                {/* Clients Text Wrap */}
                <div className="absolute h-[36px] left-0 right-0 top-[68px]">
                  <div className="font-satoshi font-medium text-[#0e0e0d]">
                    <span className="text-[17.7px] leading-[28px]">12K Rating </span>
                    <span className="text-[14.6px] leading-[25px]">(4.9 average)</span>
                  </div>
                  <div className="absolute border-b border-[#2d2d2d] inset-x-0 bottom-0" />
                </div>
              </div>
              
              {/* Arrow Icon */}
              <div className="absolute bottom-[14px] left-[72px] w-[40px] h-[68px]">
                <img alt="" className="w-full h-full" src={imgYiMrHJlwikn3LzDrF5JDyGnRe8Svg} />
              </div>
            </div>

            {/* Hero Description Block (Right Side) */}
            <div className="absolute left-[27%] right-0 top-1/2 -translate-y-1/2 h-[645px]">
              
              {/* Building Image */}
              <div className="absolute left-0 right-[316px] inset-y-0">
                <div className="absolute inset-0 overflow-hidden">
                  <img alt="Building" className="w-full h-full object-cover" src={imgImageBlockImageBuilding} />
                </div>
              </div>
              
              {/* Text Block */}
              <div className="absolute right-0 w-[32%] min-w-[272px] inset-y-0">
                
                {/* Description Text */}
                <div className="absolute top-[317px] left-0 font-satoshi font-medium text-[17px] leading-[28px] text-[#2d2d2d]">
                  <p className="mb-0">Turning your vision into reality by</p>
                  <p className="mb-0">transforming spaces into perfect</p>
                  <p>dream homes with expert care.</p>
                </div>
                
                {/* Primary Button */}
                <button className="absolute bg-[#ff5a28] h-[56px] left-0 top-[439px] w-[212px] flex items-center justify-between px-6 hover:bg-[#ff6a38] transition-colors">
                  <span className="font-inter font-medium text-[15px] text-white">Explore Properties</span>
                  <div className="-rotate-45 w-6 h-6">
                    <img alt="" className="w-full h-full" src={imgSvg} />
                  </div>
                </button>
                
                {/* Decorative Shapes */}
                <div className="absolute top-[100px] right-0 -rotate-[69deg] w-[27px] h-[22px]">
                  <img alt="" className="w-full h-full" src={imgFmfUPpgFemm7Le8JZm8P2Rj8GMeSvg} />
                </div>
                
                <div className="absolute bottom-0 left-[126px] w-[27px] h-[22px]">
                  <img alt="" className="w-full h-full" src={imgFmfUPpgFemm7Le8JZm8P2Rj8GMeSvg} />
                </div>
              </div>
            </div>
          </div>

          {/* Hero Title */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-center font-inter font-black text-[#0f0e0e]">
            <h1 className="text-[78px] leading-[104px] mb-0">
              Transforming Spaces,
            </h1>
            <h1 className="text-[76px] leading-[104px] mt-0">
              Realizing <span className="text-[#ff5a28]">Dreams</span>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
