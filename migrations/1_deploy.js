const voting = artifacts.require("Voting");

module.exports = async function (deployer) {
  const contract = await deployer.deploy(voting, 8, { value: 3 });
};
