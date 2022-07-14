import { FC } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../assets/AssetHelpers";

const Home: FC = () => {
    return (
        <>
            <main id="club-main">
                <section id="planmenu" className="sbfc-bg">
                    <div className="container-fluid p-0">
                        <div className="text-center sbfc-large-icon">
                            <img className="img-fluid" src={toAbsoluteUrl("/assets/images/hero-bg-1.png")} alt="" />
                        </div>
                    </div>
                </section>

                <section className="content-thumb-wrapp">
                    <div className="container">
                        <div className="club-title">
                            <h2>WELCOME TO THE <br /> SHARK BOY FIGHT CLUB</h2>
                        </div>
                        <div className="row revers-tab">
                            <div className="col-lg-7">
                                <div className="content-copy pe-5">
                                    <p>SBFC is a collection of 8,888 exclusive Shark Boy generated Non Fungible Tokens (NFTS) -
                                        unique digital collectibles living on the Ethereum blockchain. You'll be able to
                                        purchase, trade, train and compete your Sharks here at the SBFC’s FighterVerse. </p>
                                    <p>Your SBFC NFTS double as your membership card, and grants access to the exclusive SBFC
                                        Merch and parties. Join our discord channel for pre-sale date and start getting your
                                        Sharks trained for $LOX to later use in our game. We love our community. </p>
                                    <p>See you in the FighterVerse.</p>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <div className="content-thumb">
                                    <img src={toAbsoluteUrl("/assets/images/Layer-6.png")} alt="" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                        <div id="salesoon" className="salesoon-bg">
                            <div id="start-soon" className="text-center start-soon">
                                <h2>PUBLIC SALE IS LIVE</h2>
                                <div className="soon-text">
                                    <p>FOLLOW OUR DISCORD CHANNEL TO JOIN THE PRE-SALE EVENT.</p>
                                    <p><Link to="/mint">MINT NOW</Link></p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-text-wrapp">
                                    <div className="icon-w">
                                        <img src={toAbsoluteUrl("/assets/images/sprite20.png")} alt="" className="img-fluid" />
                                    </div>
                                    <div className="text-w">
                                        <h4>8,888 Ultra rare SBFC Tokens</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-text-wrapp">
                                    <div className="icon-w">
                                        <img src={toAbsoluteUrl("/assets/images/sprite23.png")} alt="" className="img-fluid" />
                                    </div>
                                    <div className="text-w">
                                        <h4>Ownership and commercial usage rights given to the consumer over their NFT</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-text-wrapp">
                                    <div className="icon-w">
                                        <img src={toAbsoluteUrl("/assets/images/sprite25.png")} alt="" className="img-fluid" />
                                    </div>
                                    <div className="text-w">
                                        <h4>Fair Launch, fair distribution: All Sharks are equal</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="icon-text-wrapp">
                                    <div className="icon-w">
                                        <img src={toAbsoluteUrl("/assets/images/sprite18.png")} alt="" className="img-fluid" />
                                    </div>
                                    <div className="text-w">
                                        <h4>Roadmap to FighterVerse</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sec-whitelist">
                    <div className="container">
                        <div className="club-title">
                            <h2>WHITELIST</h2>
                        </div>
                        <div className="club-title-copy mt-5">
                            <p>25% of the supply (2,222 NFTs) will be made available to qualified Whitelist members at a special
                                discount.</p>
                            <p>JOIN THE SHARK BOY FIGHT DISCORD community today to reserve your seat on your trip to the
                                FIGHTERVERSE!</p>
                        </div>
                        <div className="text-center mt-5">
                            <Link className="btn btn-yellow" to="/">JOIN DISCORD</Link>
                        </div>
                    </div>
                </section>

                <section className="sec-evalution">
                    <div className="container">
                        <div className="club-title">
                            <h2>EVOLUTION</h2>
                            <div className="club-title-copy text-center">
                                <p>Shark Boy Fight Club is not just an avatar project. Collect the SBFC NFT to earn $LOX.</p>
                            </div>
                        </div>
                        <div className="row col-reverse-md align-items-center">
                            <div className="col-lg-6">
                                <div className="evol-text-copy evol-text-width">
                                    <h3>TRAINING (STAKING)</h3>
                                    <p>Sharksholders can start training their sharks for $LOX which will be used for a number of
                                        future utilities. You will want to earn as much $LOX as you can to later use in the
                                        SBFC’s FighterVerse. </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="evol-thumb text-center">
                                    <img className="img-fluid" src={toAbsoluteUrl("/assets/images/evol-img.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row tcgame col-reverse-md align-items-center flex-row-reverse">
                            <div className="col-lg-6">
                                <div className="evol-text-copy w-100">
                                    <h3>TRADING CARD GAME</h3>
                                    <p>Sharkholders will present 4 SBFC NFTS to play, if you do not hold 4 NFTS, you can use the
                                        $LOX you earn from staking to borrow an NFT from the marketplace (price determined by
                                        Sharkholders). Percentage of our OS Royalties will be added to $LOX liquidity pool. So
                                        as this project grows, the value of $LOX will increase. More details to come on the
                                        Tokenomics of $LOX and $CAVIAR.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="evol-thumb text-center">
                                    <img className="img-fluid" src={toAbsoluteUrl("/assets/images/card-game.png")} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row tcgame col-reverse-md align-items-center">
                            <div className="col-lg-6">
                                <div className="evol-text-copy evol-text-width">
                                    <h3>SBFC VX</h3>
                                    <p>SBFC holder will get a chance to own SBFC VX as a custom playable Metaverse Avatar. SBFC
                                        VX NFT will be a playable avatars into the Fighterverse or Sandbox game. </p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="evol-thumb text-center">
                                    <img className="img-fluid" src={toAbsoluteUrl("/assets/images/sbfc-vx.png")} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="the-specs sec-desc" style={{ display: "none" }}>
                    <div className="container">
                        <div className="club-title">
                            <h2>CATCH THEM ALL</h2>
                            <div className="club-title-copy">
                                <p>SOME SHARKS ARE RARER THAN OTHERS</p>
                            </div>
                        </div>
                        <div className="specs-bg-text text-center">
                            <div className="specs-bg">
                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/sbfc-2.gif")} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="roadmapmenu" className="roadmap sec-desc" style={{ display: "none" }}>
                    <div className="container">
                        <div className="club-title">
                            <h2>ROADMAP</h2>
                            <div className="club-title-copy">
                                <p>The end goal is to build our very own FighterVerse for us Sharks to hang and Compete. </p>
                            </div>
                        </div>
                        <div className="percentage-row">
                            <div className="row">
                                <div className="col-md-2 percentage-text">
                                    <h5>0% </h5>
                                </div>
                                <div className="col-md-10 percentage-desc">
                                    <p>Fair Launch, fair distribution: Join discord for pre-sale info.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 percentage-text">
                                    <h5>15%</h5>
                                </div>
                                <div className="col-md-10 percentage-desc">
                                    <p>5 very rare Sharks will be airdropped to random early Sharksholders. </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 percentage-text">
                                    <h5>30%</h5>
                                </div>
                                <div className="col-md-10 percentage-desc">
                                    <p>Member-Exclusive SBFC X CDG Merch unlocked, featuring Limited tees, hoodies and digital
                                        drops. </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 percentage-text">
                                    <h5>60%</h5>
                                </div>
                                <div className="col-md-10 percentage-desc">
                                    <p>Training room unlocked. Sharksholders can start training their sharks for $LOX. You will
                                        want to earn as much $LOX as you can to later use in the SBFC’s FighterVerse.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 percentage-text">
                                    <h5>80%</h5>
                                </div>
                                <div className="col-md-10 percentage-desc">
                                    <p>Community Token launched. $CAVIAR will be airdropped to each Sharksholder. It will serve
                                        as our community token for the top contributors. </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-2 percentage-text">
                                    <h5>100%</h5>
                                </div>
                                <div className="col-md-10 percentage-desc">
                                    <p>FighterVerse launched. Welcome to SBFC.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="the-specs spaces-bg sec-desc">
                    <div className="container">
                        <div className="club-title">
                            <h2>THE SPECS</h2>
                            <div className="club-title-copy">
                                <p>OVER 180 possible traits. WE FIGHT IN STYLE. DRIPS DRIPS.</p>
                            </div>
                        </div>
                        <div className="specs-bg-text text-center">
                            <div className="specs-bg">
                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/Layer--7.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="editions-sec sec-desc">
                    <div className="container-fluid">
                        <div className="club-title">
                            <h2>EDITIONS</h2>
                            <div className="club-title-copy">
                                <p>Check out these legendary triats that appear only in their editions</p>
                            </div>
                        </div>
                        <div className="edition-owl">
                            <div className="edition-slide owl-carousel owl-theme" style={{display: "flex"}}>
                                <div className="item">
                                    <Link className="edition-i--link" to="/">
                                        <div className="edition-i--box">
                                            <div className="edition-i--img">
                                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/edition-thumb.png")} alt="" />
                                            </div>
                                            <h3 className="edition-i--text"> 0 - 1000 </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link className="edition-i--link" to="/">
                                        <div className="edition-i--box">
                                            <div className="edition-i--img">
                                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/edition-thumb.png")} alt="" />
                                            </div>
                                            <h3 className="edition-i--text"> 0 - 1000 </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link className="edition-i--link" to="/">
                                        <div className="edition-i--box">
                                            <div className="edition-i--img">
                                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/edition-thumb.png")} alt="" />
                                            </div>
                                            <h3 className="edition-i--text"> 1250 - 2000 </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link className="edition-i--link" to="/">
                                        <div className="edition-i--box">
                                            <div className="edition-i--img">
                                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/edition-thumb.png")} alt="" />
                                            </div>
                                            <h3 className="edition-i--text"> 2001 - 3000 </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link className="edition-i--link" to="/">
                                        <div className="edition-i--box">
                                            <div className="edition-i--img">
                                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/edition-thumb.png")} alt="" />
                                            </div>
                                            <h3 className="edition-i--text"> 3001 - 4000 </h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="item">
                                    <Link className="edition-i--link" to="/">
                                        <div className="edition-i--box">
                                            <div className="edition-i--img">
                                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/edition-thumb.png")} alt="" />
                                            </div>
                                            <h3 className="edition-i--text"> 4001 - 5000 </h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="teammenu" className="the-team sec-desc">
                    <div className="container">
                        <div className="club-title">
                            <h2>THE TEAM</h2>
                        </div>
                        <div className="team-info-copy">
                            <p>One day, 4 friends who grew up playing video game & watching Japanese animation(+ tons of
                                Coachella and EDM Festivals :P) decided to have some fun in the NFT world. Start out with some
                                random sketches on bar napkins, turnt into a collection of Shark Boy NFTS. </p>
                            <p>Our team strongly believes in our community. We welcome all ideas and suggestions for the
                                project, and are open to adding more members to the team to expand our never ending
                                FighterVerse. Join our discord for more info.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-icon">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/2770.png")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>FUrexx</h4>
                                        <p>Beat everyone at Street Fighter but sucks at Mortal Kombat.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-icon">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/2771.png")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>L30n4rd0384</h4>
                                        <p>Professional Pokemon card traders.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-icon">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/2772.png")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>MiniDidi</h4>
                                        <p>Large format painting artist. Creative director of the project.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-icon">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/2773.png")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>JungHoV</h4>
                                        <p>Been building Blockchain APPS since 2017. Recently interviewed by Benzinga.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-icon">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/Lance210.png")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>Lance210</h4>
                                        <p>OG content creator. 6.6M Youtube / IG followers. Bringing good vibe to the project.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-icon">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/JammMm.png")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>JammMm</h4>
                                        <p>Young entrepreneur, started and sold a few companies at the age of 25. Marketing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="team-item">
                                    <div className="team-icon">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/cassie.png")} alt="" />
                                    </div>
                                    <div className="team-text">
                                        <h4>CasY</h4>
                                        <p>Top social influencer manager in US. Help recruit new Shark Boys and Shark Girls to
                                            join the club.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="faqs-sec">
                    <div className="container">
                        <div className="club-title">
                            <h2>FAQ'S</h2>
                        </div>
                        <div className="faq--qans">
                            <div className="faq--acc">
                                <button className="accordion">
                                    <span>HOW MUCH WILL IT COST TO MINT A SHARK BOY</span>
                                </button>
                                <div className="panel">
                                    <p>Please join our discord server for pre sale info. Pre-Sale: 0.05 ETH + gas fees Public
                                        Sale: 0.08 ETH + gas fees</p>
                                </div>
                            </div>

                            <div className="faq--acc">
                                <button className="accordion">
                                    <span>WHere WILL I BE ABLE TO MINT?</span>
                                </button>
                                <div className="panel">
                                    <p>The minting event for the pre-sale and the public launch will take place on our one and
                                        only website, SharkBoyFightClub.com . You will be able to mint using ETH and a MetaMask
                                        wallet. Once minting is completed, you will be able to view your Shark Boy Fight Club in
                                        your MetaMask wallet and on OpenSea.</p>
                                </div>
                            </div>

                            <div className="faq--acc">
                                <button className="accordion">
                                    <span>When is the presale?</span>
                                </button>
                                <div className="panel">
                                    <p>The presale starts now. There will be 2,222 spots in the presale, and all the whitelisted
                                        members will be guaranteed of minting one Shark Boy Fight Club at a discounted price.
                                    </p>
                                </div>
                            </div>

                            <div className="faq--acc">
                                <button className="accordion">
                                    <span>When is the PUBLIC SALE?</span>
                                </button>
                                <div className="panel">
                                    <p>The public sale will take place when our discord hit 75k members, directly on our
                                        website, SharkBoyFightClub.com</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="sec-benzinga">
                    <div className="container">
                        <div className="club-title">
                            <h2>AS SEEN ON BENZINGA</h2>
                        </div>
                        <div className="benzinga-bg-text text-center">
                            <img src={toAbsoluteUrl("/assets/images/benzinga-bg.png")} alt="" />
                            <div className="benzinga-bg">
                                <img className="img-fluid" src={toAbsoluteUrl("/assets/images/benzinga.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="sharkangle-sec sec-desc">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-4">
                                <div className="specs-bg-text text-center">
                                    <div className="specs-bg">
                                        <img className="img-fluid" src={toAbsoluteUrl("/assets/images/shark-angels.png")} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="club-title text-left">
                                    <h2>OFFICIAL CHARITY PARTNER</h2>
                                    <div className="club-title-copy">
                                        <p>We are donating $1 PER NFT sold + 20K if we sold out to SharkAngels. By adopting a
                                            symbolic shark, you are helping to support our efforts to raise awareness of the
                                            critical issues sharks face and by doing so, protect these and other threatened
                                            species.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="community-sec sec-desc">
                    <div className="community-bg">
                        <img className="img-fluid w-100" src={toAbsoluteUrl("/assets/images/community-bg.png")} alt="" />
                    </div>
                    <div className="community-copy">
                        <div className="container">
                            <div className="club-title">
                                <h2>Join the community</h2>
                                <div className="club-title-copy">
                                    <p>Join our community and be part of the Shark Boy Fight Club. We have a lot of Sharks in
                                        the tank. Come grab some $LOX and $CAVIAR.</p>
                                </div>
                                {/* <div className="text-center mt-5">
                            <a className="btn btn-dark" href="#">JOIN DISCORD</a>
                        </div> */}
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}

export default Home