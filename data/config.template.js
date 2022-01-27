module.exports = {
    rpcUrl: '',
    deployer: {
        address: '',
        privateKey: ''
    },
    deploymentConfig: {
        weth: '',
        governance: '',
        hybridRouterRegistry: {
            address: '',
            name: [
                'Amm',
            ],
            factory: [
                ''
            ],
            fee: [
                998000
            ],
            feeBase: [
                1000000
            ],
            typeCode: [
                1
            ]            
        },
        ammFactory: '',
        oracleFactory: '',
        rangeFactory: '',
        restrictedFactory: '',
        queuePairTokens: [{
            token0: '',
            token1: ''
        }]
    }
}