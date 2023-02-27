import {Field, Int, ObjectType} from '@nestjs/graphql';
import {Gender} from "../gender.enum";

@ObjectType()
export class Person {
    @Field(() => Int, {description: 'id de la personne'})
    id: number;
    @Field(() => String, {description: 'nom de la personne'})
    name: string;

    @Field(() => Date, {description: 'date d\'anniversaire de la personne'})
    birthday: Date;

    @Field(() => String, {description: 'genre de la personne'})
    gender: Gender;

    @Field(() => String, {description: 'adresse de la personne'})
    address: string;
}
