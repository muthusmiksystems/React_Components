/* eslint-disable react/no-unescaped-entities */
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.css'

import { images } from '.';
import Image from 'next/image';

function Home() {
  return (
    <>
    <nav className="background-color">
    <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            {/* <!-- Logo --> */}
            <div>
                <a href="#" className="text-white"><Image src={images.logo} alt=""/></a>
            </div>

            {/* <!-- Menu items --> */}
            <div className="md:block">
                <ul className="flex space-x-6 mt-3">
                    <li><a href="#" className="text-gray-300 hover:text-white no-underline">Why lniverse</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white no-underline">How To Buy</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white no-underline">Token info</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white no-underline">Roadmap</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white no-underline">Team</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white no-underline">FAQ</a></li>
                </ul>
            </div>

            <div className="flex">
                <button className="connect flex rounded-3 mr-3">
                    <Image src={images.connect} alt="" className=" mt-2 ml-3 h-5" />
                    <h5 className="text-white mt-1 ms-2 mr-10">connect</h5>
                </button>

                <button className="English flex rounded-3">
                    <Image src={images.englishNav} alt="" className=" mt-2 ml-3 h-5" />
                    <h5 className="text-white mt-1 mx-2 ">English</h5>
                    <Image src={images.polygon} alt="" className="h-2 mt-3 mr-5" />
                </button>
            </div>
        </div>
    </div>
</nav>
<div className="light-purple">
    <div className="grid grid-cols-2 divide-x position">
        <div className="text-white bg-transparent margin-left mt-32">
            <h2><span className="h2 Iniverse">Iniverse:</span> A Blockchain <br />Ecosystem where true talents and
                <br />clients meet and collaborate altogether
            </h2>
            <p className="my-3">Iniverse is a freelancing platform based on Blockchain technology. <br />
                It revolutionizes the way clients and freelancers work together for success.</p>
            <button className="border flex my-3 px-4 rounded-3">
                <Image src={images.share} alt="" className="mt-2 mb-2" />
                <p className="mt-2 mb-2 ms-2">View White Paper</p>
            </button>
            <div className="flex space-x-4 mt-2">
                <div><Image src={images.twitter} alt="" /></div>
                <div><Image src={images.teli} alt="" /></div>
                <div><Image src={images.in_image} alt="" /></div>
                <div><Image src={images.play_image} alt="" /></div>
            </div>
        </div>
        <div className="text-white margin-right mt-24 hedbox rounded-4 space-y-0">
            <h4 className="text-center py-3">Stage 1: BUY NOW BEFORE <br />PRICE INCREASE!</h4>

            <div className="flex space-x-5 ml-8">
                <div className="h-12 w-16 box-4 rounded-3">
                    <h5 className="text-purple-700 text-center mt-2 pt-1">200</h5>
                </div>
                <div className="h-12 w-16 box-4 rounded-3">
                    <h5 className="text-purple-700 text-center mt-2 pt-1">32</h5>
                </div>
                <div className="h-12 w-16 box-4 rounded-3">
                    <h5 className="text-purple-700 text-center mt-2 pt-1">45</h5>
                </div>
                <div className="h-12 w-16 box-4 rounded-3">
                    <h5 className="text-purple-700 text-center mt-2 pt-1">52</h5>
                </div>
            </div>
            <div className="flex space-x-9 ml-12">
                <div>
                    <p>Days</p>
                </div>
                <div>
                    <p>Hours</p>
                </div>
                <div>
                    <p>Mintes</p>
                </div>
                <div>
                    <p>Seconds</p>
                </div>
            </div>
            <Image src={images.bar_image} alt="" className="px-4" />
            <p className="para text-center">USDT Raised: $124.855 / $5,000,000</p>
            <p className="para text-center">Your purchased INI = 0</p>
            <div className="px-4"><button className="border rounded-5 w-100">1 INI = $0.1</button></div>
            <div className="px-4 my-3"><button className="Wallet rounded-5 w-100 text-purple-700">Connect Wallet</button></div>
            <div className="px-4 mb-2"><button className="bg-white rounded-5 w-100 text-purple-700">Need Our Help?</button></div>
            <p className="text-yellow-600 text-center mt-3">LISTING PRICE: $0.3</p>

        </div>
        <hr className="hrtag mt-4" />
        <div className="flex mt-16">
            <div><Image src={images.br_One} alt="" className="logo" /></div>
            <div><Image src={images.br_Two} alt="" className="logo1" /></div>
            <div><Image src={images.br_Three} alt="" className="logo1" /></div>
            <div><Image src={images.br_Four} alt="" className="logo1" /></div>
            <div><Image src={images.br_Five} alt="" className="logo1" /></div>
            <div><Image src={images.br_Six} alt="" className="logo1" /></div>
            <div><Image src={images.br_Seven} alt="" className="logo1" /></div>
        </div>
    </div>

    <div className="background-image"></div>
</div>
<div className="bigbutton flex">
    <div className="px-5 my-5">
        <div className="flex bglogo mt-5 ml-24">
            <div><Image src={images.bg_logo} alt="" /></div>
            <div className="mt-4 ml-40 ">
                <button className="audit text-white ml-20 mt-2  border-2 rounded-3 px-4">Audit and KYC | 100% Secured
                    and Verified</button> <br />
                <button className=" border-2 rounded-3 px-4 ml-32 secbut">
                    <div className="flex mt-1 ">
                        <Image src={images.kyc_Two} alt="" />
                        <span className="text-white">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
                        <Image src={images.kyc_Three} alt="" />
                    </div>
                </button>
            </div>
        </div>
        <Image src={images.colorBox} alt="" className="colorbox " />
        <Image src={images.shadowBox} alt="" className="shadobox " />
    </div>
</div>
<div className="box30">
    <div className="text-center text-white pt-4">
        <h1>Why Iniverse?</h1>
        <h6>Iniverse has a lot of advantages compared to existing or upcoming freelancing platforms.</h6>
    </div>
    <div className="flex ml-24 mt-5 space-x-10">
        <div className="boc01 rounded-3">
            <Image src={images.box_ThreeThree} alt="" className="p-4 mt-3" />
        </div>
        <div><Image src={images.box_ThreeOneZero} alt="" className="arro" /></div>
        <div className="boc01 rounded-3">
            <Image src={images.box_Four} alt="" className="ml-40 my-6" />
            <h5 className="text-center box3 my-6">Fully Decentralized</h5>
            <p className="text-center text-white px-4">There are no privileged administrators who decide the fate of
                freelancers and clients at their will. Everything is decided
                by clients and freelancers in a decentralized manner.</p>
        </div>
        <div className="boc01 rounded-3">
            <Image src={images.box_Four} alt="" className="ml-40 my-3" />
            <h5 className="text-center box3 my-2">Lowest fee for
                freelancers and clients in the world</h5>
            <p className="text-center text-white px-2">Iniverse's main purpose is not to make great profits from
                platform operations but to create a comfortable environment for both clients and freelancers to work
                together for mutual success and get fair pay by using blockchain technology. Rather than other
                freelancing platforms, which charge high fees, there is no commission for clients and only a 2% fee
                for freelancers for site operation.</p>
        </div>
        <div><Image src={images.box_ThreeNine} alt="" className="arro" /></div>
    </div>
</div>
<div className="sld4bg">
    <div className="over-slide1 items-center">
        <div className="flex ml-64 mt-5">
            <div className="text-white mt-3 ml-32">
                <h3>For more detail, please read our</h3>
            </div>
            <button
                className=" bg-white text-purple-600 rounded-2 items-center btn-block mx-3 h-10 mt-3 px-4 Paper">White
                Paper !</button>
        </div>
        <div className="table-border">
            <div className="border-2 table mt-5 rounded-4">
                <div className="flex my-4 space-x-5">
                    <div className="ml-32 text-white">
                        <Image src={images.tblo_One} alt="" className="border-none size bg-transparent" />
                    </div>
                    <div className="text-white">
                        <Image src={images.tblo_Two} alt="" className="border-none size bg-transparent" />
                    </div>
                    <div className="text-white">
                        <Image src={images.tblo_Three} alt="" className="border-none size bg-transparent" />
                    </div>
                    <div className="text-white">
                        <Image src={images.tblo_Four} alt="" className="border-none size bg-transparent" />
                    </div>
                    <div className="text-white ">
                        <Image src={images.tblo_Five} alt="" className="border-none size bg-transparent" />
                    </div>
                </div>
                <table className="table-auto border-separate text-white" cellSpacing="20">
                    <tbody>
                        <tr className='text-white'>
                            <td className="w-2/12 rounded-4 pl-4 ">Client&nbsp;Fee</td>
                            <td className="w-2/12 rounded-4 text-center bg-white text-purple-700">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                        </tr>
                        <tr className='text-white'>
                            <td className="rounded-4 pl-4">Freelancer&nbsp;Fee</td>
                            <td className="w-2/12 rounded-4 text-center">5%</td>
                            <td className="w-2/12 rounded-4 text-center">5%</td>
                            <td className="w-2/12 rounded-4 text-center">5%</td>
                            <td className="w-2/12 rounded-4 text-center">5%</td>
                            <td className="w-2/12 rounded-4 text-center">5%</td>
                        </tr>
                        <tr className='text-white'>
                            <td className="rounded-4 pl-4">Withdrawal&nbsp;Fee</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                            <td className="w-2/12 rounded-4 text-center">0</td>
                        </tr>
                        <tr className='text-white'>
                            <td className="rounded-4 pl-4">Decentralized</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                        </tr>
                        <tr className='text-white'>
                            <td className="pe-5 rounded-4 pl-4">Refund&nbsp;Guarantee</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                        </tr>
                        <tr className='text-white'>
                            <td className="rounded-4 pl-4">Staff&nbsp;Recruitment</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                            <td className="w-2/12 rounded-4 text-center">Yes</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</div>
 <div className="sld4bg"> {/*<!-- bgimage --> */}
    <div className="text-white pt-3 text-center">
        <h3>How To Buy $ini Token?</h3>
    </div>
    <p className="para text-center text-white pt-3">The $ini token is your chance to be a part of a revolutionary new
        blockchain freelancing platform that promises to reform the freelancing industry. By purchasing $ini tokens
        during the presale, <br />you'll be taking a first step toward becoming a part of the thriving Iniverse
        Ecosystem.</p>
    <div className="sld5over mt-4 rounded-4">
        <Image src={images.slide_FiveTwo} alt="" className="mt-4 sld52 mb-3 h-10 w-10" />
        <h4 className="text-white text-center">Buy With USDT</h4>
        <p className="text-white text-center p-3">If you have USDT in your wallet, select the relevant network and enter
            how much USDT you wish to swap for $ini tokens. Approve the use of USDT, take note of gas cost, and
            confirm the transaction.</p>
    </div>
    <div className="flex space-x-10 sld5bx0">
        <div><Image src={images.box_ThreeOneZero} alt="" className="mt-32" /></div>
        <div className="sld5bx1 rounded-4">
            <Image src={images.slide_FiveOne} alt="" className="mt-4 sld52 mb-3 h-8 w-20" />
            <h4 className="text-white text-center">Buy With ETH or BNB</h4>
            <p className="text-white text-center p-3">If you have Ether or BNB in your wallet, select the relevant
                network and enter how much Ether or BNB you wish to swap for $ini tokens. Note the gas cost, and
                confirm the transaction in your wallet.</p>
        </div>
        <div className="sld5bx1 rounded-4">
            <Image src={images.slide_FiveThree} alt="" className="mt-4 sld52 mb-3 h-10 w-10" />
            <h4 className="text-white text-center">Buy With Card</h4>
            <p className="text-white text-center p-3">You can also purchase $ini tokens using your bank card. First
                connect your wallet, then select card option in the widget, and fill out an order. Your tokens will
                be sendt to your connected wallet.</p>
        </div>
        <div><Image src={images.box_ThreeNine} alt="" className="mt-32" /></div>
    </div>
    <div className="sld6bg text-white text-center">
        <h2 className="pt-8 mb-2">New to Crypto Purchase?</h2>
        <p>Do you want to purchase $INI token and join the new era of decentralized freelancing, but not sure where
            to start?</p>
        <p>Don't worry. You can exchange your fiat money to cryptocurrency easily on <span
                className="sld6">THIS</span><br />
            Or Fill <span className="sld6">OUR FORM</span>, and one of our team members will guide you through the
            process.</p>
    </div>
</div>
<div className="flex sld7 mt-20 ml-24 space-x-64">
    <div className="sld7col1 mt-5">
        {/* <!-- row1 --> */}
        <Image src={images.double_AA} alt="" className="aa" />
        <Image src={images.double_BB} alt="" className="bb" />
        <div className="sdbox p-4">
            <h3 className="text-white">23' Q1</h3>
            <h5 className="sdboxtext">PROJECT PLANNING</h5>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Initial Project Plan</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Contract Development</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Presale ICO Development</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Seed Funding</p>
                </div>
            </div>
        </div>

        {/* <!-- row2 --> */}
        <Image src={images.row_img_one} alt="" className="img1 mt-32" />

        {/* <!-- row3 --> */}
        <Image src={images.double_AA} alt="" className="aa2" />
        <Image src={images.double_BB} alt="" className="bb2" />
        <div className="sdbox p-4 mt-32">
            <h3 className="text-white">23' Q3</h3>
            <h5 className="sdboxtext">DEVELOPMENT</h5>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Freelancing Platform Development</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Staking platform Development</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">EcoSystem extending</p>
                </div>
            </div>
        </div>

        {/* <!-- row4 --> */}
        <Image src={images.row_img_Fourone} alt="" className="img1 mt-32" />

        {/* <!-- row5 --> */}
        <Image src={images.double_AA} alt="" className="aa2" />
        <Image src={images.double_BB} alt="" className="bb2" />
        <div className="sdbox p-4 mt-32">
            <h3 className="text-white">24' Q1</h3>
            <h5 className="sdboxtext">APP LAUNCH</h5>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Freelancing platform Launch</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Partnership construction</p>
                </div>
            </div>
        </div>
    </div>
    <div className="sld7col2"><Image src={images.stline} alt="404" className="stline" /></div>
    <div className="sld7col3">
        {/* <!-- row1 --> */}
        <Image src={images.row_OneTwo} alt="" className="img" />

        {/* <!-- row2 --> */}
        <Image src={images.double_AA}alt="" className="aa1" />
        <Image src={images.double_BB} alt="" className="bb1" />
        <div className="sdbox p-4 mt-32">
            <h3 className="text-white">23' Q2</h3>
            <h5 className="sdboxtext">PRESALE</h5>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Contract Audit & Deployment</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Presale ICO Launch</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">EcoSystem Construction</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Freelancing Platform Development</p>
                </div>
            </div>
        </div>

        {/* <!-- row3 --> */}
        <Image src={images.row_Three_Two} alt="" className="img1 mt-32" />

        {/* <!-- row4 --> */}
        <Image src={images.double_AA} alt="" className="aa1" />
        <Image src={images.double_BB} alt="" className="bb1" />
        <div className="sdbox p-4 mt-32">
            <h3 className="text-white">23' Q4</h3>
            <h5 className="sdboxtext">LISTING</h5>
            <div className="flex">
                <div><Image src={images.row_double_Two}  alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Freelancing Platform Development</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">Staking platform Launch</p>
                </div>
            </div>
            <div className="flex">
                <div><Image src={images.row_double_Two} alt="" className="txtbx3 mt-2" /></div>
                <div>
                    <p className="text-white ms-2 mt-0.5 mb-0">CEX & DEX Listing</p>
                </div>
            </div>
        </div>

        {/* <!-- row5 --> */}
        <Image src={images.row_Five_Two} alt="" className="img1 mt-32" />
    </div>
</div>

<div className="sld7bg">{/* <!-- bgimage --> */}</div>
<div className="sld7bg">{/* <!-- bgimage --> */}</div>
<div className="sld7bg">{/* <!-- bgimage --> */}</div>

{/* // <!-- slide 8 --> */}
<div className="sld8">
    <h2 className="Address text-center mt-3">Address</h2>
    <button className="border flex px-3 rounded-3 marleft my-2">
        <p className='mt-3 text-white'>0xD8b04b7F7a1058C6Fef87991aFEbb4a6f6bCb532</p>
        <Image src={images.copy_icon} alt="" className="mt-3 ms-3" />
    </button>
    <p className="text-center mt-1 text-white">Please note that you should not send any tokens to this address directly,
        or you will lose them permanently.</p>
    <div className="flex space-x-16 ml-56 text-center">
        <div className="sld8box h-8 w-30 rounded-3">
            <p className="text-purple-700 mt-1 mb-0">Symbol</p>
            <h6 className="text-purple-700 my-0 py-0">$ini</h6>
        </div>
        <div className="sld8box h-8 w-30 rounded-3">
            <p className="text-purple-700 mt-1 mb-0">Decimals</p>
            <h6 className="text-purple-700 my-0 py-0">18</h6>
        </div>
        <div className="sld8box h-8 w-30 rounded-3">
            <p className="text-purple-700 mt-1 mb-0">Network</p>
            <h6 className="text-purple-700 my-0 py-0">Ethereum</h6>
        </div>
        <div className="sld8box h-8 w-30 rounded-3">
            <p className="text-purple-700 mt-1 mb-0">Supply</p>
            <h6 className="text-purple-700 my-0 py-0">2,000,000,000</h6>
        </div>
    </div>
</div>

{/* // <!-- slide 9 -- > */}
<div className="sld9 ">
    <div className="flex mt-5 ms-5">
        <div>
            <div className="flex">
                <div className="space-y-8 ms-5">
                    <div><Image src={images.color_BoxOne} alt="" /></div>
                    <div><Image src={images.color_BoxTwo} alt="" /></div>
                    <div><Image src={images.color_BoxThree} alt="" /></div>
                    <div><Image src={images.color_BoxFour} alt="" /></div>
                    <div><Image src={images.color_BoxFive} alt="" /></div>
                    <div><Image src={images.color_BoxSix} alt="" /></div>
                    <div><Image src={images.color_BoxSeven} alt="" /></div>
                </div>
                <div className="space-y-10 text-white ms-5">
                    <h5>Seed Funding</h5>
                    <h5>Presale</h5>
                    <h5>Advisors</h5>
                    <h5>Partner</h5>
                    <h5>Team</h5>
                    <h5>Reserved/EcoSystem</h5>
                    <h5>Liquidity</h5>
                </div>
            </div>
        </div>
        <div>
            <Image src={images.color_Circle_img} alt="" className="sld9img1" />
        </div>
    </div>
</div>

<div className="sld7bg">{/* <!-- bgimage --> */}</div>

<div className="sld10">
    <h3 className='text-white text-center'>Our Team</h3>
    <div className="flex space-x-8 mt-28">
        <div className="sld10box1 rounded-5">
            <Image src={images.team_MemberOne} alt="" className="w-40 h-40 -mt-16 sld10im1" />
            <Image src={images.In} alt="" className="ms-3" />
            <h4 className="text-white ms-3 mt-2">Kikuchi Isao</h4>
            <p className="CEO ms-3 mb-1">CEO</p>
            <p className="px-3 text-white">Muramoto is a successful CEO with a background in business administration and
                management. With two decades of business model development experience, she has gained a distinct
                understanding of the demands and difficulties faced by the freelancing industry in today's digital
                landscape.</p>
        </div>
        <div className="sld10box1 rounded-5">
            <Image src={images.team_MemberTwo} alt="" className="w-40 h-40 -mt-16 sld10im1" />
            <Image src={images.In} alt="" className="ms-3" />
            <h4 className="text-white ms-3 mt-2">Chris Bright</h4>
            <p className="CEO ms-3 mb-1">CTO</p>
            <p className="px-3 text-white">Chris is a passionate and experienced CTO with more than 16 years of software
                development history. He has led several technically tough projects to success and now works as the
                CTO of SoftTalents, a company that specializes in Web3 technology. With his knowledge and innovative
                approach, Chris plays a pivotal role in Iniverse project development.</p>
        </div>
        <div className="sld10box1 rounded-5">
            <Image src={images.team_MemberThree} alt="" className="w-40 h-40 -mt-16 sld10im1" />
            <Image src={images.In} alt="" className="ms-3" />
            <h4 className="text-white ms-3 mt-2">William Cheung</h4>
            <p className="CEO ms-3 mb-1">CMO</p>
            <p className="px-3 text-white">William is an enthusiastic CMO with more 5 years of experience in community
                building, marketing, public and client relations, content writing and creation, and social media
                management including projects in web3, gamefi, and defi. With his devoted marketing activity,
                William is a driving force of ecosystem construction.</p>
        </div>
    </div>
    <div className="flex space-x-8 mt-32">
        <div className="sld10box1 rounded-5">
            <Image src={images.team_MemberFour} alt="" className="w-40 h-40 -mt-16 sld10im1" />
            <Image src={images.In} alt="" className="ms-3" />
            <h4 className="text-white ms-3 mt-2">Jan Markis</h4>
            <p className="CEO ms-3 mb-1">Head of Site Dev Team</p>
            <p className="px-3 text-white">Jan is a driven software developer with an exceptional ability to suggest
                outstanding solutions for difficult problems. His passion for technology and his determination to
                succeed make him an asset to any development team.</p>
        </div>
        <div className="sld10box1 rounded-5">
            <Image src={images.team_MemberFive} alt="" className="w-40 h-40 -mt-16 sld10im1" />
            <Image src={images.In} alt="" className="ms-3" />
            <h4 className="text-white ms-3 mt-2">Elmira Amgalan</h4>
            <p className="CEO ms-3 mb-1">Web & UI/UX Designer</p>
            <p className="px-3 text-white">Elmira is a talented Web & UI/UX Designer with 8 years of experience. She has
                designed lots of excellent websites and UI/UX for various software companies worldwide. Her artistic
                eyes and inspiration make our platform a more brilliant one.</p>
        </div>
        <div className="sld10box1 rounded-5">
            <Image src={images.team_MemberSix} alt="" className="w-40 h-40 -mt-16 sld10im1" />
            <Image src={images.In} alt="" className="ms-3" />
            <h4 className="text-white ms-3 mt-2">Miyashita Koki</h4>
            <p className="CEO ms-3 mb-1">Head of Blockchain Team</p>
            <p className="px-3 text-white">As an experienced full-stack developer Miyashita has worked in the web, and
                blockchain spaces for more than 10 years. During this time he built dozens of modern and
                professional platforms that are today making profits for companies worldwide. His commitment to
                user-friendly solutions made his in-demand in the tech community.</p>
        </div>
    </div>
    <div className="sld11 mt-3">
        <div className="flex px-5">
            <div className="w-50 mt-24">

                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3">What is Iniverse?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2">Why Iniverse?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3 shadows">The main purpose of
                    Iniverse is not to provide centralized governance for privileged administrators. Everything is
                    decided by a decentralized consensus architecture, and it also only asks for the lowest fee in
                    the freelancing world.</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3 ">Where does the profit of
                    Iniverse come from?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3">How does $ini token owners
                    get income?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3">Where can I exchange my $ini
                    token?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3">When will Iniverse go
                    live?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3">How does Iniverse guarantee
                    refund for bad work?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3">How doese Iniverse prevent
                    bad activities?</button>
                <button className="text-white sld11box text-left ps-3 py-1 rounded-2 mb-3">How does Iniverse support
                    devoted participants?</button>
            </div>
            <div>
                <Image src={images.QAF} alt="" className="sld11img2 mt-24" />
            </div>
        </div>
    </div>
    <hr className="hrtag2" />
    <div className="sld12 mt-5">
        <div className="flex">
            <div className="mr-64">
                <Image src={images.logo} alt="" className="mr-64" />
            </div>
            <div className="ml-48">
                <div className="flex space-x-4 ml-16">
                    <div><Image src={images.twitter} alt="" /></div>
                    <div><Image src={images.teli} alt="" /></div>
                    <div><Image src={images.in_image} alt="" /></div>
                    <div><Image src={images.play_image} alt="" /></div>
                </div>
            </div>
        </div>
        <hr className="hrtag2 " />
        <div className="flex mt-5 text-white space-x-32">
            <div>
                <p>1-chome 1-8 3F
                    Shinshukuku Hyakunincho
                    Tokyo</p>
            </div>
            <div>
                <p className="text-center">Cryptocurrency may be unregulated in your jurisdiction. The value of
                    cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other
                    taxes applicable in your jurisdiction.</p>
            </div>
            <div>
                <p className="text-yellow-600">support@iniverse.com</p>
            </div>
        </div>
        <hr className="hrtag2 " />
        <div className="flex mt-5">
            <div className="">
                <h5 className="text-white">Privacy Policy&nbsp;&nbsp;|&nbsp;&nbsp;Cookies&nbsp;&nbsp;|&nbsp;&nbsp;Terms
                    of Services</h5>
            </div>
            <div className="">
                <button className="text-white rounded-3 cpwrt px-3 pt-2">
                    <h6><span className="wrt">© 2023 Iniverse</span> All rights reserved</h6>
                </button>
            </div>
        </div>
    </div>
</div>
<div className="sld7bg">{/* <!-- bgimage --> */}</div>
<div className="sld7bg">{/* <!-- bgimage --> */}</div>
<div className="sld11bg">{/* <!-- bgimage --> */}</div>
</>
  )
}

export default Home;