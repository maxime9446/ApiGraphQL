import {Module} from '@nestjs/common';
import {PersonsService} from './persons.service';
import {PersonsResolver} from './persons.resolver';
import {AddressesService} from '../addresses/addresses.service';

@Module({
    providers: [PersonsResolver, PersonsService, AddressesService]
})
export class PersonsModule {
}
