# A live implementation of the ERC-721 standard, successfully deployed and operational on the Ethereum Mainnet since 2022.

Contract Address: 0x71db718f4a3fbbdd9f7a35ae3d1be972f7d3faa9

Standards: Fully compliant with ERC-721

# Key Features:

Public Minting Control: Dynamic toggle for minting states (isMintEnabled)

Metadata Management: Secure implementation of setBaseTokenUri for phased reveal

Withdrawal Security: Owner-only funds withdrawal mechanism using OpenZeppelin's Ownable patterns

Managing a whitelist of thousands of addresses on-chain is prohibitively expensive.

Instead of storing addresses, the system only stores a 32-byte Root Hash. Verification happens on-chain via cryptographic proofs.

Backend Logic (Node.js):

Generates leaf nodes using keccak256 hashing.

Constructs the Merkle Tree with sort: true for consistent cross-platform verification.

Generates HexProof for specific claiming addresses to be submitted by the frontend.

Contract Logic (Solidity):

Verifies the provided proof against the stored rootHash.

Benefit: Gas costs remain constant (O(log N)) regardless of whitelist size.
