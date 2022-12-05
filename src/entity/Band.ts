import { text } from "stream/consumers";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Artist } from "./Artist";

@Entity()
export default class Band {

    @PrimaryGeneratedColumn({name:'band_id'})
    id: number

    @Column({name:'band_name', nullable:false})
    name: string

    @Column({name:'formation_year', nullable:false})
    formationYear: string

    @Column({name: 'cover_image'})
    coverImage: string

    @Column({name:'band_description', type:'text'})
    description: string

   @OneToMany(() => Artist, (Artist) => Artist.band)
    artists : Artist[]
}   
