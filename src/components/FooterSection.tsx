'use client'

export default function FooterSection() {
    return (
        <div className="w-full  relative overflow-hidden mb-32 py-[10px] px-5 md:px-[20px] lg:px-[40px]  z-[5555]">
            <div className="max-w-[1140px] mx-auto">
                <div className="text-center">
                    {/* <p className="text-[#272727] text-[15px] leading-[1.5] mb-4">
                        <b><b><strong>Copyright © [2025],[Launch at scale]. All rights reserved.</strong></b></b>
                    </p> */}
                    
                    <p className="text-[#c8c8c8] text-[12px] leading-[1.5] mb-0">
                    
                            <span className="font-normal">This site is not a part of the Facebook™ website or Facebook™, Inc. Additionally, it is in no way endorsed by Facebook™. Facebook™ is a trademark of Facebook™, Inc.</span>
                            <br />
                    </p>
               <p className="text-[#c8c8c8] text-[12px] leading-[1.5] mt-6 mb-0">
                        All terms, privacy policies, and disclaimers related to this program and website can be accessed via the provided links. I value transparency and hold myself (and you) to high standards of integrity. I hope this training and content bring you great value and outstanding results. 🚀
                    </p>
                </div>
            </div>
        </div>
    )
}