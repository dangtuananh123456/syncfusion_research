

import React, { useState } from "react"
import AutoCompleteControl from "../Custom/AutoCompleteCustom/AutoCompleteControl"
import TextBoxControl from "../Custom/TextBoxCustom/TextBoxControl"
import DatePickerControl from "../Custom/DatePickerCustom/DatePickerControl"
import './PHCompo.css'

const dataCustomer = [
    {
        "ma_kh": "00014. NHAP",
        "ten_kh": "Test thử",
        "ten_kh0": "Test thu",
        "dia_chi": "Quang tri",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308",
        "ten_kh": "TỔNG CÔNG TY MAY 10-CTCP",
        "ten_kh0": "TONG CONG TY MAY 10-CTCP",
        "dia_chi": "Sài Đồng, Long Biên, Hà Nội",
        "ma_so_thue": "0100101308",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
    {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    }, {
        "ma_kh": "0100101308.032",
        "ten_kh": "CHI NHÁNH TỔNG CÔNG TY MAY 10 - CÔNG TY CP GARCO DRAGON HOTEL",
        "ten_kh0": "CHI NHANH TONG CONG TY MAY 10 - CONG TY CP GARCO DRAGON HOTEL",
        "dia_chi": "765A Nguyễn Văn Linh, P. Sài Đồng, Q. Long Biên, TP. Hà Nội",
        "ma_so_thue": "0100101308-032",
        "tel": "",
        "email": "",
        "ma_tt": "",
        "ma_httt": "131"
    },
]

// npm run deploy
// "homepage": " https://dangtuananh123456.github.io/syncfusion_research",

const dataMethodPayment = [
    {
        "tk": "01",
        "ten_tk": "Quỹ tiền mặt",
        "ma_nt": "",
        "chi_tiet": true,
        "tk_me": "11",
        "bac_tk": 1,
        "tk_sc": true,
        "tk_cn": false,
        "pp_tinh_tggs_no": "",
        "pp_tinh_tggs_co": "",
        "so_tk": "",
        "ten_ngh": ""
    },
    {
        "tk": "ACB",
        "ten_tk": "Ngân hàng TMCP Á Châu - ACB",
        "ma_nt": "",
        "chi_tiet": true,
        "tk_me": "11",
        "bac_tk": 1,
        "tk_sc": false,
        "tk_cn": false,
        "pp_tinh_tggs_no": "",
        "pp_tinh_tggs_co": "",
        "so_tk": "123456789",
        "ten_ngh": "CN - ???"
    },
    {
        "tk": "AGR",
        "ten_tk": "Ngân hàng NN & PT Nông Thôn Việt Nam - Agribank",
        "ma_nt": "",
        "chi_tiet": true,
        "tk_me": "11",
        "bac_tk": 1,
        "tk_sc": false,
        "tk_cn": false,
        "pp_tinh_tggs_no": "",
        "pp_tinh_tggs_co": "",
        "so_tk": "",
        "ten_ngh": ""
    },
    {
        "tk": "PTH",
        "ten_tk": "Công nợ phải thu",
        "ma_nt": "",
        "chi_tiet": true,
        "tk_me": "CN",
        "bac_tk": 1,
        "tk_sc": false,
        "tk_cn": true,
        "pp_tinh_tggs_no": "",
        "pp_tinh_tggs_co": "",
        "so_tk": "",
        "ten_ngh": ""
    },
    {
        "tk": "VCB",
        "ten_tk": "Ngân hàng TMCP Ngoại Thương Việt Nam - Vietcombank",
        "ma_nt": "",
        "chi_tiet": true,
        "tk_me": "11",
        "bac_tk": 1,
        "tk_sc": true,
        "tk_cn": false,
        "pp_tinh_tggs_no": "",
        "pp_tinh_tggs_co": "",
        "so_tk": "",
        "ten_ngh": ""
    }
]

const displayColumnListForMethodPayment = [
    { value: 'tk', text: 'Mã TK' },
    { value: 'ten_tk', text: 'Tên tài khoản' },
]

const displayColumnListForCustomer = [
    { value: 'ma_kh', text: "Mã KH" },
    { value: 'ten_kh', text: "Tên KH" },
    { value: 'dia_chi', text: "Địa chỉ" },
]

const PHCompo = () => {

    const [customerCode, setCustomerCode] = useState('');
    const [address, setAddress] = useState('');
    const [voucherDate, setVoucherDate] = useState(new Date().toISOString().slice(0, 10).split('-').reverse().join('/'));
    const [transactionPerson, setTransactionPerson] = useState('');
    const [interpretation, setInterpretation] = useState('');
    const [voucherNum, setVoucherNum] = useState('');
    const [methodPayment, setMethodPayment] = useState('');

    return (
        <div>
            <div className="TopInfoPh TopInfoPh_Padding">
                <div className="TopInfoPh_Customer">
                    <div><b>Khách hàng</b></div>
                    <div className="TopInfoPh_Border">
                        <AutoCompleteControl
                            setValue={setCustomerCode}
                            dataSource={dataCustomer}
                            fieldTarget={'ma_kh'}
                            fieldDisplay={'ten_kh'}
                            displayColumnList={displayColumnListForCustomer}
                        />
                    </div>
                </div>
                <div className="TopInfoPh_Address">
                    <div><b>Địa chỉ</b></div>
                    <div className="TopInfoPh_Border">
                        <TextBoxControl
                            value={address}
                            setValue={setAddress}
                        />
                    </div>
                </div>
                <div className="TopInfoPh_DateVoucher">
                    <div><b>Ngày chứng từ</b></div>
                    <div className="TopInfoPh_Border">
                        <DatePickerControl
                            value={voucherDate}
                            setValue={setVoucherDate}
                        />
                    </div>
                </div>
            </div>
            <div className="TopInfoPh TopInfoPh_Padding">
                <div className="TopInfoPh_Customer">
                    <div><b>Người giao dịch</b></div>
                    <div className="TopInfoPh_Border">
                        <TextBoxControl
                            value={transactionPerson}
                            setValue={setTransactionPerson}
                        />
                    </div>
                </div>
                <div className="TopInfoPh_Address">
                    <div><b>Diễn giải</b></div>
                    <div className="TopInfoPh_Border">
                        <TextBoxControl
                            value={interpretation}
                            setValue={setInterpretation}
                        />
                    </div>
                </div>
                <div className="TopInfoPh_DateVoucher">
                    <div><b>Số chứng từ</b></div>
                    <div className="TopInfoPh_Border">
                        <TextBoxControl
                            value={voucherNum}
                            setValue={setVoucherNum}
                        />
                    </div>

                </div>
            </div>
            <div className="TopInfoPh TopInfoPh_Padding">
                <div className="TopInfoPh_MethodPayment">
                    <div><b>Hình thức thanh toán</b></div>
                    <div className="TopInfoPh_Border">
                        <AutoCompleteControl
                            setValue={setMethodPayment}
                            dataSource={dataMethodPayment}
                            fieldTarget={'tk'}
                            fieldDisplay={'ten_tk'}
                            displayColumnList={displayColumnListForMethodPayment}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PHCompo;