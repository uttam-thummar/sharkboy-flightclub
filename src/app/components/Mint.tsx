import { FC, useState } from "react";
import { toAbsoluteUrl } from "../../assets/AssetHelpers";

const Mint: FC = () => {
    const [walletConnected, setWalletConnected] = useState<boolean>(false);
    const [mintCount, setMintCount] = useState(1);
    const decrementMintCount = () => {
        if(mintCount > 1){
            setMintCount(mintCount - 1);
        }
    }
    const incrementMintCount = () => {
        if(!(mintCount >= 20)){
            setMintCount(mintCount + 1);
        }
    }
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
                            {!walletConnected && <div id="connect-wallet" className="connect-wallet">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="cw-listing">
                                            <ol>
                                                <li>CONNECT TO METAMASK</li>
                                                <li>APPROVE</li>
                                                <li>PICK QTY</li>
                                                <li>MINT</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cw-button text-center">
                                            <a className="btn btn-outline-dark" onClick={()=>setWalletConnected(true)}>Conntect wallet</a>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cw-copy">
                                            <p><b>SBFC MINTED: 8421</b></p>
                                            <p>0.04 ETH EACH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
                            {walletConnected && <div id="mint" className="mint">
                                <div className="row align-items-center">
                                    <div className="col-lg-4">
                                        <div className="cw-listing">
                                            <ol>
                                                <li>CONNECT TO METAMASK</li>
                                                <li>APPROVE</li>
                                                <li>PICK QTY</li>
                                                <li>MINT</li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cw-mint">
                                            <div className="cw-mflex">
                                                <div className="input-group number">
                                                    <div className="input-group-btn">
                                                        <button id="down" className="minus" onClick={(decrementMintCount)}>-</button>
                                                    </div>
                                                    <input type="text" id="myNumber" className="form-control input-number" value={mintCount} max="20" onChange={()=>{}} />
                                                    <div className="input-group-btn">
                                                        <button id="up" className="plus" onClick={incrementMintCount}>+</button>
                                                    </div>
                                                </div>
                                                <button className="btn btn-outline-dark">MINT</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cw-copy">
                                            <p><b>SBFC MINTED: 8421</b></p>
                                            <p>0.04 ETH EACH</p>
                                        </div>
                                    </div>
                                </div>
                            </div>}
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
            </main>
        </>
    )
}

export default Mint;