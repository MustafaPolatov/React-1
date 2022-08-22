import React from 'react'
import "./style.css"
import { FaTelegram } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export const Foter = () => {
  return (
    <div>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-8">
                        <div className='last'>
                            <ul className='ul-footer'>
                                <li className='zag'>Anatik Yapi</li>
                                <li className='fot-li'>Hakimizda</li>
                                <li className='fot-li'>Kullari Sartlam</li>
                                <li className='fot-li'>Gizlek Likerleri</li>
                                <li className='fot-li'>Litsim</li>
                            </ul>
                            <ul className='ul-footer'>
                                <li className='zag'>Hizmetlerimiz</li>
                                <li className='fot-li'>Hakimizda</li>
                                <li className='fot-li'>Kullari Sartlam</li>
                                <li className='fot-li'>Gizlek Likerleri</li>
                                <li className='fot-li'>Litsim</li>
                            </ul>
                            <ul className='ul-footer'>
                                <li className='zag'>Blog</li>
                                <li className='fot-li'>Hakimizda</li>
                                <li className='fot-li'>Kullari Sartlam</li>
                              
                            </ul>
                            <ul className='ul-footer'>
                                <li className='zag'>Iletsim</li>
                                <li className='fot-li'>Hakimizda</li>
                                <li className='fot-li'>Kullari Sartlam</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div>
                            <div className="row">
                                <div className="col-6">
                                    <div className='d-flex ms-5'>
                                        <p className='icon-in-from'><FaTelegram/></p>
                                        <p className='icon-in-from'><FaInstagram/></p>
                                        <p className='icon-in-from'><FaFacebookSquare/></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
