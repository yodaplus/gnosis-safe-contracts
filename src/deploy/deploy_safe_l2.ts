import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const deploy: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deployer } = await getNamedAccounts();
  const { deploy } = deployments;
  const chainId = await getChainId();

  await deploy("GnosisSafeL2", {
    from: deployer,
    args: [chainId],
    log: true,
  });
};

deploy.tags = ["l2", "l2-suite"];
export default deploy;
