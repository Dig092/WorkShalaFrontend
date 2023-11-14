import React, { useState, useEffect, Fragment } from "react";
import { useNavigate } from 'react-router-dom';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";

export default function Jobs(){
    return(
        <>
        <NavBar />

        <div className="w-full px-16 py-8 text-3xl font-semibold bg-[#FFF6F9]" >Jobs For You</div>
        <div>
            <div className="flex flex-col">
                <div>
                    <div className="bg-green-200 rounded-full w-8 h-8"></div>
                    <div>Actively hiring</div>
                </div>
                
            </div>
        </div>

        <Footer />
        </>
    )
}