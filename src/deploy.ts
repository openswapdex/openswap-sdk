import {Wallet,BigNumber,Utils} from "@ijstech/eth-wallet";
import {
    OSWAP_Factory, 
    OSWAP_PairCreator, 
    OSWAP_Router, 
    OSWAP_VotingExecutor1, 
    OAXDEX_Governance, 
    OAXDEX_VotingExecutor, 
    OAXDEX_Administrator, 
    OAXDEX_VotingRegistry, 
    OSWAP_OraclePairCreator, 
    OSWAP_VotingExecutor2, 
    OSWAP_OracleFactory, 
    OSWAP_OracleLiquidityProvider, 
    OSWAP_OracleRouter, 
    OSWAP_HybridRouterRegistry, 
    OSWAP_HybridRouter2, 
    OpenSwap
} from './contracts';
export interface IDeploymentResult{
    administrator?: string;
    factory?: string,
    governance?: string,
    hybridRouter?: string,
    hybridRouterRegistry?: string,
    oracleFactory?: string,    
    oracleLiquidityProvider?: string;
    oraclePairCreator?: string;
    oracleRouter?: string;
    oswap?: string,
    pairCreator?: string,
    router?: string,    
    votingRegistry?: string,
    votingExecutor?: string,
    votingExecutor1?: string,
    votingExecutor2?: string,
    votingExecutor3?: string,
    weth?: string
}
export interface IGovProfile {
    "minExeDelay": number,
    "minVoteDuration": number,
    "maxVoteDuration": number,
    "minGovTokenToCreateVote": number,
    "minQuorum": number
}
export interface IGovOptions{
    minStakePeriod: number;
    tradeFee: number,
    protocolFee: number,
    protocolFeeTo: string,
    profiles: {
        name: string[],
        minExeDelay: number[];
        minVoteDuration: number[],
        maxVoteDuration: number[],
        minGovTokenToCreateVote: number[]|BigNumber[],
        minQuorum: number[]|BigNumber[]
    }
}
export const DefaultGovOptions: IGovOptions = {
    minStakePeriod: 1,
    tradeFee: 0.28,
    protocolFee: 0,
    protocolFeeTo: '',
    profiles: {
        name: ['poll','vote','addOldOracleToNewPair'],
        minExeDelay: [1,1,1],
        minVoteDuration: [0,0,0],
        maxVoteDuration: [1209600,1209600,1209600], 
        minGovTokenToCreateVote: [Utils.toDecimals(100000),Utils.toDecimals(100000),Utils.toDecimals(100000)],
        minQuorum: [Utils.toDecimals(0),Utils.toDecimals(10000000),Utils.toDecimals(100)]
    }
}
export interface IGovTokenOptions{
    initSupply: number|BigNumber;
    initSupplyTo: string;
    minter: string;
    totalSupply: number|BigNumber;
}
export const DefaultGovTokenOptions: IGovTokenOptions = {
    initSupply: 0,
    initSupplyTo: '',
    minter: '',
    totalSupply: Utils.toDecimals(1000000000, 18)
}
export interface IAmmOptions{
    governance?: string;
    pairCreator?: string;
    protocolFee?: number;
    protocolFeeTo?: string;
    tradeFee?: number;
}
export interface IOracleFactoryOptions{
    feePerDelegator?: number|BigNumber,
    governance?: string,
    pairCreator?: string,
    protocolFee?: number|BigNumber,
    protocolFeeTo?: string,
    tradeFee?: number|BigNumber
}
export interface IDeployOptions {
    govTokenOptions?: IGovTokenOptions,
    govOptions?: IGovOptions,
    amm?: IAmmOptions,
    oracle?: IOracleFactoryOptions,
    tokens?: {
        oswap?: string,
        weth?: string
    }
}
export interface IDeploymentContracts {
    openSwap: OpenSwap,
    governance: OAXDEX_Governance,
    administrator: OAXDEX_Administrator,
    registry: OAXDEX_VotingRegistry,
    pairCreator: OSWAP_PairCreator,
    factory: OSWAP_Factory,
    oraclePairCreator: OSWAP_OraclePairCreator,
    router: OSWAP_Router,
    oracleFactory: OSWAP_OracleFactory,
    oracleRouter: OSWAP_OracleRouter,
    oracleLiquidityProvider: OSWAP_OracleLiquidityProvider,
    hybridRouterRegistry: OSWAP_HybridRouterRegistry,
    hybridRouter: OSWAP_HybridRouter2,
    executor: OAXDEX_VotingExecutor,
    executor1: OSWAP_VotingExecutor1,
    executor2: OSWAP_VotingExecutor2,
}

