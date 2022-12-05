import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Band from "./Band";

@Entity()
export class Artist {

    @PrimaryGeneratedColumn({ name: 'artist_id' })
    id: number

    @Column({ name: 'artist_name', nullable: false })
    name: string

    @Column({ name: 'birth_date', nullable: false })
    birthDate: string

    @Column({ name: 'death_date', nullable:true })
    deathDate: string

    @Column({ name: 'artist_cover' })
    artistCover: string

    @Column({name:'artist_instruments'})
    instruments: string

    @Column({name:'artist_biography', type:'text'})
    biography: string

    @ManyToOne(() => Band, (Band) => Band.artists)
    @JoinColumn({ name: '' })
    band: Band
}
