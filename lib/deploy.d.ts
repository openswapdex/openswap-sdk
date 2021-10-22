import { Wallet, BigNumber } from "@ijstech/eth-wallet";
import { OSWAP_Factory } from './contracts/amm/OSWAP_Factory';
import { OSWAP_PairCreator } from './contracts/amm/OSWAP_PairCreator';
import { OSWAP_Router } from './contracts/amm/OSWAP_Router';
import { OSWAP_VotingExecutor1 } from './contracts/amm/OSWAP_VotingExecutor1';
import { OAXDEX_Governance } from './contracts/gov/OAXDEX_Governance';
import { OAXDEX_VotingExecutor } from './contracts/gov/OAXDEX_VotingExecutor';
import { OAXDEX_Administrator } from './contracts/gov/OAXDEX_Administrator';
import { OAXDEX_VotingRegistry } from './contracts/gov/OAXDEX_VotingRegistry';
import { OSWAP_OraclePairCreator } from './contracts/oracle/OSWAP_OraclePairCreator';
import { OSWAP_VotingExecutor2 } from './contracts/oracle/OSWAP_VotingExecutor2';
import { OSWAP_OracleFactory } from './contracts/oracle/OSWAP_OracleFactory';
import { OSWAP_OracleLiquidityProvider } from './contracts/oracle/OSWAP_OracleLiquidityProvider';
import { OSWAP_OracleRouter } from './contracts/router/OSWAP_OracleRouter';
import { OSWAP_HybridRouterRegistry } from './contracts/router/OSWAP_HybridRouterRegistry';
import { OSWAP_HybridRouter2 } from './contracts/router/OSWAP_HybridRouter2';
import { OpenSwap } from './contracts/OpenSwap';
export interface IDeploymentResult {
    administrator?: string;
    factory?: string;
    governance?: string;
    hybridRouter?: string;
    hybridRouterRegistry?: string;
    oracleFactory?: string;
    oracleLiquidityProvider?: string;
    oraclePairCreator?: string;
    oracleRouter?: string;
    oswap?: string;
    pairCreator?: string;
    router?: string;
    votingRegistry?: string;
    votingExecutor?: string;
    votingExecutor1?: string;
    votingExecutor2?: string;
    votingExecutor3?: string;
    weth?: string;
}
export interface IGovProfile {
    "minExeDelay": number;
    "minVoteDuration": number;
    "maxVoteDuration": number;
    "minGovTokenToCreateVote": number;
    "minQuorum": number;
}
export interface IGovOptions {
    minStakePeriod: number;
    tradeFee: number;
    protocolFee: number;
    protocolFeeTo: string;
    profiles: {
        name: string[];
        minExeDelay: number[];
        minVoteDuration: number[];
        maxVoteDuration: number[];
        minGovTokenToCreateVote: number[] | BigNumber[];
        minQuorum: number[] | BigNumber[];
    };
}
export declare const DefaultGovOptions: IGovOptions;
export interface IGovTokenOptions {
    initSupply: number | BigNumber;
    initSupplyTo: string;
    minter: string;
    totalSupply: number | BigNumber;
}
export declare const DefaultGovTokenOptions: IGovTokenOptions;
export interface IAmmOptions {
    governance?: string;
    pairCreator?: string;
    protocolFee?: number;
    protocolFeeTo?: string;
    tradeFee?: number;
}
export interface IOracleFactoryOptions {
    feePerDelegator?: number | BigNumber;
    governance?: string;
    pairCreator?: string;
    protocolFee?: number | BigNumber;
    protocolFeeTo?: string;
    tradeFee?: number | BigNumber;
}
export interface IDeployOptions {
    govTokenOptions?: IGovTokenOptions;
    govOptions?: IGovOptions;
    amm?: IAmmOptions;
    oracle?: IOracleFactoryOptions;
    tokens?: {
        oswap?: string;
        weth?: string;
    };
}
export interface IDeployment {
    openSwap: OpenSwap;
    governance: OAXDEX_Governance;
    administrator: OAXDEX_Administrator;
    registry: OAXDEX_VotingRegistry;
    airCreator: OSWAP_PairCreator;
    actory: OSWAP_Factory;
    oraclePairCreator: OSWAP_OraclePairCreator;
    router: OSWAP_Router;
    oracleFactory: OSWAP_OracleFactory;
    oracleRouter: OSWAP_OracleRouter;
    oracleLiquidityProvider: OSWAP_OracleLiquidityProvider;
    hybridRouterRegistry: OSWAP_HybridRouterRegistry;
    hybridRouter: OSWAP_HybridRouter2;
    executor: OAXDEX_VotingExecutor;
    executor1: OSWAP_VotingExecutor1;
    executor2: OSWAP_VotingExecutor2;
}
export declare function deploy(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>;
