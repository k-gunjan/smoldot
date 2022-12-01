window.SIDEBAR_ITEMS = {"enum":[["AuraConsensusLog","A consensus log item for AURA."],["AuraConsensusLogRef","A consensus log item for AURA."],["BabeAllowedSlots","Types of allowed slots."],["BabeConsensusLog","A consensus log item for BABE."],["BabeConsensusLogRef","A consensus log item for BABE."],["BabePreDigest","A BABE pre-runtime digest. This contains all data required to validate a block and for the BABE runtime module. Slots can be assigned to a primary (VRF based) and to a secondary (slot number based)."],["BabePreDigestRef","A BABE pre-runtime digest. This contains all data required to validate a block and for the BABE runtime module. Slots can be assigned to a primary (VRF based) and to a secondary (slot number based)."],["DigestItem",""],["DigestItemRef",""],["Error","Potential error when decoding a header."],["GrandpaConsensusLog","A consensus log item for GrandPa."],["GrandpaConsensusLogRef","A consensus log item for GrandPa."],["Seal","Seal popped using [`DigestRef::pop_seal`]."]],"fn":[["decode","Attempt to decode the given SCALE-encoded header."],["decode_partial","Attempt to decode the given SCALE-encoded header."],["extrinsics_root","Returns the value appropriate for [`Header::extrinsics_root`]. Must be passed the list of transactions in that block."],["hash_from_scale_encoded_header","Returns a hash of a SCALE-encoded header."],["hash_from_scale_encoded_header_vectored","Returns a hash of a SCALE-encoded header."]],"struct":[["AuraAuthoritiesIter","List of authorities in an AURA context."],["AuraAuthority",""],["AuraAuthorityRef",""],["AuraPreDigest","AURA slot number pre-digest."],["BabeAuthoritiesIter","List of authorities in a BABE context."],["BabeAuthority",""],["BabeAuthorityRef",""],["BabeNextConfig","Information about the next epoch config, if changed. This is broadcast in the first block of the epoch, and applies using the same rules as `NextEpochDescriptor`."],["BabeNextEpoch","Information about the next epoch. This is broadcast in the first block of the epoch."],["BabeNextEpochRef","Information about the next epoch. This is broadcast in the first block of the epoch."],["BabePrimaryPreDigest","Raw BABE primary slot assignment pre-digest."],["BabePrimaryPreDigestRef","Raw BABE primary slot assignment pre-digest."],["BabeSecondaryPlainPreDigest","BABE secondary slot assignment pre-digest."],["BabeSecondaryVRFPreDigest","BABE secondary deterministic slot assignment with VRF outputs."],["BabeSecondaryVRFPreDigestRef","BABE secondary deterministic slot assignment with VRF outputs."],["Digest","Generic header digest."],["DigestRef","Generic header digest."],["GrandpaAuthoritiesIter","List of authorities in a GrandPa context."],["GrandpaAuthority",""],["GrandpaAuthorityRef",""],["GrandpaScheduledChange","A scheduled change of authority set."],["GrandpaScheduledChangeRef","A scheduled change of authority set."],["Header","Header of a block, after decoding."],["HeaderRef","Header of a block, after decoding."],["LogsIter","Iterator towards the digest log items."],["PushSealError","Error potentially returned when pushing a seal at the end of the digest log items."]]};