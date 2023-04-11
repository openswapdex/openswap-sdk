import fs from 'fs';
import path from 'path';
import {soliditySha3} from 'web3-utils';

const sourceDir = "contracts/";
async function updateHash(){
    const SOURCE = ["amm/OSWAP_Pair", "oracle/OSWAP_OraclePair", "range/OSWAP_RangePair", "restricted/OSWAP_RestrictedPair1", "restricted/OSWAP_RestrictedPair3", "restricted/OSWAP_RestrictedPair4"];

    var hex = [];
    for (var i = 0 ; i < SOURCE.length ; i++) {
        try {
            hex[i] = (await import(path.join(__dirname, "../src/contracts/", SOURCE[i] + ".json.ts"))).default;
            hex[i] = "0x" + hex[i].bytecode;
            hex[i] = soliditySha3(hex[i]);
            hex[i] = hex[i].replace("0x", "");
            console.log(SOURCE[i], hex[i]);
        } catch(e) {
            console.dir(e)
        }
    }

    const Router = path.join(__dirname,"../" + sourceDir + "amm/OSWAP_Router.sol");
    var data = fs.readFileSync(Router, 'utf-8');
    data = data.replace(/hex\'[a-f0-9]{64}\'/,`hex'${hex[0]}'`);
    fs.writeFileSync(Router, data);

    const OracleLiquidityProvider = path.join(__dirname,"../" + sourceDir + "oracle/OSWAP_OracleLiquidityProvider.sol");
    var data = fs.readFileSync(OracleLiquidityProvider, 'utf-8');
    data = data.replace(/\/\*oracle\*\/hex\'[a-f0-9]{64}\'/,`/*oracle*/hex'${hex[1]}'`);
    fs.writeFileSync(OracleLiquidityProvider, data);

    const OracleRouter = path.join(__dirname,"../" + sourceDir + "router/OSWAP_OracleRouter.sol");
    var data = fs.readFileSync(OracleRouter, 'utf-8');
    data = data.replace(/\/\*oracle\*\/hex\'[a-f0-9]{64}\'/,`/*oracle*/hex'${hex[1]}'`)
               .replace(/\/\*amm\*\/hex\'[a-f0-9]{64}\'/,`/*amm*/hex'${hex[0]}'`);
    fs.writeFileSync(OracleRouter, data);

    const HybridRouter = path.join(__dirname,"../" + sourceDir + "router/OSWAP_HybridRouter.sol");
    var data = fs.readFileSync(HybridRouter, 'utf-8');
    data = data.replace(/\/\*oracle\*\/hex\'[a-f0-9]{64}\'/,`/*oracle*/hex'${hex[1]}'`);
    fs.writeFileSync(HybridRouter, data);

    const RangeLiquidityProvider = path.join(__dirname,"../" + sourceDir + "range/OSWAP_RangeLiquidityProvider.sol");
    var data = fs.readFileSync(RangeLiquidityProvider, 'utf-8');
    data = data.replace(/\/\*range\*\/hex\'[a-f0-9]{64}\'/,`/*range*/hex'${hex[2]}'`);
    fs.writeFileSync(RangeLiquidityProvider, data);

    const RestrictedLiquidityProvider1 = path.join(__dirname,"../" + sourceDir + "restricted/OSWAP_RestrictedLiquidityProvider1.sol");
    var data = fs.readFileSync(RestrictedLiquidityProvider1, 'utf-8');
    data = data.replace(/\/\*restricted\*\/hex\'[a-f0-9]{64}\'/,`/*restricted*/hex'${hex[3]}'`);
    fs.writeFileSync(RestrictedLiquidityProvider1, data);

    const RestrictedLiquidityProvider3 = path.join(__dirname,"../" + sourceDir + "restricted/OSWAP_RestrictedLiquidityProvider3.sol");
    var data = fs.readFileSync(RestrictedLiquidityProvider3, 'utf-8');
    data = data.replace(/\/\*restricted\*\/hex\'[a-f0-9]{64}\'/,`/*restricted*/hex'${hex[4]}'`);
    fs.writeFileSync(RestrictedLiquidityProvider3, data);

    const RestrictedLiquidityProvider4 = path.join(__dirname,"../" + sourceDir + "restricted/OSWAP_RestrictedLiquidityProvider4.sol");
    var data = fs.readFileSync(RestrictedLiquidityProvider4, 'utf-8');
    data = data.replace(/\/\*restricted\*\/hex\'[a-f0-9]{64}\'/,`/*restricted*/hex'${hex[5]}'`);
    fs.writeFileSync(RestrictedLiquidityProvider4, data);
}
updateHash();