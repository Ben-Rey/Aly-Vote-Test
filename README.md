<p align="center">
    <img src="https://avatars.githubusercontent.com/u/65595746?s=280&v=4"  width="200" height="200">
</p>

# Voting contract test
The goal is to test the functionalities of the voting.sol contract
## โ๏ธ Setup

```sh
npm install
```

## ๐ค Run test

```sh
npm run test
```

or

```sh
truffle test
```

## ๐ฅธ Run test with coverage

```sh
npm run coverage
```

or

```sh
truffle run coverage
```

## ๐ค Testing Report

### Coverage

| File       | % Stmts | % Branch | % Funcs | % Lines | Uncovered Lines |
| ---------- | ------- | -------- | ------- | ------- | --------------- |
| Voting.sol | 100     | 100      | 100     | 100     |                 |
| All files  | 100     | 100      | 100     | 100     |                 |

## ๐งช Tested features

### Status Functions

- #### Function startProposalsRegistering

```text
  โ  should start the Proposals Registering (102ms)
  โ  should revert when startProposalsRegistering is called by non-owner (240ms)
  โ  should revert when startProposalsRegistering is called and previus status is not RegisteringVoters (233ms)
  โ  should emit an event WorkflowStatusChange when startProposalsRegistering is called (81ms)
```

- #### Function endProposalsRegistering

```text
  โ  should end the Proposals Registering (154ms)
  โ  should revert when endProposalsRegistering is called by non-owner (78ms)
  โ  should revert when endProposalsRegistering is called and previous status is not ProposalsRegistrationStarted
  โ  should emit an event WorkflowStatusChange when endProposalsRegistering is called (56ms)
```

- #### Function startVotingSession

```text
  โ  should start the voting session (85ms)
  โ  should revert when startVotingSession is called by non-owner
  โ  should revert when startVotingSession is called and previous status is not ProposalsRegistrationEnded (79ms)
  โ  should emit an event WorkflowStatusChange when startVotingSession is called (62ms)
```

- #### Function endVotingSession

```text
  โ  should end the voting session (98ms)
  โ  should revert when endVotingSession is called by non-owner
  โ  should revert when endVotingSession is called and status is not VotingSessionStarted
  โ  should emit an event WorkflowStatusChange when endVotingSession is called (90ms)
```

- #### Function tallyVotes

```text
  โ  should tally votes (132ms)
  โ  should revert when tallyVotes is called by non-owner
  โ  should revert when tallyVotes is called when prvius status is not VotingSessionEnded (154ms)
  โ  should emit an event WorkflowStatusChange when tallyVotes is called (131ms)
```

### Get Set Functions

#### Function Add Voter

```text
  โ  should add a voter (51ms)
  โ  should revert when addVoter is called by non-owner
  โ  should emit an event VoterAdded when addVoter is called
  โ  should revert when addVoter is called and status is not RegisteringVoters (41ms)
  โ  should revert when addVoter is called and the voter is already registered (43ms)
```

#### Function Add Proposal

```text
  โ  should add a proposal (81ms)
  โ  should emit an event ProposalRegistered when addProposal is called (82ms)
  โ  should revert when addProposal is called and status is not ProposalsRegistering (59ms)
  โ  should revert when addProposal is called by non-voter (55ms)
  โ  should revert when addProposal is called and the proposal is empty (95ms)
```

#### Function SetVote

```text

  โ  should set a vote (174ms)
  โ  should emit an event when a voter has voted
  โ  should revert when setVote is called by non-voter (184ms)
  โ  should revert when setVote is called and status is not VotingSession (97ms)
  โ  should revert when setVote is called and the proposal is not found (281ms)
  โ  should revert when setVote is called and the voter has already voted (372ms)
```

#### Function getVoter

```text
  โ  should revert when getVoter is called by non-voter (202ms)
  โ  should return the voter (449ms)
  โ  should revert when getOneProposal is called by non-voter (228ms)
  โ  should return the proposal (211ms)
```

#### Winner Id calculation

```text
  โ  should calculate the winning proposal (1178ms)
```
