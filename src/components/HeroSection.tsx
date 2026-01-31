// Asset paths from Figma design
const imgClientImageOne = "/assets/Client Image One.png";
const imgClientImageTwo = "/assets/Client Image Two.png";
const imgClientImageThree = "/assets/Client Image Three.png";
const imgImageBlockImageBuilding = "/assets/building.png";
const imgStars = "/assets/stars.svg";
const imgPlusIcon = "/assets/plus-icon.svg";
const imgArrowDown = "/assets/arrow-down.svg";
const imgArrowDiagonal = "/assets/arrow-diagonal.svg";
const imgShapeIcon = "/assets/shape-icon.svg";

export default function HeroSection() {
  return (
    <div className="bg-white relative w-full min-h-screen" data-name="Hero Section">
      {/* Background Layer */}
      <div className="absolute bg-[#fbf0ea] bottom-0 h-[487px] left-0 right-0" data-name="Background" />
      
      {/* Star Icon - Top Left Decorative */}
      <div className="absolute flex items-center justify-center left-[338.52px] w-[308.138px] h-[308.138px] top-[92.72px]">
        <div className="flex-none rotate-[113.81deg] w-[233.69px] h-[233.69px]">
          <div className="overflow-clip relative w-full h-full">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[234.772px] h-[233.69px] overflow-clip">
              <img alt="" className="block w-full h-full" src={imgStars} />
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="absolute left-[345px] right-[345px] top-[calc(50%+25px)] -translate-y-1/2 h-[645.28px]" data-name="Container">
        
        {/* Hero Content Wrapper */}
        <div className="absolute bottom-0 h-[645.28px] left-[30px] right-[30px]" data-name="Hero Content Wrapper">
          
          {/* Hero Content Stack */}
          <div className="absolute bottom-0 h-[645.28px] left-0 right-0" data-name="Hero Content Stack">
            
            {/* Left Side - Clients Rating Wrapper */}
            <div className="absolute left-0 right-[84%] top-0 bottom-0" data-name="Clients Rating Wrapper">
              
              {/* Clients Rating Block */}
              <div className="absolute bottom-[207px] h-[104.48px] left-0 right-0" data-name="Clients Rating Block">
                
                {/* Clients Image Group */}
                <div className="absolute h-[52.41px] left-0 right-0 top-0 overflow-clip" data-name="Clients Image Group">
                  
                  {/* Client Image One */}
                  <div className="absolute left-0 w-[28%] top-1/2 -translate-y-1/2 aspect-square rounded-[26.21px]" data-name="Image One">
                    <div className="absolute inset-0 rounded-[26.21px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[26.21px]">
                        <img alt="" className="absolute left-0 top-0 w-full h-full max-w-none object-cover" src={imgClientImageOne} />
                      </div>
                    </div>
                    <div className="absolute border-4 border-transparent inset-0 rounded-[26.21px]" />
                  </div>
                  
                  {/* Client Image Two */}
                  <div className="absolute left-[37.44px] w-[52.41px] h-[52.41px] rounded-[26.21px] top-0" data-name="Image Two">
                    <div className="absolute inset-0 rounded-[26.21px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[26.21px]">
                        <img alt="" className="absolute left-0 top-0 w-full h-full max-w-none object-cover" src={imgClientImageTwo} />
                      </div>
                    </div>
                    <div className="absolute border-2 border-[#fbf0ea] border-solid left-0 rounded-[26.21px] w-[52.4px] h-[52.4px] top-0" />
                  </div>
                  
                  {/* Client Image Three */}
                  <div className="absolute left-[74.85px] w-[52.41px] h-[52.41px] rounded-[40px] top-0 overflow-clip" data-name="Image Three">
                    <div className="absolute inset-0 rounded-[40px]">
                      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
                        <img alt="" className="absolute left-0 top-0 w-full h-full max-w-none object-cover" src={imgClientImageThree} />
                      </div>
                    </div>
                    <div className="absolute border-2 border-[#fbf0ea] border-solid h-[52.4px] left-0 rounded-[40px] top-0 w-[52.41px]" />
                  </div>
                  
                  {/* Plus Icon Wrap */}
                  <div className="absolute bg-[#ff5a28] left-[112.26px] w-[52.4px] h-[52.4px] rounded-[26.21px] top-0 flex items-center justify-center" data-name="Icon Wrap">
                    <div className="w-4 h-4">
                      <img alt="" className="block w-full h-full" src={imgPlusIcon} />
                    </div>
                    <div className="absolute border-2 border-[#fbf0ea] border-solid left-0 rounded-[26.21px] w-[52.4px] h-[52.4px] top-0" />
                  </div>
                </div>
                
                {/* Clients Text Wrap */}
                <div className="absolute h-[36.08px] left-0 right-0 top-[68.4px] overflow-clip" data-name="Clients Text Wrap">
                  <div className="absolute font-satoshi font-medium h-[28.08px] leading-[0] left-[1.53px] right-[1.53px] text-[#0e0e0d] top-0" data-name="Text">
                    <div className="absolute left-0 top-[14px] -translate-y-1/2 flex flex-col justify-center text-[17.7px] h-[22px] w-[90.37px]">
                      <p className="leading-[28.08px] whitespace-pre-wrap">12K Rating </p>
                    </div>
                    <div className="absolute left-[90.17px] top-[15px] -translate-y-1/2 flex flex-col justify-center text-[14.6px] h-[20px] w-[94.15px]">
                      <p className="leading-[24.96px] whitespace-pre-wrap">(4.9 average)</p>
                    </div>
                  </div>
                  <div className="absolute border-[#2d2d2d] border-b border-solid inset-0" data-name="HorizontalBorder" />
                </div>
              </div>
              
              {/* Arrow Icon - Down */}
              <div className="absolute bottom-[13.71px] left-[71.72px] right-[75.47px] top-[563.57px] overflow-clip" data-name="Link - Arrow Icon">
                <div className="absolute h-[68px] left-0 top-0 w-[40px] overflow-clip">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[68px] w-[41px]">
                    <img alt="" className="block w-full h-full max-w-none" src={imgArrowDown} />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Hero Description Block */}
            <div className="absolute left-[27%] right-0 top-1/2 -translate-y-1/2 h-[645.28px]" data-name="Hero Description Block">
              
              {/* Building Image */}
              <div className="absolute left-0 right-[316.01px] top-0 bottom-0" data-name="Image Block">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <img alt="" className="absolute h-full left-0 top-0 w-full max-w-none object-cover" src={imgImageBlockImageBuilding} />
                </div>
              </div>
              
              {/* Text Block */}
              <div className="absolute left-[68%] right-0 top-0 bottom-0" data-name="Text Block">
                
                {/* Description Text */}
                <div className="absolute left-0 top-[317.12px] -translate-y-1/2 flex flex-col justify-center font-satoshi font-medium leading-[28.08px] text-[#2d2d2d] text-[17px] h-[78.15px] w-[271.84px] whitespace-pre-wrap">
                  <p className="mb-0">Turning your vision into reality by </p>
                  <p className="mb-0">transforming spaces into perfect </p>
                  <p className="mb-0">dream homes with expert care.</p>
                </div>
                
                {/* Primary Button - Explore Properties */}
                <div className="absolute bg-[#ff5a28] h-[56px] left-0 top-[439.28px] w-[212.31px] overflow-clip cursor-pointer hover:bg-[#ff6a38] transition-colors" data-name="Link - Primary">
                  {/* Arrow Icon in Button */}
                  <div className="absolute top-[11.03px] right-[19.02px] bottom-[11.03px] left-[159.35px] flex items-center justify-center">
                    <div className="-rotate-45 flex-none w-[24px] h-[24px]">
                      <div className="relative w-full h-full">
                        <img alt="" className="block w-full h-full max-w-none" src={imgArrowDiagonal} />
                      </div>
                    </div>
                  </div>
                  {/* Button Text */}
                  <div className="absolute left-[24px] top-[27.99px] -translate-y-1/2 flex flex-col justify-center font-inter font-medium h-[19.2px] leading-[0] text-[15px] text-white w-[132.51px]">
                    <p className="leading-[19.2px] whitespace-pre-wrap">Explore Properties</p>
                  </div>
                </div>
                
                {/* Decorative Shape - Top Right */}
                <div className="absolute left-[244.52px] right-[-1.43px] top-[99.59px] bottom-[512.6px] flex items-center justify-center">
                  <div className="-rotate-[69deg] flex-none h-[22px] w-[27px]">
                    <div className="overflow-clip relative w-full h-full">
                      <div className="absolute h-[22px] left-0 top-0 w-[27px] overflow-clip">
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[22px] w-[27px]">
                          <img alt="" className="block w-full h-full max-w-none" src={imgShapeIcon} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Shape - Bottom */}
                <div className="absolute left-[125.88px] right-[120.42px] top-[623.28px] bottom-0 overflow-clip">
                  <div className="absolute h-[22px] left-0 top-0 w-[27px] overflow-clip">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[22px] w-[27px]">
                      <img alt="" className="block w-full h-full max-w-none" src={imgShapeIcon} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Title */}
          <div className="absolute font-inter font-black h-[208px] leading-[0] left-[152px] right-[152px] text-[#0f0e0e] text-center top-[-0.77px]" data-name="Hero Title">
            {/* First Line */}
            <div className="absolute left-[calc(50%+11.5px)] top-[52px] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-[77.8px] h-[100px] w-[888.96px]">
              <p className="leading-[104px] whitespace-pre-wrap">Transforming Spaces, </p>
            </div>
            {/* Second Line */}
            <div className="absolute left-[calc(50%+0.09px)] top-[156px] -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center text-[0px] h-[100px] w-[688.22px]">
              <p className="text-[76.3px] whitespace-pre-wrap">
                <span className="leading-[104px]">Realizing </span>
                <span className="leading-[104px] text-[#ff5a28]">Dreams</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
