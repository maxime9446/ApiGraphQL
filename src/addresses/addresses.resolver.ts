import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {AddressesService} from './addresses.service';
import {Address} from './entities/address.entity';
import {CreateAddressInput} from './dto/create-address.input';
import {UpdateAddressInput} from './dto/update-address.input';

@Resolver(() => Address)
export class AddressesResolver {
    constructor(private readonly addressesService: AddressesService) {
    }

    @Mutation(() => Address)
    createAddress(@Args('createAddressInput') createAddressInput: CreateAddressInput) {
        return this.addressesService.create(createAddressInput);
    }

    @Query(() => [Address], {name: 'addresses'})
    findAll() {
        return this.addressesService.findAll();
    }

    @Query(() => Address, {name: 'address'})
    findOne(@Args('id', {type: () => Int}) id: string) {
        return this.addressesService.findOne(id);
    }

    @Mutation(() => Address)
    updateAddress(@Args('updateAddressInput') updateAddressInput: UpdateAddressInput) {
        return this.addressesService.update(updateAddressInput.id, updateAddressInput);
    }

    @Mutation(() => Address)
    removeAddress(@Args('id', {type: () => Int}) id: string) {
        return this.addressesService.remove(id);
    }
}
