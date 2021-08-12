import {
	Transfer,
	Withdrawal,
	Revocation
} from '../generated/Escrow/Escrow';
import { Event, Field, ArrayField, Item } from '../generated/schema';
import { ethereum } from '@graphprotocol/graph-ts';
import { handleEvent } from './utils/utils';

export function handleTransfer(event: Transfer): void {
  handleEvent(event,"Transfer");
}

export function handleWithdrawal(event: Withdrawal): void {
  handleEvent(event,"Withdrawal");
}

export function handleRevocation(event: Revocation): void {
  handleEvent(event,"Revocation");
}