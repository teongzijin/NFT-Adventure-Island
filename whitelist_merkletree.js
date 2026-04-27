//whitelist address using merkletree 
function whiteListRoot(){
			let whitelistAddresses = [
				//addresses..................
			];
			
			const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
			const merkleTree = new MerkleTree(leafNodes, keccak256, { sort: true });
			
			const rootHash = merkleTree.getRoot();
			
			res.write('Whitelist Merkle Tree:' + merkleTree.toString() + "<br>");
			const claimingAddress = keccak256('0x31b794528AF89bD2E28c3A353Cd362765ea0AefB');
			res.write("claimingAddress: " + claimingAddress.toString());
			const hexProof = merkleTree.getHexProof(claimingAddress);
			//console.log(hexProof);
			res.write("hexProof: " + hexProof.toString());
			res.end();
}
