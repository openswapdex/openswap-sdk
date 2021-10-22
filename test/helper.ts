import BigNumber from 'bignumber.js';
// import BN  from "bn.js";
import web3 from "web3";
import {expect, use} from "chai";

// chai.use(require('chai-bn')(require('bn.js')));

export function padLeft(string: any, chars: any, sign: any){
    return new Array(chars - string.length + 1).join(sign ? sign : "0") + string;
}
export function padRight(string: any, chars: any, sign: any){
    return string + new Array(chars - string.length + 1).join(sign ? sign : "0");
}

export function numberToBytes32(value: any, prefix: any) {
    var v = new BigNumber(value).toString(16)
    v = v.replace("0x", "");
    v = this.padLeft(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}
export function addressToBytes32(value: any, prefix) {
    var v = value
    v = v.replace("0x", "");
    v = this.padLeft(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}
export function addressToBytes32Right(value: any, prefix: any) {
    var v = value
    v = v.replace("0x", "");
    v = this.padRight(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}
export function stringToBytes32(value: any, prefix: any) {
    var v = value
    v = v.replace("0x", "");
    v = v.split('').map((c) => {var c = c.charCodeAt(0).toString(16); return (c.length < 2 ? ("0" + c) : c);}).join('');
    v = this.padRight(v, 64);
    if (prefix)
        v = '0x' + v
    return v;
}
export function sleep(milliseconds: any) {
    return new Promise((resolve, reject) => { setTimeout(() => {resolve(null);}, milliseconds); });
}

export function setTime(provider, time: any){
    console.log("set time " + time);
    return new Promise((resolve, reject) => {
        provider/*web3.currentProvider*/.send({
            jsonrpc: '2.0',
            method: time > 1000000000 ? 'evm_mine' : 'evm_increaseTime', //'evm_increaseTime', // 'evm_mine',
            params: [time], //[(3600*24*60*60)], //[time],
            id: new Date().getTime()
        }, 
        (err, result) => {
            if (err) { console.log(err); return reject(err); }
            return resolve(result);
        })
    });
}

export function compare(o1: any, o2: any) {
    for (let k in o2) {
        if (Array.isArray(o2[k])) {
            expect(o1[k].length, k+"_length").to.equal(o2[k].length);
            compare(o1[k], o2[k]);
        // } else if (BN.isBN(o1[k])) {
        //     expect(o1[k], k).to.be.a.bignumber.that.equal(o2[k]);
        } else {
            expect(o1[k], k).to.equal(o2[k]);
        }
    }
}

export function print(o: any, indent: any) {
    indent = indent || "";
    if (!o) {
        console.log(indent, o);
    } else if (o._isBigNumber) {
        console.log(indent, o.gt("2000000000")?web3.utils.fromWei(o.toString()):o.toString());
    // } else if (BN.isBN(o)) {
    //     console.log(indent, o.gt(new BN("2000000000"))?web3.utils.fromWei(o):o.toString(10));
    } else if (typeof o === "string") {
        console.log(indent, /\d{9,}/.test(o)?web3.utils.fromWei(o):o);
    } else if (typeof o === "number") {
        console.log(indent, o>2000000000?web3.utils.fromWei(o.toString()):o);
    } else if (typeof o === "boolean") {
        console.log(indent, o);
    } else if (typeof o === "object") {
         for (let k in o) {
            if (!o[k]){
                console.log(indent, k, ":", o[k]);
            } else if (o[k]._isBigNumber) {
                console.log(indent, k, ":", o[k].gt("2000000000")?web3.utils.fromWei(o[k].toString()):o[k].toString());
            // } else if (BN.isBN(o[k])) {
            //     console.log(indent, k, ":", o[k].gt(new BN("2000000000"))?web3.utils.fromWei(o[k]):o[k].toString(10));
            } else if (Array.isArray(o[k])) {
                console.log(indent, k, ":", o[k].map((e) => e._isBigNumber ? (e.gt("2000000000")?web3.utils.fromWei(e):e.toString()) : 
                                               /*BN.isBN(e) ? (e.gt(new BN("2000000000"))?web3.utils.fromWei(e):e.toString(10)) :*/ e));
            } else if (typeof o[k] === "number" || typeof o[k] === "string" || typeof o[k] === "boolean") {
                console.log(indent, k, ":", o[k]); 
            } else {
                //console.log(k, o[k]);
                console.log(indent, k, ": {");
                print(o[k], indent+"  ");
                console.log(indent, "}");
            }
        }
    } else {
        console.log(indent, o);
    }
}

export function toWeiInv(n: any, unit: any) {
    // return BigNumber.from("10").pow("18").div(n.toString());
    return new BigNumber("1").shiftedBy((unit || 18)*2).idiv(new BigNumber(n).shiftedBy(unit || 18));
}
/*
function getAbi(contractName){
    return contractName._json.abi;
}

function getEvent(contractName, eventName) {
    return getAbi(contractName).filter(e => e.type == "event" && e.name == eventName)[0];
}
function parseReceiptForEvent(receipt, contractName, eventName) {
    var event = getEvent(contractName, eventName);
    var topic = web3.utils.soliditySha3(event.name + "(" + event.inputs.map(e=>e.type).join(",") + ")");
console.log(receipt)
    var log = receipt.rawLogs/*logs* /.filter(log => log.topics[0] == topic);

    if (log.length == 1) {
        var log2 = Object.assign({address: log[0].address}, web3.eth.abi.decodeLog(event.inputs, log[0].data, log[0].topics.slice(1)))
        return log2;
    } else {
        return log.map(e => Object.assign({address: e.address}, web3.eth.abi.decodeLog(event.inputs, e.data, e.topics.slice(1))))
    }
}
*/
