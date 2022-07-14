import { FC } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../assets/AssetHelpers";

const Whitelist: FC = () => {
    return (
        <>
            <section className="sec-whitelist">
                <div className="container">
                    <div className="club-title">
                        <h2>WHITELIST</h2>
                    </div>
                    <div className="club-title-copy mt-5">
                        <p>25% of the supply (2,222 NFTs) will be made available to qualified Whitelist members at a special discount.</p>
                        <p>JOIN THE SHARK BOY FIGHT DISCORD community today to reserve your seat on your trip to the FIGHTERVERSE!</p>
                    </div>
                    <div className="text-center mt-5">
                        <Link className="btn btn-yellow" to="/whitelist">JOIN DISCORD</Link>
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
                                <p>Sharksholders can start training their sharks for $LOX which will be used for a number of future utilities. You will want to earn as much $LOX as you can to later use in the SBFC’s FighterVerse. </p>
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
                                <p>Sharkholders will present 4 SBFC NFTS to play, if you do not hold 4 NFTS, you can use the $LOX you earn from staking to borrow an NFT from the marketplace (price determined by Sharkholders). Percentage of our OS Royalties will be added to $LOX liquidity pool. So as this project grows, the value of $LOX will increase. More details to come on the Tokenomics of $LOX and $CAVIAR.</p>
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
                                <p>SBFC holder will get a chance to own SBFC VX as a custom playable Metaverse Avatar. SBFC VX NFT will be a playable avatars into the Fighterverse or Sandbox game. </p>
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
        </>
    )
}

export default Whitelist;