export function toDeploymentContracts(wallet: Wallet, result: IDeploymentResult): IDeploymentContracts{
    return {
        openSwap: new OpenSwap(wallet, result.oswap),
        governance: new OAXDEX_Governance(wallet, result.governance),
        administrator: new OAXDEX_Administrator(wallet, result.administrator),
        registry: new OAXDEX_VotingRegistry(wallet, result.votingRegistry),
        pairCreator:new  OSWAP_PairCreator(wallet, result.pairCreator),
        factory: new OSWAP_Factory(wallet, result.factory),
        oraclePairCreator: new OSWAP_OraclePairCreator(wallet, result.oraclePairCreator),
        router: new OSWAP_Router(wallet, result.router),
        oracleFactory: new OSWAP_OracleFactory(wallet, result.oracleFactory),
        oracleRouter: new OSWAP_OracleRouter(wallet, result.oracleRouter),
        oracleLiquidityProvider: new OSWAP_OracleLiquidityProvider(wallet, result.oracleLiquidityProvider),
        hybridRouterRegistry: new OSWAP_HybridRouterRegistry(wallet, result.hybridRouterRegistry),
        hybridRouter: new OSWAP_HybridRouter2(wallet, result.hybridRouter),
        executor: new OAXDEX_VotingExecutor(wallet, result.votingExecutor),
        executor1: new OSWAP_VotingExecutor1(wallet, result.votingExecutor1),
        executor2: new OSWAP_VotingExecutor2(wallet, result.votingExecutor2)
    }
}
export function deploy(wallet: Wallet, options?: IDeployOptions): Promise<IDeploymentResult>{
    options = options || <any>{};
    if (!options.govOptions)
        options.govOptions = DefaultGovOptions;
    if (!options.govTokenOptions)
        options.govTokenOptions = DefaultGovTokenOptions;
    if (!options.tokens)
        options.tokens = {};
    if (!options.amm)
        options.amm = {};
    if (!options.oracle)
        options.oracle = {};

    return new Promise(async function(resolve, reject){
        try{
            let result: IDeploymentResult = {};            
            //oswap
            if (!options.tokens.oswap){
                let oswap = new OpenSwap(wallet);
                result.oswap = await oswap.deploy(options.govTokenOptions);                        
            }
            else
                result.oswap = options.tokens.oswap;                        
            //weth            
            if (options.tokens.weth)
                result.weth = options.tokens.weth;           
            //governance
			let governance = new OAXDEX_Governance(wallet);
            result.governance = await governance.deploy({
                names: options.govOptions.profiles.name, 
                maxVoteDuration: options.govOptions.profiles.maxVoteDuration,
                minExeDelay: options.govOptions.profiles.minExeDelay,
                minOaxTokenToCreateVote: options.govOptions.profiles.minGovTokenToCreateVote,
                minQuorum: options.govOptions.profiles.minQuorum,
                minStakePeriod: options.govOptions.minStakePeriod,
                minVoteDuration: options.govOptions.profiles.minVoteDuration,
                oaxToken: result.oswap
            })
            
            //administrator
            let administrator = new OAXDEX_Administrator(wallet);
            result.administrator = await administrator.deploy(governance.address);
            await governance.initAdmin(result.administrator);
            //VotingRegistry	
            let votingRegistry = new OAXDEX_VotingRegistry(wallet);
            result.votingRegistry = await votingRegistry.deploy(result.governance);
            await governance.setVotingRegister(result.votingRegistry);
            //PairCreator
            let pairCreator = new OSWAP_PairCreator(wallet);
			result.pairCreator = await pairCreator.deploy();
            //Factory
            let factory = new OSWAP_Factory(wallet);
			result.factory = await factory.deploy({
                governance: options.amm.governance || result.governance,
                pairCreator: result.pairCreator,
                protocolFee: 0,
                protocolFeeTo: options.amm.protocolFeeTo || Utils.nullAddress,
                tradeFee: 0
            });
            //OraclePairCreator
            let oraclePairCreator = new OSWAP_OraclePairCreator(wallet);
			result.oraclePairCreator = await oraclePairCreator.deploy();            
            //Router
            let router = new OSWAP_Router(wallet);
            result.router = await router.deploy({
                WETH: result.weth,
                factory: result.factory
            });            
            //OracleFactory
            let oracleFactory = new OSWAP_OracleFactory(wallet);
            result.oracleFactory = await oracleFactory.deploy({
                feePerDelegator: options.oracle.feePerDelegator || 0,
                governance: options.oracle.governance || result.governance,
                pairCreator: options.oracle.pairCreator || result.oraclePairCreator,
                protocolFee: options.oracle.protocolFee || 0,
                protocolFeeTo: options.oracle.protocolFeeTo || Utils.nullAddress,
                tradeFee: options.oracle.tradeFee || 0
            });
            //OracleRouter
            let oracleRouter = new OSWAP_OracleRouter(wallet);
            result.oracleRouter = await oracleRouter.deploy({
                WETH: result.weth,
                ammFactory: result.factory,
                oracleFactory: result.oracleFactory
            });
            //OracleLiquidityProvider
            let oracleLiquidityProvider = new OSWAP_OracleLiquidityProvider(wallet);
            result.oracleLiquidityProvider = await oracleLiquidityProvider.deploy({
                WETH: result.weth,
                factory: result.oracleFactory
            });            
            await oracleFactory.setOracleLiquidityProvider({
                oracleLiquidityProvider: result.oracleLiquidityProvider,
                oracleRouter: result.oracleRouter
            });            
            //HybridRouterRegistry
            let hybridRouterRegistry = new OSWAP_HybridRouterRegistry(wallet);
            result.hybridRouterRegistry = await hybridRouterRegistry.deploy(result.governance);
            //HybridRouter
            let hybridRouter = new OSWAP_HybridRouter2(wallet);
            result.hybridRouter = await hybridRouter.deploy({
                WETH: result.weth, 
                registry: result.hybridRouterRegistry
            });
            //VotingExecutor
            let votingExecutor = new OAXDEX_VotingExecutor(wallet);
            result.votingExecutor = await votingExecutor.deploy({
                admin: result.administrator,
                governance: result.governance
            });
            await governance.initVotingExecutor([result.votingExecutor]);
            //VotingExecutor1
            let votingExecutor1 = new OSWAP_VotingExecutor1(wallet);
            result.votingExecutor1 = await votingExecutor1.deploy(factory.address);
            //VotingExecutor2
            let votingExecutor2 = new OSWAP_VotingExecutor2(wallet);
            result.votingExecutor2 = await votingExecutor2.deploy(oracleFactory.address);            
            //VotingExecutor3
            // let votingExecutor3 = new VotingExecutor3(wallet);
            // result.votingExecutor3 = await votingExecutor3.deploy(governance.address,factory.address,hybridRouterRegistry.address);
            // await governance.initVotingExecutor([votingExecutor.address, votingExecutor1.address, votingExecutor2.address, votingExecutor3.address]);
            console.dir(result)
            resolve(result)
        }
        catch(err){
            reject(err)
        }
    })
}