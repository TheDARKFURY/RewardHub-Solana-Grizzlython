/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category TransferXpToContributor
 * @category generated
 */
export type TransferXpToContributorInstructionArgs = {
  xpToTransfer: beet.bignum
}
/**
 * @category Instructions
 * @category TransferXpToContributor
 * @category generated
 */
export const transferXpToContributorStruct = new beet.BeetArgsStruct<
  TransferXpToContributorInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['xpToTransfer', beet.u64],
  ],
  'TransferXpToContributorInstructionArgs'
)
/**
 * Accounts required by the _transferXpToContributor_ instruction
 *
 * @property [_writable_] contributorAccount
 * @property [_writable_] gitRepoXpPoolAccount
 * @property [**signer**] leader
 * @category Instructions
 * @category TransferXpToContributor
 * @category generated
 */
export type TransferXpToContributorInstructionAccounts = {
  contributorAccount: web3.PublicKey
  gitRepoXpPoolAccount: web3.PublicKey
  leader: web3.PublicKey
}

export const transferXpToContributorInstructionDiscriminator = [
  183, 239, 143, 145, 120, 196, 229, 216,
]

/**
 * Creates a _TransferXpToContributor_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category TransferXpToContributor
 * @category generated
 */
export function createTransferXpToContributorInstruction(
  accounts: TransferXpToContributorInstructionAccounts,
  args: TransferXpToContributorInstructionArgs,
  programId = new web3.PublicKey('4HYr7M3ytiSoqr3Zh3iK1VcNNm7ZgrNikwmWYJdGMvw4')
) {
  const [data] = transferXpToContributorStruct.serialize({
    instructionDiscriminator: transferXpToContributorInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.contributorAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.gitRepoXpPoolAccount,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.leader,
      isWritable: false,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}