import styled from "styled-components"

export const Wrapper = styled.div`

    .top-layer-flex {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        flex-wrap: wrap;
        align-items: center;
    }

    .add-button {
        float: right;
        padding: 10px 20px;
        font-weight: bold;
        cursor: pointer;
    }

    .controls {
        display: flex;
        flex-wrap: wrap;
    }

    .search {
        margin-right: 15px;
    }

    .date-picker {
        margin-right: 26px;
    }

    .payout {
        width: 104px;
        height: 42px;
        background: #3D8F83;
        border-radius: 4px;
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        display: flex;
        align-items: center;
        color: #FFFFFF;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .table-title {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
        line-height: 22px;
        letter-spacing: 0.1px;
        color: #2A2A2A;
    }

    .search {
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        border-radius: 4px;
        padding-left: 15px;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 17px;
        color: #A6ABB2;

    }

    .search-box {
        position: relative;
        width: 300px;
        height: 42px;
        margin-right: 15px;
        flex-grow: 1;
    }

    .search-button {
        position: absolute;
        top: 13px;
        right: 15px;
        background: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .btn {
        width: 100%;
        height: 100%;
    }

    .table-header {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 1fr 1fr 1fr 1fr 1fr;
        margin-top: 20px;
        width: 100%;
        height: 48px;
        background: #F5F5F5;
        border-radius: 5px;
        align-items: center;
        padding-left: 25px;
    }

    .date-picker-wrap {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
    }

    .header-item {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 19px;
        letter-spacing: 0.1px;
        color: #2A2A2A;
      
    }

    .table-row {
        display: grid;
        grid-template-columns: 2fr 2fr 2fr 1fr 1fr 1fr 1fr 1fr;
        align-items: center;
        padding-left: 25px;
        width: 1080px;
        height: 60px;
        background: #FFFFFF;
        box-shadow: 0px 1px 0px #EBEBEB;
        margin-top: 20px;
        width: 100%;
        cursor: pointer;
    }

    .body-item {
        font-style: normal;
        font-weight: normal;
        font-size: 15px;
        line-height: 22px;
        color: #2A2A2A;
    }

    .more-button {
        width: 100%;
        height: 60px;
        background: #FFFFFF;
        border: 1px solid #EBEBEB;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #2C665D;
        cursor: pointer;
        margin-top: 20px;
    }

    .active {
        border: 1px solid #2C665D !important;
        box-sizing: border-box;
        box-shadow: 0px 2px 30px rgba(0, 0, 0, 0.08);
        border-radius: 5px;
    }

    .table-item {
        width: 100%;
        height: 140px;
        border: 1px solid #EBEBEB;
        margin-top: 15px;
        margin-bottom: 15px;
        box-sizing: border-box;
        border-radius: 4px;
        cursor: pointer;
    }

    .web-table {
        width: 100%
    }

    .table-item {
        padding: 10px;
    }

    .item-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
    }

    .item-title {
        font-family: Space Grotesk;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.1px;
        color: #2A2A2A;
    }

    .item-data {
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 22px;
        color: #2A2A2A;
    }

    .separator {
        border: 1px solid #EBEBEB
    }

`