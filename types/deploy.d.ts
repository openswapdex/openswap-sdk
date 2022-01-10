import { Wallet, BigNumber } from "@ijstech/eth-wallet";
import { OSWAP_Factory, OSWAP_PairCreator, OSWAP_Router, OSWAP_VotingExecutor1, OAXDEX_Governance, OAXDEX_VotingExecutor, OAXDEX_Administrator, OAXDEX_VotingRegistry, OSWAP_OraclePairCreator, OSWAP_VotingExecutor2, OSWAP_OracleFactory, OSWAP_OracleLiquidityProvider, OSWAP_OracleRouter, OSWAP_HybridRouterRegistry, OSWAP_HybridRouter2 } from './contracts';
import { OpenSwap } from './OpenSwap';
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
export interface IDeploymentContracts {
    openSwap: OpenSwap;
    governance: OAXDEX_Governance;
    administrator: OAXDEX_Administrator;
    registry: OAXDEX_VotingRegistry;
    pairCreator: OSWAP_PairCreator;
    factory: OSWAP_Factory;
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
export declare function toDeploymentContracts(wallet: Wallet, result: IDeploymentResult): IDeploymentContracts;
export declare function deploy(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>;
