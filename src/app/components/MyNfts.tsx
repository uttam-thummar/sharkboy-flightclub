import { FC } from "react";
import { Link } from "react-router-dom";
import { toAbsoluteUrl } from "../../assets/AssetHelpers";

const MyNfts: FC = () => {
    return (
        <>
            <main id="club-main">
                <section
                    id="planmenu"
                    className="sbfc-bg"
                    style={{ backgroundImage: `url(${toAbsoluteUrl('images/hero-bg-1.png')})`}}
                >
                    <div className="container">
                        <div className="text-center sbfc-large-icon">
                            <img className="img-fluid" src={toAbsoluteUrl("/assets/images/hero-bg.png")} alt="" />
                        </div>
                    </div>
                </section>
                <section className="nfts-wrapp">
                    <div className="container">
                        <div className="nfts-box">
                            <div className="row">
                                <div className="col-xl-7 col-lg-6">
                                    <div className="nfts-title">
                                        <h2>MY NFTS</h2>
                                    </div>
                                    <div className="mt-4 nfts-dolls">
                                        <div className="nfts-lox lox-one"><strong>YOUR STAKE BALANCE</strong> <span><b>15.923 $LOX</b></span></div>
                                        <div className="nfts-lox lox-two"><strong>Next Reward Amount</strong> <span><b>7.223 $LOX</b></span></div>
                                        <div className="nfts-lox lox-three"><strong>ROI (14-Day Rate)</strong> <span><b>2.223 $LOX</b></span></div>
                                        <div className="nfts-lox lox-button">
                                            <Link className="btn btn-theme" to="/my-nfts">Claim</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="nfts-buttons">
                                        <div className="row">
                                            <div className="col-6">
                                                <Link className="btn btn-grey w-100" to="/my-nfts">unstake all</Link>
                                            </div>
                                            <div className="col-6">
                                                <Link className="btn btn-theme w-100" to="/my-nfts">Stake all 3</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="nfts-rows">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className="stake-box">
                                            <div className="stake-thumb">
                                                <Link className="stake-url" to="/my-nfts">
                                                    <img className="img-fluid" src={toAbsoluteUrl("/assets/images/steph-10.png")} alt="" />
                                                </Link>
                                            </div>
                                            <div className="stake-title d-flex">
                                                <h3># 1042</h3>
                                                <label className="form-check-label" htmlFor="flexCheckDefault">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                                                </label>
                                            </div>
                                            <div className="stake-button">
                                                <Link className="btn btn-theme" to="/my-nfts">STAKE</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className="stake-box">
                                            <div className="stake-thumb">
                                                <Link className="stake-url" to="/my-nfts">
                                                    <img className="img-fluid" src={toAbsoluteUrl("/assets/images/donnis-8.png")} alt="" />
                                                </Link>
                                            </div>
                                            <div className="stake-title d-flex">
                                                <h3># 924</h3>
                                                <label className="form-check-label" htmlFor="flexCheckDefault1">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault1" />
                                                </label>
                                            </div>
                                            <div className="stake-button">
                                                <Link className="btn btn-theme" to="/my-nfts">STAKE</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className="stake-box">
                                            <div className="stake-thumb">
                                                <Link className="stake-url" to="/">
                                                    <img className="img-fluid" src={toAbsoluteUrl("/assets/images/malaa.png")} alt="" />
                                                </Link>
                                            </div>
                                            <div className="stake-title d-flex">
                                                <h3># 152</h3>
                                                <label className="form-check-label" htmlFor="flexCheckDefault3">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault3" />
                                                </label>
                                            </div>
                                            <div className="stake-button">
                                                <Link className="btn btn-theme" to="/my-nfts">STAKE</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 col-6">
                                        <div className="stake-box">
                                            <div className="stake-thumb">
                                                <Link className="stake-url" to="/my-nfts">
                                                    <img className="img-fluid" src={toAbsoluteUrl("/assets/images/xxx.png")} alt="" />
                                                </Link>
                                            </div>
                                            <div className="stake-title d-flex">
                                                <h3># 2421</h3>
                                                <label className="form-check-label" htmlFor="flexCheckDefault4">
                                                    <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault4" />
                                                </label>
                                            </div>
                                            <div className="stake-button">
                                                <Link className="btn btn-theme" to="/my-nfts">STAKE</Link>
                                            </div>
                                        </div>
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

export default MyNfts;