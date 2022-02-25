const ZooHarmonyNFT = artifacts.require('ZooHarmonyNFT')
const ZooHarmonyNFTAds = artifacts.require('ZooHarmonyNFTAds')
const ZooHarmonyNFTSale = artifacts.require('ZooHarmonyNFTSale')
const ZooHarmonyNFTLikes = artifacts.require('ZooHarmonyNFTLikes')

const argValue = (arg, defaultValue) =>
  process.argv.includes(arg) ? process.argv[process.argv.indexOf(arg) + 1] : defaultValue
const network = () => argValue('--network', 'local')

module.exports = async function(deployer) {
  console.log()
  console.log(':: Deploying Base ZooHarmonyNFT')
  await deployer.deploy(ZooHarmonyNFT)
  const ZooHarmonyNFTInstance = await ZooHarmonyNFT.deployed()

  console.log()
  console.log(':: Deploying ZooHarmonyNFTAds')
  await deployer.deploy(ZooHarmonyNFTAds, ZooHarmonyNFTInstance.address)
  const ZooHarmonyNFTAdsInstance = await ZooHarmonyNFTAds.deployed()

  console.log()
  console.log(':: Deploying ZooHarmonyNFTSale')
  await deployer.deploy(ZooHarmonyNFTSale, ZooHarmonyNFTInstance.address)
  const ZooHarmonyNFTSaleInstance = await ZooHarmonyNFTSale.deployed()

  console.log()
  console.log(':: Deploying ZooHarmonyNFTLikes')
  await deployer.deploy(ZooHarmonyNFTLikes, ZooHarmonyNFTInstance.address)
  const ZooHarmonyNFTLikesInstance = await ZooHarmonyNFTLikes.deployed()

  console.log('=====================Finished============================')
  console.log(` NFT Likes: ${ZooHarmonyNFTLikesInstance.address}`)
  console.log(` NFT Sale:  ${ZooHarmonyNFTSaleInstance.address}`)
  console.log(` NFT Ads:   ${ZooHarmonyNFTAdsInstance.address}`)
  console.log(` NFT Base:  ${ZooHarmonyNFTInstance.address}`)
  console.log('==========================================================')
}
