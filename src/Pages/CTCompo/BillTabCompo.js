
import React, { useState } from "react"
import AutoCompleteControl from "../Custom/AutoCompleteCustom/AutoCompleteControl"
import TextBoxControl from "../Custom/TextBoxCustom/TextBoxControl"
import DatePickerControl from "../Custom/DatePickerCustom/DatePickerControl"
import './BillTabCompo.css'

const dataSeriNum = [
    {
        "so_seri": "AA/18E",
        "so_seri_mhd": "01GTKT0/001",
        "so_luong": 10000,
        "ngay_dk": "2021-09-01T00:00:00",
        "so_tkngh": "",
        "ten_ngh": ""
    },
    {
        "so_seri": "AA/18E",
        "so_seri_mhd": "01GTKT0/002",
        "so_luong": 10000,
        "ngay_dk": "2021-09-01T03:38:00",
        "so_tkngh": "",
        "ten_ngh": ""
    },
    {
        "so_seri": "AA/18E",
        "so_seri_mhd": "01GTKT0/003",
        "so_luong": 100000,
        "ngay_dk": "2019-10-08T00:00:00",
        "so_tkngh": "test",
        "ten_ngh": "test"
    }
]

const displayColumnListForSeriNum = [
    {value : 'so_seri', text : "Số seri"},
    {value : 'so_seri_mhd', text : "Số seri MHD"},
    {value : 'so_luong', text : 'Số lượng'},
]
const BillTabCompo  = () => {
    const [seriNum, setSeriNum] = useState("");
    const [customer, setCustomer] = useState("");
    const [billNum, setBillNum] = useState("");
    const [address, setAddress] = useState("");
    const [faxNumCode, setFaxNumCode] = useState("");
    return (
        <div>
            <div className="TopInfoPh TopInfoPh_Padding">
                <div className="TopInfoPh_Customer">
                    <div><b>Số seri</b></div>
                    <div className="TopInfoPh_Border">
                        <AutoCompleteControl
                            setValue={setSeriNum}
                            dataSource={dataSeriNum}
                            fieldTarget={'so_seri'}
                            fieldDisplay={'so_seri_mhd'}
                            displayColumnList = {displayColumnListForSeriNum}
                        />
                    </div>
                </div>
                <div className="TopInfoPh_Address">
                    <div><b>Tên khách hàng</b></div>
                    <div className="TopInfoPh_Border">
                        <TextBoxControl
                            value = {customer}
                            setValue={setCustomer}
                        />
                    </div>
                </div>
            </div>
            <div className="TopInfoPh TopInfoPh_Padding">
                <div className="TopInfoPh_Customer">
                    <div><b>Số hóa đơn</b></div>
                    <div className="TopInfoPh_Border">
                        <TextBoxControl
                            value={billNum}
                            setValue={setBillNum}
                        />
                    </div>
                </div>
                <div className="TopInfoPh_Address">
                    <div><b>Địa chỉ</b></div>
                    <div className="TopInfoPh_Border" >
                        <TextBoxControl
                            value={address}
                            setValue={setAddress}
                        />
                    </div>
                </div>
            </div>
            <div className="TopInfoPh TopInfoPh_Padding">
                <div className="TopInfoPh_MethodPayment">
                    <div><b>Mã số thuế</b></div>
                    <div className="TopInfoPh_Border">
                        <TextBoxControl
                            value={faxNumCode}
                            setValue={setFaxNumCode}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default BillTabCompo;