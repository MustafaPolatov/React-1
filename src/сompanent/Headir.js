import React from 'react'
import { AiFillApple } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import "./style.css"

export const Headir = () => {
  return (
    <div>
        <div className="tepa">
            <ul className='top-ul'>
                <li className='d-flex mt-2 low'><p className="me-1 icon-4"><GoLocation/></p> Hours-Lokoshin</li>
                <li>
                    <select name="" id="" className='mt-2 low' >
                        <option value="">Bodamzor</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </li>
                <li>
                <select name="" id="" className='select-10'>
                        <option value="">LogIn/MyWPL</option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </li>
            </ul>
        </div>

        <div className="menu">
            <ul className='left'>
                <li className='icon'>
                <AiFillApple/>
                </li>
                <li className='soz-1'>
                    AppleCompany
                </li>
            </ul>
            <ul className='right'>
                <li>
                    <div>
                        Search the <select name="" id="" className='rrr'>
                            <option value="1">Laptoop</option>
                            <option value="1">Hello</option>
                            <option value="1">Hello</option>
                        </select>
                    </div>
                </li>
                <li>
                    <div>
                        by <select name="" id=""  className='rrr'>
                            <option value="1">Apple</option>
                            <option value="1">MSI</option>
                            <option value="1">Acer</option>
                        </select>
                    </div>
                </li>
                <li>
                    <div className='d-flex tt'>
                        <input type="text" />
                        <div className='int-ic'>
                            <p className='icon-2'><AiOutlineSearch/></p>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div className="menu-2">
            <ul className='pas-menu'>
                <li>
                    <select  className='sel-gre' name="" id="">
                    <option value="1">Rect dizlayk</option>
                    <option value="2">GAys</option>
                    <option value="3">Bro</option>
                    </select>
                </li>
                <li>
                    <select  className='sel-gre'name="" id="">
                    <option value="1">Green garden</option>
                    <option value="2">Gays</option>
                    <option value="3">Bro</option>
                    </select>
                </li>
                <li>
                   <select  className='sel-gre'name="" id="">
                    <option value="1"> Good War</option>
                    <option value="2">GAys</option>
                    <option value="3">Bro</option>
                    </select>
                </li>
                
            </ul>
        </div>
    </div>
  )
}
