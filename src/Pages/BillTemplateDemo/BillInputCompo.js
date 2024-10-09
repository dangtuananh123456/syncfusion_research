

import { useState } from "react";
import PHCompo from "../PHCompo/PHCompo";
import CTTabCompo from "../CTCompo/CTTabCompo.js"
import BillTabCompo from "../CTCompo/BillTabCompo"
import './BillInputCompo.css'

const BillInputCompo  = () => {
    const [isTab, setIsTab] = useState(true);
    const handleChangeTab = (type) => {
        if(type === 'detail' && type === false){
            setIsTab(true);
        }
        else if(type === 'bill' && type === true) {
            setIsTab(false);
        }
    }
    return (
        <div className="Ph_Wrapper">
            <PHCompo/>
            <div className="titleTabList">
                <div className="detailTab" onClick={() => setIsTab(true)}>Chi tiết</div>
                <div className="billTab" onClick={() => setIsTab(false)}>Hóa đơn</div>
            </div>
            {isTab ? <CTTabCompo/> : <BillTabCompo/> }
            <div style = {{height : '800px'}}>
                dang tuan anh
            </div>
        </div>
    );
}

export default BillInputCompo;