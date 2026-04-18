# NFT-Adventure-Island
NFT project for Adventure Island
This is a comprehensive GitHub README for your **AdventureIsland** NFT project. It highlights the use of the gas-efficient `ERC721A` standard and the `MerkleProof` whitelist system.

-----

# Adventure Island NFT (BNN)

**Adventure Island** is an Ethereum-based NFT collection utilizing the **Chiru Labs ERC721A** implementation for high-efficiency batch minting and lower gas costs. The contract features a multi-stage release process, including a Merkle Tree-based Whitelist Sale and a Public Sale.

Key Features

  * **Gas Optimized:** Built on `ERC721A`, allowing users to mint multiple NFTs for essentially the same gas cost as one.
  * **Merkle Tree Whitelist:** Secure and gas-efficient whitelist verification using cryptographic proofs.
  * **Reveal Mechanism:** Supports a placeholder URI (pre-reveal) and a base URI (post-reveal) for the "unboxing" experience.
  * **Security:** Includes `callerIsUser` modifiers to prevent contract-based minting exploits and uses OpenZeppelin’s `Ownable` for access control.

-----

Technical Overview

### Smart Contract Architecture

The project is composed of several OpenZeppelin libraries and the ERC721A base:

  * **`AdventureIsland.sol`**: The main execution contract.
  * **`ERC721A.sol`**: Optimized implementation of the ERC721 standard.
  * **`MerkleProof.sol`**: Utility to verify if an address belongs to the whitelist without storing thousands of addresses on-chain.

Contract Parameters

| Parameter | Value |
| :--- | :--- |
| **Total Supply** | 1,534 |
| **Max Public Mint** | 5 per wallet |
| **Max Whitelist Mint** | 5 per wallet |
| **Mint Price** | 0 ETH (Free Mint) |
| **Symbol** | BNN |

-----

Development Guide

1. Whitelist Management

To add addresses to the whitelist, you must generate a **Merkle Root** off-chain (e.g., using `merkletreejs` in JavaScript).

1.  Collect all whitelisted addresses.
2.  Hash them into "leaves".
3.  Generate the root and set it in the contract using `setMerkleRoot(bytes32)`.

2. Deployment Workflow

1.  **Deploy:** Deploy the contract.
2.  **Setup Metadata:** Call `setPlaceHolderUri()` for the pre-reveal image.
3.  **Whitelist Phase:** Call `setMerkleRoot()` and then `toggleWhiteListSale()`.
4.  **Public Phase:** Call `togglePublicSale()`.
5.  **Reveal:** Once ready, call `setTokenUri()` with the final metadata folder and `toggleReveal()`.

3. Minting

  * **Public Mint:** Users call `mint(quantity)`.
  * **Whitelist Mint:** Users must provide their specific `bytes32[] proof` generated from the Merkle Tree to call `whitelistMint()`.

-----

unctions for the Owner

  * `toggleWhiteListSale()` / `togglePublicSale()`: Controls the minting stages.
  * `toggleReveal()`: Switches between placeholder and final metadata.
  * `teamMint(quantity)`: One-time function for the team to mint their reserved supply.
  * `withdraw()`: Withdraws any ETH held in the contract to the treasury address.

-----


This ensures that only Externally Owned Accounts (EOAs) can mint, preventing bot-driven mass minting through smart contract exploits.

-----
